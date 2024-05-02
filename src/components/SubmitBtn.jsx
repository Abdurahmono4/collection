import { useNavigate } from "react-router-dom";

function SubmitBtn({ text }) {
  const navigation = useNavigate();
  const isSubmitting = navigation.state == "submitting";

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="bg-base-100 text-base-100 text-base-800 font-bold py-2 px-4 rounded-lg shadow-lg"
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
        </>
      ) : (
        text || "Submit"
      )}
    </button>
  );
}

export default SubmitBtn;
