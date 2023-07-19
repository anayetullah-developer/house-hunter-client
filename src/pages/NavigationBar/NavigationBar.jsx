import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaUserTie } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavigationBar = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // You might want to redirect the user to the login page after logout
    // For example:
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar bg="light" className="navbar-bg" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <h2 className="m-0">
              <span className="text-special-color">LegoLand</span>{" "}
              <span className="text-tertiary">Market</span>
            </h2>
            <p className="text-uppercase tagline">Unleash Your Inner Builder</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-md-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                    : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/all-toys"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                    : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                }
              >
                All Toys
              </NavLink>
              {user ? (
                <>
                  <NavLink
                    to="/my-toys"
                    className={({ isActive }) =>
                      isActive
                        ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                        : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                    }
                  >
                    My Toys
                  </NavLink>
                  <NavLink
                    to="/add-toy"
                    className={({ isActive }) =>
                      isActive
                        ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                        : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                    }
                  >
                    Add a Toy
                  </NavLink>
                </>
              ) : (
                <></>
              )}

              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                    : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                }
              >
                Blog
              </NavLink>
            </Nav>
            {user ? (
              <>
                {!user.photoURL ? (
                  <FaUserTie className="user me-md-3" />
                ) : (
                  <Image
                    src={user?.photoURL}
                    className="profile-picture mx-md-3"
                    roundedCircle
                    title={user?.displayName}
                  />
                )}

                <Link to="/login">
                  <Button
                    className="btn btn-solid-primary py-2 px-4 d-block d-md-inline-block mt-2 mt-md-0 shadow-lg"
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <Button className="btn btn-solid-primary py-2 px-4 d-block d-md-inline-block mt-2 mt-md-0 shadow-lg">
                  Login
                </Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
