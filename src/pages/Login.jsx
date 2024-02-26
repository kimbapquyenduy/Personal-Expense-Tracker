import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        Navigate("/");
        // ...
      })
      .catch((error) => {
        setError(true);
      });
  };
  console.log(email);
  console.log(password);
  return (
    <div className=" flex ">
      <form onSubmit={handleLogin} className=" flex flex-col ">
        <input
          type="email"
          placeholder="Email"
          className="border"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-stone-400">
          Login
        </button>
        {error && <span className="text-red-600">Wrong email or password</span>}
      </form>
    </div>
  );
};
