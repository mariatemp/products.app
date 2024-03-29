const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../app');

require('dotenv').config();

beforeEach(async ()=> {
  await mongoose.connect(proccess.env.MONGODB_URI)
  .then(
    () => { console.log("Connection to MongoDB established")},
    err => { console.log("Failed to connect to MongoDB", err)}
  )
});

afterEach(async () =>{
  await mongoose.connection.close();
})

describe("Request GET /api/users", () => {
  it("Returns all users", async () => {
    const res = await request(app).get('/api/users');
  })
})