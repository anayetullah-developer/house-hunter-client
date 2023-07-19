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
      <Navbar className="navbar-bg" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <h2 className="m-0">
              <span className="text-white">House Hunter</span>{" "}
            </h2>
            <p className="text-uppercase tagline">Rent a house</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-md-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-info"
                    : "navlink me-md-4 mb-md-0 mb-2 text-white"
                }
              >
                Home
              </NavLink>

              {user ? (
                <>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                        : "navlink me-md-4 mb-md-0 mb-2 text-white"
                    }
                  >
                    Dashboard
                  </NavLink>
                </>
              ) : (
                <></>
              )}

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-info"
                    : "navlink me-md-4 mb-md-0 mb-2 text-white"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-info"
                    : "navlink me-md-4 mb-md-0 mb-2 text-white"
                }
              >
                Blog
              </NavLink>
            </Nav>
            {user ? (
              <>
                {!user.photoURL ? (
                  <FaUserTie className="text-white fs-2 me-md-3" />
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
