import JobCategory from "../models/jobCategory.js";

export const createCategory = async (req, res) => {
    const { name } = req.body;

    const category = new JobCategory({ name });

    await category.save();
    res.status(201).json({ success: true, message: 'Job category created' })
}

