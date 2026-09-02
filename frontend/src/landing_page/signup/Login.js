import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../AuthProvider';

function Login() {
  const { login } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const email = form.loginEmail.value.trim();
    const password = form.loginPassword.value;

    const result = await login({ email, password });
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
                <div className="auth-card h-100 auth-side-panel p-5 d-flex flex-column justify-content-center align-items-start">
                  <div className="w-100">
                    <h1 className="mb-4">Welcome back</h1>
                    <p className="mb-4">
                      Log in to your Zerodha clone account to manage trades, watchlists, and your portfolio in one powerful dashboard.
                    </p>
                  </div>
                  <div className="mb-4 w-100">
                    <div className="d-flex align-items-start mb-3">
                      <span className="badge bg-primary rounded-pill me-3">1</span>
                      <div>
                        <strong>Fast login</strong>
                        <p className="mb-0 text-muted">Secure access to your trading workspace.</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start mb-3">
                      <span className="badge bg-primary rounded-pill me-3">2</span>
                      <div>
                        <strong>Realtime market view</strong>
                        <p className="mb-0 text-muted">Jump right into stocks, F&O, and funds.</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <span className="badge bg-primary rounded-pill me-3">3</span>
                      <div>
                        <strong>One account</strong>
                        <p className="mb-0 text-muted">Use the same account for investing and learning.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">
                      New here? <Link to="/signup">Create an account</Link>
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 d-flex justify-content-center">
                <div className="auth-card auth-form-card h-100">
                  <h2 className="mb-4">Login to your account</h2>
                  <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                      <label htmlFor="loginEmail" className="form-label">
                        Email or Mobile number
                      </label>
                      <input
                        type="text"
                        id="loginEmail"
                        name="loginEmail"
                        className="form-control auth-input"
                        placeholder="Enter email or mobile"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="loginPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="loginPassword"
                        name="loginPassword"
                        className="form-control auth-input"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-column flex-sm-row gap-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <Link to="/signup" className="text-primary text-decoration-none">
                        Forgot password?
                      </Link>
                    </div>
                    <button type="submit" className="btn btn-primary auth-submit w-100">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
