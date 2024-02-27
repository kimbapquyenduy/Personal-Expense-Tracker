import React, { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthConext";
export const Register = () => {
  const { user, signUp } = UserAuth();

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex ">
      <form onSubmit={handleRegister} className=" flex flex-col ">
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
          Register
        </button>
        {error && <span className="text-red-600">Wrong email or password</span>}
      </form>
    </div>
  );
};
