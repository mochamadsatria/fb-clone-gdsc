import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faSearch,
  faPlus,
  faUserCircle,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import CreateStory from "./story-reels.component";
import PeopleNearby from "./people-nearby.component";
import CreatePost from "./create-post.component";
import PostCard from "./post-card.component";
import LeftMenu from "./left-menu";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <div>
        <header className="grid grid-cols-10 gap-5 py-1 bg-white shadow items-center">
          <div className="px-7 w-full col-span-2">
            <div>
              <Image
                src={"/fakebook.svg"}
                alt="Fakebook brand logo"
                height="80"
                width="150"
                className="ml-[-16px]"
              />
            </div>
          </div>
          <div className="col-span-6 flex justify-center">
            <div className="flex items-center gap-1 rounded-full px-4 bg-gray-100 w-4/6">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search on fakebook"
                name="search"
                className="outline-none border-none focus:ring-0 bg-transparent disabled:text-gray-100"
                disabled={true}
              />
            </div>
          </div>
          <div className=" col-span-2 flex gap-2 px-7 justify-end">
            <button className="rounded-full bg-gray-200 p-2 w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </button>
            <button className="rounded-full bg-gray-200 p-2 w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button className="rounded-full p-2 w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                size="2x"
                className="text-gray-300"
              />
            </button>
          </div>
        </header>
      </div>

      <div className="grid grid-cols-10 gap-5 py-5">
        <LeftMenu />

        <div className=" col-span-6 flex justify-center">
          <div className="w-4/6 flex flex-col gap-5 overflow-y-scroll">
            <CreateStory />
            <CreatePost />
            <PeopleNearby />
            <PostCard />
            <ReelsOnPost />
          </div>
        </div>

        <div className="col-span-2 pr-2">
          <h2 className="px-5 font-semibold mb-2">Group chat</h2>
          <div className=" flex flex-col gap-2">
            <button className="text-left px-5 py-1 gap-3 items-center  hover:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent rounded hidden">
              <div className="rounded-full bg-gray-200 p-2 w-10 h-10 flex justify-center items-center">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <span>Group</span>
            </button>
            <button
              className="text-left px-5 py-1 flex gap-3 items-center  hover:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent rounded font-semibold"
              disabled={true}
            >
              <div className="rounded-full bg-gray-200 p-2 w-10 h-10 flex justify-center items-center">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <span>Create new group</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreatePostModal() {
  return (
    <div>
      <div>
        <div>
          <div>person</div>
          <div>Name</div>
        </div>
        <div>What you&apos;re thinking?</div>
        <div>themes</div>
        <div>miscelanous</div>
        <button>Send</button>
      </div>
    </div>
  );
}

function ReelsOnPost() {
  return <div></div>;
}
