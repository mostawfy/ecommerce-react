import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./style.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center vw-100">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="border shadow p-4 rounded w-50"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/,
            })}
          />
          {errors.email?.type == "required" && (
            <small className="text-danger font-weight">
              This field is required
            </small>
          )}
          {errors.email?.type == "pattern" && (
            <small className="text-danger font-weight">
              Enter a valid Email
            </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <small className="text-danger font-weight">
              This field is required
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember me"
            {...register("remember")}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
