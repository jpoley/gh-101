const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
  test('GET /api/hello should return hello message', async () => {
    const response = await request(app)
      .get('/api/hello')
      .expect(200);
    
    expect(response.body).toEqual({
      message: 'Hello from backend!'
    });
  });

  test('GET /health should return OK status', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);
    
    expect(response.body).toEqual({
      status: 'OK'
    });
  });
});