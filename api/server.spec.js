  
const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
//   it("should set testing environment", () => {
//     expect(process.env.DB_ENV).toBe("testing");
//   });

  describe("GET /", () => {
    it("should return status code 200", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
        it("should return the right structure", async () => {
          const res = await request(server).get("/");
          expect.objectContaining({
            book: expect.any(String),
            author: expect.any(String)
          });
        });
    });
    
    describe("POST /", () => {
      it("should return status code 201", async () => {
        const res = await request(server).post("/").send({author: "arash", title:"node testing"})
            .expect(function(res) {
                res.body = {author: "arash", title:"node testing"}
             })
             .expect(201, {
              author: "arash",
              title:"node testing"
                })
        expect(res.status).toBe(201)
      })
    })
    
    describe("DELETE /", () => {
      it("should return status code 201", async () => {
        const res = await request(server).delete("/39");
        expect(res.status).toBe(201);
      })
    });
    describe("DELETE /", () => {
      it("should return a json message", async () => {
          const res = await request(server).delete("/38");
          expect(res.type).toEqual("application/json");
        });
    })
    
  });
 
