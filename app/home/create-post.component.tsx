"use client";

import {
  faLaugh,
  faPhotoVideo,
  faUserCircle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

import app from "../firebase";

export default function CreatePost() {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="shadow border bg-white p-3 rounded-lg">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <button className="">
            <div className="rounded-full w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                size="2x"
                className=" text-gray-300"
              />
            </div>
          </button>
          <button className=" bg-gray-100 rounded-full px-4 py-2 text-lg w-full text-left hover:bg-gray-200">
            What are you thinking, {user ? user.displayName : "User"}?
          </button>
        </div>
        <hr />
        <div className="flex">
          <button
            className="bg-white hover:bg-gray-100 p-2 font-semibold flex-1 flex justify-center items-center disabled:text-gray-300 disabled:hover:bg-white"
            disabled={true}
          >
            <span className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faVideo}
                size="xl"
                className=" text-red-500"
              />
              <span>Livestream video</span>
            </span>
          </button>
          <button
            className="bg-white hover:bg-gray-100 p-2 font-semibold flex-1 flex justify-center items-center disabled:text-gray-300 disabled:hover:bg-white"
            disabled={true}
          >
            <span className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faPhotoVideo}
                size="xl"
                className=" text-green-500"
              />
              <span>Photos/video</span>
            </span>
          </button>
          <button
            className="bg-white hover:bg-gray-100 p-2 font-semibold flex-1 flex justify-center items-center disabled:text-gray-300 disabled:hover:bg-white"
            disabled={true}
          >
            <span className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faLaugh}
                size="xl"
                className=" text-yellow-300"
              />
              <span>Feeling/activity</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
