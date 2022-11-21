const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');

describe("test the root path ",()=>{
    test("it should response the GIT method", ()=>{
        const response = request (app).post("http://localhost:8000/User/add")
        .send({
        "Name":"obaid",
        "Email":"obaid",
        "AGE" : 12,
        "Contact":123
    
    })
    expect(response.statusCode).toBe(200);
})
})