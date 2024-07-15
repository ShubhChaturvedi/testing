const request = require('supertest');
const app = require('../index');

describe('GET /sum', () => {
    it('should return the sum of two numbers', async () => {
        const response = await request(app).post("/sum").send({ a: 5, b: 10 });

        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(15);
    });

    it('should return the sum of two numbers', async () => {
        const response = await request(app).post("/sum").send({ a: 10, b: 10 });

        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(20);
    });

});