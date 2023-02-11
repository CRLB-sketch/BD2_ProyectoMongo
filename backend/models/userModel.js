const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    user_name: {
      type: String,
      required: [true, 'Add user_name'],
    },
    password: {
      type: String,
      required: [true, 'Password required'],
      select: false,
    },
    profile_img: {
      type: String,
    },
    favorite_posts: [mongoose.Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
