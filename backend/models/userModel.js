const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        user_name: {
            type: String,
            required: [true, 'Add user_name'],
        },
        password: {
            type: String,
            required: [true, 'Add password'],
        },
        real_info: {
            name: String,
            lastname: String,
            email: String,
        },
        sex: {
            type: String,
            required: [true, 'Add Sex'],
        },
        birthday: Date,
        age: Number,
        favorite_posts: [mongoose.Schema.Types.ObjectId],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)
