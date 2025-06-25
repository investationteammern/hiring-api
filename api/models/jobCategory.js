import mongoose from 'mongoose';

const JobCategory = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

export default mongoose.model('JobCategory', JobCategory);