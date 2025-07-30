const Task = require('../../src/models/task');

describe('Task Model Unit Tests', () => {
  test('should create a simple task', async () => {
    const task = new Task({
      description: 'Simple test task'
    });
    
    const savedTask = await task.save();
    
    expect(savedTask.description).toBe('Simple test task');
    expect(savedTask.status).toBe('pending');
  });
});