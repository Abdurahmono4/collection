import { Outlet } from "react-router-dom";

//components
import { Navbar } from "../components";
import Header from "../components/Header";
function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default HomeLayout;
