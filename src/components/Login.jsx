import { useState, useEffect } from "react";
import bgVideo from "../assets/Laptop_Brands_and_Video_Generation.mp4";

function Login({ setIsLoggedIn, setLoggedInUser }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});
  const [ripples, setRipples] = useState([]);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const addRipple = (e) => {
    // Only add ripple if we click the box itself (not inputs/buttons) to avoid annoying double clicks
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    // Create unique ID for this ripple
    const newRipple = { x, y, id: Date.now() + Math.random() };
    setRipples((prev) => [...prev, newRipple]);

    // Remove it after the animation ends (so DOM doesn't get flooded)
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1200);
  };


  useEffect(() => {
    const savedUserStr = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
    if (savedUserStr) {
      try {
        const savedUser = JSON.parse(savedUserStr);
        setLoggedInUser(savedUser);
      } catch (e) {
        setLoggedInUser({ email: savedUserStr, name: savedUserStr.split('@')[0], role: "Accountant" });
      }
      setIsLoggedIn(true);
    }
  }, []);

  const handleSuccess = (userObj) => {
    setLoginSuccess(true);
    setTimeout(() => {
      const userStr = JSON.stringify(userObj);
      if (rememberMe) {
        localStorage.setItem("loggedInUser", userStr);
      } else {
        sessionStorage.setItem("loggedInUser", userStr);
      }
      setLoggedInUser(userObj);
      setIsLoggedIn(true);
    }, 1500);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (mobile.length < 10) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!email) newErrors.email = "Email is required";
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!confirmPass) {
      newErrors.confirmPass = "Confirm password is required";
    } else if (password !== confirmPass) {
      newErrors.confirmPass = "Passwords do not match";
    }

    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email]) {
      newErrors.email = "User already exists. Please login instead.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    users[email] = { password, name, mobile, role: "Accountant" };
    localStorage.setItem("users", JSON.stringify(users));
    handleSuccess({ email, name, role: "Accountant" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!email) newErrors.loginEmail = "Email is required";
    if (!password) newErrors.loginPassword = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (email === "pothalayeswanth29@gmail.com" && password === "Irctc@11") {
      handleSuccess({ email, name: "Yeswanth", role: "Accountant" });
      return;
    }

    const userObj = users[email];
    if (userObj) {
      if (typeof userObj === "string" && userObj === password) {
        handleSuccess({ email, name: email.split('@')[0], role: "Accountant" });
        return;
      } else if (userObj.password === password) {
        handleSuccess({ email, name: userObj.name, role: "Accountant" });
        return;
      }
    }

    setErrors({ general: "Invalid email or password" });
    setPassword("");
  };

  const handleDemoClick = () => {
    setEmail("pothalayeswanth29@gmail.com");
    setPassword("Irctc@11");
  };

  if (loginSuccess) {
    return (
      <div className="login-page">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="login-box success-box">
          <h2>🎉 Welcome!</h2>
          <p style={{ color: "rgba(255,255,255,0.8)" }}>Login successful. Redirecting...</p>
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-box" onClick={addRipple}>
        {/* Render our click ripples! */}
        {ripples.map((rip) => (
          <span
            key={rip.id}
            className="click-ripple"
            style={{ left: rip.x, top: rip.y }}
          />
        ))}

        <h2>💻 Premium Laptop Store</h2>
        {isSignUp ? (
          <form onSubmit={handleSignUp}>
            <h3>Create Account</h3>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors({ ...errors, name: "" }) }}
              autoFocus
            />
            {errors.name && <p className="inline-error">{errors.name}</p>}

            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => { setMobile(e.target.value); setErrors({ ...errors, mobile: "" }) }}
            />
            {errors.mobile && <p className="inline-error">{errors.mobile}</p>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: "" }) }}
            />
            {errors.email && <p className="inline-error">{errors.email}</p>}

            <input
              type="password"
              placeholder="Password (min 6 chars)"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: "" }) }}
            />
            {errors.password && <p className="inline-error">{errors.password}</p>}

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => { setConfirmPass(e.target.value); setErrors({ ...errors, confirmPass: "" }) }}
            />
            {errors.confirmPass && <p className="inline-error">{errors.confirmPass}</p>}

            <button type="submit">Sign Up</button>
            <p className="toggle-link">
              Already have an account? <span onClick={() => { setIsSignUp(false); setErrors({}); setEmail(""); setPassword(""); setConfirmPass(""); setName(""); setMobile(""); }}>Login</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <h3>Login</h3>
            {errors.general && <p className="error-msg">{errors.general}</p>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, loginEmail: "", general: "" }) }}
              autoFocus
            />
            {errors.loginEmail && <p className="inline-error">{errors.loginEmail}</p>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, loginPassword: "", general: "" }) }}
            />
            {errors.loginPassword && <p className="inline-error">{errors.loginPassword}</p>}

            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit">Sign In</button>
            <p
              className="demo-creds"
              onClick={handleDemoClick}
              style={{ cursor: "pointer", textDecoration: "underline", color: "#64ffda" }}
            >
              Demo: pothalayeswanth29@gmail.com / Irctc@11
            </p>
            <p className="toggle-link">
              Don't have an account? <span onClick={() => { setIsSignUp(true); setErrors({}); setEmail(""); setPassword(""); }}>Sign Up</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
