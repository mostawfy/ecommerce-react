import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./style.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const passwordValidatior = (pass, conPass) => {
    if (pass !== conPass) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-2 shadow p-4 w-50 mt-5"
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

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            {...register("username", { required: true, minLength: 10 })}
          />
          {errors.username?.type == "required" && (
            <small className="text-danger font-weight">
              This field is required
            </small>
          )}
          {errors.username?.type == "minLength" && (
            <small className="text-danger font-weight">
              Must enter 10 characters at least
            </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Select
            aria-label="Default select example"
            {...register("gender", { required: true })}
          >
            <option>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </Form.Select>
          {errors.gender?.type == "required" && (
            <small className="text-danger font-weight">
              This field is required
            </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            })}
          />
          {errors.password?.type == "required" && (
            <small className="text-danger font-weight">
              This field is required
            </small>
          )}
          {errors.password?.type == "pattern" && (
            <small className="text-danger font-weight">
              Minimum eight characters, at least one letter and one number
            </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repeat Password"
            {...register("confirmPassword", {
              required: true,
              validate: {
                confirmPassword: (pass) =>
                  passwordValidatior(pass, getValues("password")),
              },
            })}
          />
          {errors.confirmPassword?.type == "required" && (
            <small className="text-danger font-weight">
              This field is required
            </small>
          )}
          {errors.confirmPassword?.type == "confirmPassword" && (
            <small className="text-danger font-weight">
              Two passwords not matched!
            </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree with terms and conditions"
            {...register("terms", { required: true })}
          />
          {errors.terms?.type == "required" && (
            <small className="text-danger font-weight">
              This field is required
            </small>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
