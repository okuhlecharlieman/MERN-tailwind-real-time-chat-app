import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "./stepper";

function SignupModal() {
  // Define state variables to store form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSignup = (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Handle the sign-up logic here, e.g., send a request to your API
    // with the email and password for registration.
  };

  return (
    <div>
      <article>
        <label className="btn btn-outline-primary mx-1" htmlFor="modal-2">
          Create account
        </label>

        <input className="modal-state" id="modal-2" type="checkbox" />
        <div className="modal">
          <label className="modal-overlay" htmlFor="modal-2"></label>
          <div className="modal-content flex w-full flex-col gap-5 p-7">
            <label
              htmlFor="modal-2"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="flex flex-col gap-2">
              <h2 className="text-center text-2xl font-semibold">
                Create your account
              </h2>
              <div className="m-6">
                <Stepper />
              </div>
            </div>

            <form onSubmit={handleSignup}>
              <section>
                <div className="form-group">
                  <div className="form-field">
                    <label className="form-label">Email address</label>
                    <input
                      placeholder="Type here"
                      type="email"
                      className="input max-w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">
                      <span>Password</span>
                    </label>
                    <div className="form-control">
                      <input
                        placeholder="Type here"
                        type="password"
                        className="input max-w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">
                      <span>Confirm Password</span>
                    </label>
                    <div className="form-control">
                      <input
                        placeholder="Type here"
                        type="password"
                        className="input max-w-full"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field pt-5">
                    <div className="form-control justify-between">
                      <button type="submit" className="btn btn-primary w-full">
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </form>
            {/* Rest of your component */}
          </div>
        </div>
      </article>
    </div>
  );
}

export default SignupModal;
