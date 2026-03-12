import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
      message: false,
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true, message: true });
    axios({
      method: "post",
      url: "https://getform.io/f/9aaa861d-daa6-4a48-a3a7-0affa312330c",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <>
      <div className="bgSiteGreen rounded p-4 mt-5 text-center contactForm">
        <div className="text-black">
          <h1 className="text-4xl">Get in Touch.</h1>
        </div>
        <form className="" onSubmit={handleOnSubmit}>
          <div className="flex flex-col justify-center items-center">
            <input
              className="h-10 mt-4 w-40 mb-2 rounded text-black text-center"
              type="email"
              name="email"
              placeholder="You@Example.com"
            />
            <input
              className="onVSmall h-40 mt-2 w-60 mb-4 rounded text-black text-center"
              type="text"
              name="message"
              placeholder="Your message"
            />
          </div>
          <button
            className="ml-10 mr-10 mt-5 mb-5 p-3 rounded bg-white text-black poppins"
            type="submit"
          >
            <p className="">Send</p>
          </button>
        </form>
      </div>
      {serverState.message && (
        <div className="poppins rounded mt-3 p-3 text-center text-black text-1xl">
          <p>Thanks! Your email has been submitted.</p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
