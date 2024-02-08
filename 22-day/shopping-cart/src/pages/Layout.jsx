import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <nav>
        <Link to="/">
          <h1>Shop</h1>
        </Link>
        <Link to="cart">Cart</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
