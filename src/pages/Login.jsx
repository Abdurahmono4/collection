import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
function Login() {
  return (
    <div className="h-screen  grid place-content-center">
      <Form
        action=""
        method="POST"
        className="w-96 card p-8 bg-base-100 shadow-lg flex"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
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
          <SubmitBtn text="Login" />
          
        </div>
        <button className="btn btn-secondary btn-block">Guest user</button>
        <p className="text-center">
          Not a member?
          <Link to="./register" className="capitalize link link-primary">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
