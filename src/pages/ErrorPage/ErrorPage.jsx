import { Card } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/84885-404-sleep-cat.json"
import Lottie from "lottie-react";
import useTitle from "../../Hooks/useTitle";



const ErrorPage = () => {
  const { error, status } = useRouteError();
  useTitle('404')
  return (
    <div className="container">
      <Card className="mt-5 border-0">
        <div className="w-50 mx-auto"><Lottie animationData={errorImg}/></div>
        <Card.Body>
            <h1 className="text-center text-special-color carousel-heading">{status}</h1>
            <h4 className="text-center text-secondary">{error.message}</h4>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ErrorPage;
