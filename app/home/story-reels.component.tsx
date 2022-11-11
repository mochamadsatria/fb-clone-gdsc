"use client";

import { Tab } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faClapperboard,
  faPlus,
  faStopwatch,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

export default function CreateStory() {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow border">
      <Tab.Group defaultIndex={0}>
        <Tab.List className={"flex"}>
          <Tab
            className={"font-semibold flex-1 flex flex-col items-center pl-3"}
          >
            <span className="flex items-center gap-3 pt-4 pb-4">
              <FontAwesomeIcon
                icon={faBookOpen}
                size="lg"
                className="ui-selected:text-blue-500 text-neutral-500"
              />
              <span className="ui-selected:text-blue-500 text-neutral-500">
                Story
              </span>
            </span>
            <div className="ui-selected:bg-blue-500 bg-transparent h-1 w-full "></div>
          </Tab>
          <Tab
            className={"font-semibold flex-1 flex flex-col items-center pr-3"}
          >
            <span className="flex items-center gap-3 pt-4 pb-4">
              <FontAwesomeIcon
                icon={faClapperboard}
                size="lg"
                className="ui-selected:text-blue-500 text-neutral-500"
              />
              <span className="ui-selected:text-blue-500 text-neutral-500">
                Reels
              </span>
            </span>
            <div className="ui-selected:bg-blue-500 bg-transparent h-1 w-full "></div>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="px-3 py-4 flex gap-8 items-center">
            <div className="flex flex-col gap-3 w-28 bg-gradient-to-b from-neutral-300 to-neutral-600 items-center overflow-hidden pt-10 rounded-lg shadow border hover:cursor-pointer ">
              <FontAwesomeIcon
                icon={faUser}
                size="7x"
                className="text-neutral-200"
              />
              <div className="flex flex-col items-center gap-1 mt-[-40px] rounded-lg">
                <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center z-50">
                  <div className=" bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="lg"
                      className="text-neutral-200"
                    />
                  </div>
                </div>
                <div className=" bg-white w-28 flex h-12 flex-col justify-end items-center mt-[-24px] z-40">
                  <span className="font-semibold text-sm py-1">
                    Create story
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className=" flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  className="text-neutral-700"
                />
                <span>Share moments to friends and family</span>
              </div>
              <div className=" flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faStopwatch}
                  size="lg"
                  className="text-neutral-700"
                />
                <span>Story disappear after 24 hour</span>
              </div>
              <div className=" flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  size="lg"
                  className="text-neutral-700"
                />
                <span>Comments in private</span>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="px-3 py-4 overflow-hidden">
              <div className="flex gap-3">
                <div className=" bg-gray-200 h-52 w-28 rounded-lg"></div>
                <div className=" bg-gray-200 h-52 w-28 rounded-lg"></div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
