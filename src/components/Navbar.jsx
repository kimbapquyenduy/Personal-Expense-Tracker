import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { UserAuth } from "../context/AuthConext";
import { auth } from "../firebase";

export const Navbar = () => {
  const { user, logOut } = UserAuth();

  const HandleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <div className="w-full p-3 bg-blue-950 flex justify-center text-white">
        Navbar
      </div>
      {user?.email != null ? (
        <div className="p3 bg-black text-white" onClick={HandleLogOut}>
          Logout
        </div>
      ) : null}
    </div>
  );
};
