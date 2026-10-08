import { Outlet, Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <nav>
        <Link to="/Contact">Contact</Link>
        <Link to="/Contact/First">First</Link>
        <Link to="/Contact/Second">Second</Link>
      </nav>

      
      <Outlet></Outlet>
    </>
  );
}
