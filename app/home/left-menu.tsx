"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faLink,
  faUserGroup,
  faListSquares,
  faHouse,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { getAuth } from "firebase/auth";
import { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

import app from "../firebase";

export default function LeftMenu() {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="flex flex-col gap-1 col-span-2 font-semibold">
      <button className="text-left px-5 flex gap-2 items-center hover:bg-gray-200 rounded">
        <div className="rounded-full p-2 w-10 h-10 flex justify-center items-center">
          <FontAwesomeIcon icon={faHouse} className="text-blue-500" size="lg" />
        </div>
        <span>Home</span>
      </button>
      <button
        className="text-left px-5 flex gap-2 items-center hover:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent rounded"
        disabled={true}
      >
        <div className="rounded-full w-10 h-10 flex justify-center items-center">
          <FontAwesomeIcon
            icon={faUserCircle}
            size="xl"
            className=" text-gray-300"
          />
        </div>
        <span>{user ? user.displayName : "User"}</span>
      </button>

      <button
        className="text-left px-7 mt-3 flex gap-3 items-center hover:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent rounded"
        disabled={true}
      >
        <div className="rounded-full bg-gray-200 p-2 w-7 h-7 flex justify-center items-center">
          <FontAwesomeIcon icon={faListSquares} size="sm" />
        </div>
        <span>Menu</span>
      </button>
      <button
        className="text-left px-7 my-2 flex gap-3 items-center hover:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent rounded"
        disabled={true}
      >
        <div className="rounded-full bg-gray-200 p-2 w-7 h-7 flex justify-center items-center">
          <FontAwesomeIcon icon={faUserGroup} size="sm" />
        </div>
        <span>Friends</span>
      </button>

      <button
        className="text-left px-7 my-3 flex gap-3 items-center hover:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent rounded"
        disabled={true}
      >
        <div className="rounded-full bg-gray-200 p-2 w-7 h-7 flex justify-center items-center">
          <FontAwesomeIcon icon={faPeopleGroup} size="sm" />
        </div>
        <span>Groups</span>
      </button>
      <button
        className="text-left px-7 my-3 flex gap-3 items-center hover:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent rounded"
        disabled={true}
      >
        <div className="rounded-full bg-gray-200 p-2 w-7 h-7 flex justify-center items-center">
          <FontAwesomeIcon icon={faLink} size="sm" />
        </div>
        <span>Shortcut</span>
      </button>
    </div>
  );
}
