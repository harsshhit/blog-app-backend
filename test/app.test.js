const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
const { expect } = chai;

describe("API Tests", () => {
  it("should return status 200 for GET /posts", (done) => {
    chai
      .request(app)
      .get("/posts")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should return status 404 for invalid route", (done) => {
    chai
      .request(app)
      .get("/invalid-route")
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
