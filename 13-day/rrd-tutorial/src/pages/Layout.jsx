import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1000px",
        }}
      >
        <h2 className="logo">
          <Link to="/">Codprog</Link>
        </h2>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="courses">Courses</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default Layout;
