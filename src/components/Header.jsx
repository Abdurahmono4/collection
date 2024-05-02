import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-neutral text-neutral-content py-2 align-items ">
      <div className="align-content flex justify-center sm:justify-end">
        {/* user */}
        {/* links */}
        <div className="flex gap-x-6 justify-center sm:justify-end">
          <Link to="./login" className="link link-hover text-xs sm:textsm ">
            Sign in / Guest
          </Link>
          <Link to="./register" className="link link-hover text-xs sm:textsm ">
            Create an Account
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
