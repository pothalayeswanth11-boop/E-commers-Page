import { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "pothalayeswanth29@gmail.com" && pass === "Irctc@11")
       {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>📚 Online Book Store</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
