"use client";

import { faEllipsis, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";

//https://randomuser.me/api/?page=3&results=10

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PeopleNearby() {
  const { data, error } = useSWR(
    "https://randomuser.me/api/?page=3&results=10",
    fetcher
  );

  if (error) return <div>failed to load people nearby</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <div className=" p-3 bg-white shadow border rounded-lg">
        <div className="flex justify-between mb-3">
          <h2 className="text-lg font-semibold">People You May Know</h2>
          <button>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-2 overflow-x-scroll pb-2 h-full">
            {data.results.map((user: any) => (
              <div
                key={user.name.first}
                className=" min-w-[144px] max-w-[144px] rounded-lg bg-white overflow-hidden shadow border"
              >
                <div className="flex flex-col gap-3 justify-between ">
                  <div>
                    <Image
                      src={user.picture.large}
                      alt=""
                      width="176"
                      height="176"
                      className=" rounded-t-lg"
                    />
                  </div>
                  <h3 className="font-semibold px-3">
                    <span className="truncate">
                      {user.name.first}&nbsp;{user.name.last}
                    </span>
                  </h3>
                  <div className="px-3 mb-3">
                    <button
                      className="px-2 py-2 flex gap-1 items-center bg-blue-100  hover:bg-blue-200 text-blue-500 rounded-lg font-semibold w-full justify-center"
                      disabled={true}
                    >
                      <div className="flex justify-center items-center">
                        <FontAwesomeIcon icon={faUserPlus} size="sm" />
                      </div>
                      <span className="text-sm">Add friend</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
