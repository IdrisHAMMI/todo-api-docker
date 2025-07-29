const mongoose = require('mongoose');

//TASK MODEL
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true  // removes extra spaces (maybe not needed for this project)
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'], // allowed status array values
    default: 'pending'  // default value if null
  }
}, {
  timestamps: true
});


const Task = mongoose.model('Task', taskSchema, 'todo');

module.exports = Task;