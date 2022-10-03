import React, { useState, useEffect } from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";
import PriceContext from "./PriceGenerator";
import { useContext } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const [price] = useContext(PriceContext);

  const landingpage = "guides and frameworks";

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    const viewedPrice = localStorage.getItem("viewedPrice");
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        LANDING: landingpage,
        PRICE: price,
        MMERGE8: viewedPrice,
      });
  };
  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="min-w-[170px]">
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="grid grid-cols-5 gap-2 md:min-w-[550px]">
          {status === "success" && (
            <p className="col-span-1 lg:col-span-5 mb-5 	 text-lg text-gray-500">
              Success. You will be notified when we launch.
            </p>
          )}
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          {status !== "success" ? (
            <p className="col-span-full	 lg:col-span-5 mb-5 	text-left text-lg text-gray-500">
              Join the waitlist for early access
            </p>
          ) : null}

          {status === "error" && (
            <div
              className="absolute mc__alert mc__alert--error"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}

          {status !== "success" ? (
            <input
              id="email-address"
              onChange={handleChange}
              value={email}
              type="email"
              autoComplete="email"
              required
              className="col-span-full	md:col-span-3 w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 "
              placeholder="Enter your email"
            />
          ) : null}
          {status !== "success" ? (
            <div className="mt-3 col-span-full	 rounded-md shadow sm:mt-0 md:col-span-2">
              <button
                type="submit"
                className=" w-full  justify-center rounded-md border border-transparent bg-sage px-5 py-3 text-base font-medium text-white hover:bg-sagedark focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Notify me
              </button>
            </div>
          ) : null}
        </div>
        {status === "sending" && (
          <p className="lg:col-span-5 mb-5 	 text-lg text-gray-500">
            sending...
          </p>
        )}
      </form>
    </div>
  );
};

export function Signup() {
  const postUrl = `https://writeway.us12.list-manage.com/subscribe/post?u=b1196d18ff516f1a287bc9e67&id=5afed049e3`;

  return (
    <div className="">
      <div className="mx-auto max-w-7xl ">
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    </div>
  );
}
