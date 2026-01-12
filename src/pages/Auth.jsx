import { useState } from "react";


function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>

        <form>
          {!isLogin && (
            <>
              <input type="text" placeholder="Full Name" required />
            </>
          )}

          <input type="email" placeholder="Gmail" required />
          <input type="password" placeholder="Password" required />

          {!isLogin && (
            <>
              <select required>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input type="text" placeholder="Address" required />
              <input type="tel" placeholder="Mobile Number" required />
            </>
          )}

          <button type="submit">
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Sign in</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Auth;
