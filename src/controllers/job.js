import JobCategory from "../models/jobCategory.js";

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const category = new JobCategory({ name });

        await category.save();
        res.status(201).json({ success: true, message: 'Job category created' })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server errror.' })
    }

}

export const listCategories = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 3
    const skip = (page - 1) * limit
    const search = req.query.search || '';
    const fetchAll = req.query.all === 'true'

    const query = {};
    if (search) {
        query.name = { $regex: search, $options: 'i' } // 'i' for case-insensitive
    }
    try {
        const response = await JobCategory.find(query)
            .skip(skip)
            .limit(limit)
        const total = await JobCategory.countDocuments()
        if (response) {
            return res.status(200).json({
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                response
            })
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

export const exportData = async (req, res) => {
    try {
        const categories = await JobCategory.find();
        res.status(200).json({ data: categories });
    } catch (error) {
        res.status(500).json({ message: 'Export failed' });

    }
}