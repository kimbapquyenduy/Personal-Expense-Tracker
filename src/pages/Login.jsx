import React, { useContext } from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthConext";
export const Login = () => {
  const { user, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nagivate = useNavigate();
  const OnSubmit = async (e) => {
    try {
      e.preventDefault();
      await logIn(email, password);
      setError("");
      nagivate("/");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className=" flex ">
      <form onSubmit={OnSubmit} className=" flex flex-col ">
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
