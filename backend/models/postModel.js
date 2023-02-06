const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  user_name_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Add user_name_id'],
  },
  date: {
    type: String,
    required: [true, 'Add date'],
  },
  title: String,
  content: String,
  tags: [String],
  multimedia: [mongoose.Schema.Types.Mixed],
  likes: [mongoose.Schema.Types.ObjectId],
  comments: [
    {
      user_name_c_id: mongoose.Schema.Types.ObjectId,
      comment: String,
    },
  ],
});

module.exports = mongoose.model('Post', postSchema);
