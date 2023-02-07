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
    profile_img: {
      // Changue this structure of img for support GridFS
      data: Buffer,
      contentType: String,
    },
    favorite_posts: [mongoose.Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
