import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
export default Layout;
