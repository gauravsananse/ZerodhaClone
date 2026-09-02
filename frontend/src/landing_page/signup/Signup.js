import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../AuthProvider';

function SignUp() {
  const { signup } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const fullName = form.fullName.value.trim();
    const email = form.signupEmail.value.trim();
    const password = form.signupPassword.value;
    const confirm = form.signupConfirm.value;

    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    const result = await signup({ fullName, email, password });
    if (!result.success) {
      setError(result.message);
      return;
    }

  };

  return (
    <section className="auth-page">
      <div className="container">
        <div className="row justify-content-center align-items-center auth-panel">
          <div className="col-xl-10 col-lg-12">
            <div className="row gx-5 justify-content-center align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
                <div className="auth-card auth-form-card h-100">
                  <h2 className="mb-4">Create your account</h2>
                  <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form-control auth-input"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signupEmail" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="signupEmail"
                        name="signupEmail"
                        className="form-control auth-input"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signupPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="signupPassword"
                        name="signupPassword"
                        className="form-control auth-input"
                        placeholder="Choose a password"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signupConfirm" className="form-label">
                        Confirm password
                      </label>
                      <input
                        type="password"
                        id="signupConfirm"
                        name="signupConfirm"
                        className="form-control auth-input"
                        placeholder="Confirm password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary auth-submit w-100">
                      Create account
                    </button>
                  </form>
                  <div className="mt-4 text-center text-muted">
                    Already have an account? <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 d-flex justify-content-center">
                <div className="auth-card p-5 text-center auth-side-panel h-100 d-flex flex-column justify-content-center align-items-center">
                  <div className="w-100 px-3">
                    <h1 className="mb-4">Trade smarter with Zerodha</h1>
                    <p className="mb-4 text-muted">
                      Open your account today and access stocks, derivatives, mutual funds, and more with the same modern trading experience.
                    </p>
                  </div>
                  <img
                    src="/media/images/homeHero.png"
                    alt="Trading dashboard"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
