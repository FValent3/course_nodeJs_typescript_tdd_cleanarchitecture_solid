import request from "supertest";
import app from "../config/app";

describe("SignUp Routes", () => {
  test("Should return an account on sucess", async () => {
    await request(app)
      .post("/api/signup")
      .send({
        name: "Fabio",
        email: "fabio@gmail.com",
        password: "123456",
        passwordConfirmation: "123456",
      })
      .expect(200);
  });
});
