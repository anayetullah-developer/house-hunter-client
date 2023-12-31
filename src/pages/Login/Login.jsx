import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link} from "react-router-dom";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import regianimation from "../../assets/134945-zpunet-icon.json";
import useTitle from "../../hooks/useTitle";
import axios from "axios";

const Login = () => {

  useTitle("Login")
//   const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState("password");
  

  const showPassword = (condition) => {
    setShow(!show)
    if(!condition) {
      setInputType("text")
    }else {
      setInputType("password")
    }
  }

  const loginHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    axios.post("https://house-hunter-server-alpha.vercel.app/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.user) {
            localStorage.setItem('token', response.data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
        }
      })
    
  };

  return (
    <div className="">
      <h1 className="text-center mt-3 mb-5">Login</h1>
      <Container fluid>
        <Row>
          <Col className="vertical-height d-none d-md-block" md={5}>
            <div className="p-md-5">
              <h3>Get more things done with Loggin platform.</h3>
              <Lottie animationData={regianimation} loop={true} />
            </div>
          </Col>
          <Col className="bg-tertiary rounded vertical-height" md={7}>
            <div className="p-md-5 mt-5 mt-md-0 w-75 mx-auto">
              <Form className="" onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="2">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    name="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="3">
                  <Form.Label className="text-white">Password</Form.Label>
                  <div className= "position-relative">
                    <Form.Control
                      
                      type={inputType}
                      required
                      name="password"
                      placeholder="Enter Password"
                    />

                    {show ?
                      <FaEyeSlash className="text-muted position-absolute eye-icon-placement" onClick={() => showPassword(true)}/>
                    :
                      <FaEye className="text-muted position-absolute eye-icon-placement" onClick={() => showPassword(false)}/>
                    }
                    
                  </div>
                </Form.Group>
                <Button
                  type="submit"
                  className="mb-2 bg-white text-secondary border-0 fw-bold"
                >
                  Login
                </Button>
                <Form.Text className="ms-2 text-white">
                  Do not have an an account?{" "}
                  <Link
                    className="text-white text-decoration-underline"
                    to="/register"
                  >
                    Register
                  </Link>
                </Form.Text>
                <Form.Group className="mb-3" controlId="5">
                  {/* <Form.Text>{}</Form.Text> */}
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
