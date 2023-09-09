/*
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  theme: {
    type: String,
    required: true,
    trim: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  image: {
    type: String,
    trim: true,
  },
});

articleSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

module.exports = Article;
*/
