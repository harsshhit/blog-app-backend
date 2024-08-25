const request = require("supertest");
const app = require("../app");

describe("GET /posts", () => {
  it("should return a list of posts", (done) => {
    request(app)
      .get("/posts")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});
