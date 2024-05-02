import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="min-h-screen grid place-content-center text-neutral ">
        <div className="text-center ">
          <img
            src="https://www.lifewire.com/thmb/auk-givypeTY383aFHJnpl6fQSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/404-not-found-error-explained-2622936-Final-fde7be1b7e2e499c9f039d97183e7f52.jpg"
            alt="404"
            width={370}
            height={320}
            className="lg:w-120 h-120"
          />
          <h1 className="lg:text-5xl font-bold mb-5  ">Page Not Found</h1>
          <Link to="/" className="btn btn-sm lg:btn-md btn-primary">
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen grid place-content-center text-neutral ">
      <div className="text-center ">
        <h1 className="lg:text-5xl font-bold mb-5  ">Upps...!</h1>
        <h1 className="lg:text-5xl font-bold mb-5  ">Something went wrong</h1>
        <Link to="/" className="btn btn-sm lg:btn-md btn-primary">
          Back Home
        </Link>
      </div>
    </main>
  );
}

export default Error;
