"use client";

import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "../firebase";

import { useCollection } from "react-firebase-hooks/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faShare,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faThumbsUp } from "@fortawesome/free-regular-svg-icons";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
dayjs.extend(relativeTime);

export default function PostCard() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const db = getFirestore(app);

    const postsRef = collection(db, "posts");

    const q = query(postsRef, where("published", "==", true));

    getDocs(q).then((posts) => {
      let c: any = [];

      posts.forEach(async (post) => {
        const userId = await post.data().owner;

        const userRef = doc(db, `users_metadata/${userId}`);

        const docSnap = await getDoc(userRef);

        c.push({
          id: post.id,
          owner_data: docSnap.data(),
          ...post.data(),
        });

        //console.log(post.data().published_at.seconds);

        setData(c);
      });
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-3">
        {data.length > 0 &&
          data.map((post: any) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow border px-3 py-3"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <button
                    className="text-left flex gap-2 items-center hover:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent rounded"
                    disabled={true}
                  >
                    <div className="rounded-full w-10 h-10 flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        size="2x"
                        className=" text-gray-300"
                      />
                    </div>
                  </button>
                  <div className="flex flex-col">
                    <Link href={"/"} className="font-semibold text-neutral-800">
                      {post.owner_data.name}
                    </Link>
                    <Link href={"/"} className="text-sm">
                      {dayjs(post.published_at.seconds * 1000).toNow()}
                    </Link>
                  </div>
                </div>
                <button>
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    size="lg"
                    className=" text-neutral-800"
                  />
                </button>
              </div>
              <div>
                <h2 className="text-2xl py-4">{post.content}</h2>
              </div>
              <div className="flex gap-2 py-1 border-t border-neutral-300">
                <button className="flex-1 py-1 hover:bg-gray-100 flex gap-2 justify-center items-center font-semibold text-neutral-400">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    size="lg"
                    className=" text-neutral-400"
                  />
                  <span>Like</span>
                </button>
                <button className="flex-1 py-1 hover:bg-gray-100 flex gap-2 justify-center items-center font-semibold text-neutral-400">
                  <FontAwesomeIcon
                    icon={faComment}
                    size="lg"
                    className=" text-neutral-400"
                  />
                  <span>Comment</span>
                </button>
                <button className="flex-1 py-1 hover:bg-gray-100 flex gap-2 justify-center items-center font-semibold text-neutral-400">
                  <FontAwesomeIcon
                    icon={faShare}
                    size="lg"
                    className=" text-neutral-400"
                  />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
