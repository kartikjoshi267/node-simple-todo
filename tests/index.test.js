const app = require('../index');
const request = require('supertest');

beforeAll(done => {done()});

describe("GET /", () => {
    it("should display the homepage", (done) => {
        const res = request(app).get("/").expect(200).end(done);
    });
});

describe("POST /form", () => {
    it("should successfully add the items", (done) => {
        const res = request(app).post("/form").send({
            "item": ""
        }).expect(302).end(done);
    });
});

afterAll(done => {done()});