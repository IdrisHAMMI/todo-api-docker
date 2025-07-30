const request = require('supertest');
const app = require('../../src/app-test');
const Task = require('../../src/models/task');

describe('Task API Integration Tests', () => {

  describe('GET /api/tasks', () => {
    test('should return empty array when no tasks exist', async () => {
      const response = await request(app)
        .get('/api/tasks')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
      expect(response.body.count).toBe(0);
    });

    test('should return all tasks', async () => {
      // Create test data
      await Task.create([
        { description: 'Task 1', status: 'pending' },
        { description: 'Task 2', status: 'completed' }
      ]);

      const response = await request(app)
        .get('/api/tasks')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(2);
      expect(response.body.count).toBe(2);
    });
  });

  describe('POST /api/tasks', () => {
    test('should create a new task', async () => {
      const taskData = {
        title: 'New Task',
        description: 'Task description',
        status: 'pending'
      };

      const response = await request(app)
        .post('/api/tasks')
        .send(taskData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Task created successfully');
      expect(response.body.data.title).toBe('New Task');
      expect(response.body.data.description).toBe('Task description');
      expect(response.body.data.status).toBe('pending');

      // Verify it was actually saved to database
      const savedTask = await Task.findById(response.body.data._id);
      expect(savedTask).toBeTruthy();
    });

    test('should fail to create task without description', async () => {
      const taskData = {
        title: 'Task without description'
      };

      const response = await request(app)
        .post('/api/tasks')
        .send(taskData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Description is required');
    });
  });

  describe('GET /health', () => {
    test('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body.status).toBe('ok');
      expect(response.body.timestamp).toBeDefined();
    });
  });
});