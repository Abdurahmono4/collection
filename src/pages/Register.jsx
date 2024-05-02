import { Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { Form } from "react-router-dom";

function Register() {
  return (
    <div className="h-screen  grid place-content-center">
      <Form
        action=""
        method="POST"
        className="w-96 card p-8 bg-base-100 shadow-lg flex"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="display Name"
          name=" displayName "
          placeholder="user1"
          className="mb-4"
        />
        <FormInput
          type="url"
          name="photo Url"
          label="photoUrl"
          placeholder="photo"
          className="mb-4"
          defaultValue="http://"
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          className="mb-4"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>

        <p className="text-center mt-3">
          Not a member?
          <Link to="./login" className="capitalize link link-primary ">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
