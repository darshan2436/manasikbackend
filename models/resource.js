const mongoose = require('mongoose');


// Resource Schema
const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    type: { 
      type: String, 
      required: true,
      enum: ['blog', 'video', 'image']
    },
    basedContent: { 
      type: String, 
      required: true,
      enum: ['research', 'user']
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', resourceSchema);