const mongoose = require('mongoose');

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
    posts: [mongoose.Schema.Types.ObjectId],
    profile_img: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
