
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaRegArrowAltCircleRight, FaRegEnvelope} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <Container fluid className="mt-5 bg-primary p-5 border-bottom">
        <Row className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-start align-items-center">
          <Col className="text-dim">
            <h4 className="mb-3 text-white">Address</h4>
            <p className="mb-1">Germeny - </p>
            <p className="mb-1">785 15h Street, Office 478</p>
            <p className="mb-1">Berlin, De 81566</p>
          </Col>
          <Col className="text-dim">
            <h4 className="mb-3 mt-md-0 mt-3 text-white">Say Hello</h4>
            <p className="mb-1 text-decoration-underline">
              anayetullah775@gmail.com
            </p>
            <h5 className="mb-1 text-white">01533371585</h5>
          </Col>
          <Col className="text-dim">
            <h4 className="mb-3 mt-md-0 mt-3 text-white">Socials</h4>
            <p className="mb-1">
              <Link className="text-dim">Facebook</Link>
            </p>
            <p className="mb-1">
              <Link className="text-dim">Twitter</Link>
            </p>
            <p className="mb-1">
              <Link className="text-dim">Instagram</Link>
            </p>
            <p className="mb-1">
              <Link className="text-dim">Youtube</Link>
            </p>
          </Col>
          <Col className="text-dim">
            <h4 className="mb-3 mt-md-0 mt-3 text-white">Newsletter</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <div className="">
                  <InputGroup className="mb-3 align-items-center w-75 border-bottom">
                  <FaRegEnvelope className="bottom-0 fs-5" />
                    <Form.Control
                      className="border-0 w-25 mx-auto bg-transparent rounded-0"
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <FaRegArrowAltCircleRight className="fs-5 cursor-pointer"/>
                  </InputGroup>
                </div>
              </Form.Group>
            </Form>
            <p className="mb-1">anaetullah7755@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
