import supertest from 'supertest';
import API from "../../Api"

describe("Routers test",()=>{

    test("Test /get method",()=>{
        const res =  await supertest(API).get("/allusers");
        expect(res.status).toBe(200);
    })

    test("Test /get method :id",()=>{
        const res =  await supertest(API).get("/profile/:id");
        expect(res.status).toBe(200)
    })


})