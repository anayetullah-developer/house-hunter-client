import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import regAnimation from "../../assets/134945-zpunet-icon.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import axios from "axios";

const Register = () => {
  useTitle("Register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Emailerror, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  //   const [success, setSuccess] = useState("");
  const [inputType, setInputType] = useState("password");
  const [show, setShow] = useState(false);

  //   const navigation = useNavigate();

  const emailHandler = (e) => {
    const emailInput = e.target.value;

    setEmail(emailInput);

    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(emailInput)) {
      setEmailError("Please, Enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(passwordInput)) {
      setPasswordError(
        "Password should contain at least one lowercase, one uppercase, one number and one special character (@$!%*?&)"
      );
    } else {
      setPasswordError("");
    }
  };

  const showPassword = (condition) => {
    setShow(!show);
    if (!condition) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const userRole = form.role.value;
    // const photoURL = form.photo.value;

    // if (Emailerror) {
    //   form.email.focus();
    //   return;
    // } else if (PasswordError) {
    //   form.password.focus();
    //   return;
    // }

    axios
      .post("http://localhost:5001/register", {
        name: name,
        email: email,
        password: password,
        role: userRole,
        phone: phone
      })
      .then((response) => {
        if (response.data.insertedId > 0) {
          console.log("Ok");
        }
      });
  };

  return (
    <div className="">
      <h1 className="text-center mb-5 mt-3">Register</h1>
      <Container fluid>
        <Row>
          <Col className="vertical-height d-none d-md-block" md={5}>
            <div className="p-md-5">
              <h3>Get more things done with Loggin platform.</h3>
              <Lottie animationData={regAnimation} loop={true} />
            </div>
          </Col>
          <Col className="bg-tertiary rounded vertical-height" md={7}>
            <div className="p-md-5 mt-5 mt-md-0 w-75 mx-auto">
              <Form className="" onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label className="text-white">Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="name"
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="1">
                  <Form.Label className="text-white">
                    Are you house owner or renter
                  </Form.Label>
                  <Form.Select aria-label="Default select example" name="role">
                    <option>Open this select menu</option>
                    <option value="house-owner">House Owner</option>
                    <option value="house-renter">House Renter</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="2">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    className={Emailerror ? "border-danger" : ""}
                    required
                    value={email}
                    onChange={emailHandler}
                    name="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-white">{Emailerror}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="4">
                  <Form.Label className="text-white">Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    required
                    name="phone"
                    placeholder="Enter Phone Number"
                  />
                  <Form.Text className="text-white">{Emailerror}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="3">
                  <Form.Label className="text-white">Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      className={PasswordError ? "border-danger" : ""}
                      type={inputType}
                      value={password}
                      required
                      onChange={passwordHandler}
                      name="password"
                      placeholder="Enter Password"
                    />

                    {show ? (
                      <FaEyeSlash
                        className="text-muted position-absolute eye-icon-placement"
                        onClick={() => showPassword(true)}
                      />
                    ) : (
                      <FaEye
                        className="text-muted position-absolute eye-icon-placement"
                        onClick={() => showPassword(false)}
                      />
                    )}
                  </div>
                  <Form.Text className="text-white">{PasswordError}</Form.Text>
                </Form.Group>
                <Button
                  type="submit"
                  className="mb-2 bg-white text-secondary fw-bold border-0"
                >
                  Register
                </Button>
                {/* <p className="text-success">{success}</p> */}
                <br />
                <Form.Text className="ms-2 text-white">
                  Already have an account?{" "}
                  <Link
                    className="text-white text-decoration-underline"
                    to="/login"
                  >
                    Login
                  </Link>
                </Form.Text>
                <Form.Group className="mb-3" controlId="5"></Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
