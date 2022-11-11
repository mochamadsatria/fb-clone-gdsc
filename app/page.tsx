"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import {
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getFirestore, setDoc, Timestamp } from "firebase/firestore";

import app from "./firebase";
import BannerDemo from "./home/banner-demo.component";
import { useRouter } from "next/navigation";

export default function SignInSignUpPage() {
  let [isOpen, setIsOpen] = useState(false);

  let initialRef = useRef(null);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    gender: string;
    dob_day: string;
    dob_month: string;
    dob_year: string;
  }>();

  useEffect(() => {
    setFocus("first_name");
  }, [isOpen]);

  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    let auth = getAuth(app);

    let db = getFirestore(app);

    setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        const user = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        const userRef = doc(db, "users_metadata", user.user.uid);

        const ca = await setDoc(userRef, {
          name: data.first_name + " " + data.last_name,
          gender: data.gender,
          dob: `${data.dob_day + "-" + data.dob_month + "-" + data.dob_year}`,
        });

        return updateProfile(user.user, {
          displayName: data.first_name + " " + data.last_name,
        });
      })
      .then(() => {
        router.replace("/home");
      });
  });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <div className="flex flex-col md:flex-row md:pt-36 justify-between px-20">
        <div className="pt-10">
          <Image
            src={"/fakebook.svg"}
            alt="Fakebook brand logo"
            height="150"
            width="300"
            className="ml-[-27px]"
          />
          <p className="text-2xl max-w-md">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 py-20 md:py-0">
          <div className="flex flex-col gap-5 p-5 rounded-lg shadow-lg border w-96 bg-white">
            <LoginForm />
            <hr />
            <div className="flex justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="rounded bg-green-500 hover:bg-green-600 text-white text-lg py-2 font-bold px-5"
              >
                Create New Account
              </button>
            </div>
          </div>
          <span>
            <Link
              href={"/pages/create"}
              className="font-semibold text-sm hover:underline"
            >
              Create Page
            </Link>{" "}
            for a celebrity, brand or business.
          </span>
        </div>

        <Dialog open={isOpen} onClose={() => false} initialFocus={initialRef}>
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 bg-white/80" aria-hidden="true" />
          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-min rounded bg-white border shadow-lg">
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <Dialog.Title className={"text-4xl font-semibold"}>
                    Sign Up
                  </Dialog.Title>
                  <button onClick={() => setIsOpen(false)} className="p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <Dialog.Description className={" text-neutral-700 mt-2"}>
                  It&apos;s quick and easy
                </Dialog.Description>
              </div>
              <hr />
              <div className="p-5">
                <form
                  className=" flex flex-col gap-4 w-full"
                  onSubmit={onSubmit}
                >
                  <div className="flex gap-5">
                    <input
                      type={"text"}
                      placeholder="First name"
                      className="rounded border border-neutral-300 bg-neutral-100"
                      {...register("first_name", { required: true })}
                    />
                    <input
                      type={"text"}
                      placeholder="Last name"
                      className="rounded border border-neutral-300 bg-neutral-100"
                      {...register("last_name", { required: true })}
                    />
                  </div>
                  <input
                    type={"email"}
                    placeholder="Email address"
                    className="rounded border border-neutral-300 bg-neutral-100"
                    {...register("email", { required: true })}
                  />
                  <input
                    type={"password"}
                    placeholder="Password"
                    className="rounded border border-neutral-300 bg-neutral-100"
                    {...register("password", { required: true })}
                  />
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-sm">Date of birth</label>
                      <span className="flex gap-4 ">
                        <select
                          className="rounded text-sm w-full bg-white"
                          {...register("dob_day", { required: true })}
                        >
                          <option value={"1"}>1</option>
                          <option value={"2"}>2</option>
                          <option value={"3"}>3</option>
                          <option value={"4"}>4</option>
                          <option value={"5"}>5</option>
                          <option value={"6"}>6</option>
                          <option value={"7"}>7</option>
                          <option value={"8"}>8</option>
                          <option value={"9"}>9</option>
                          <option value={"10"}>10</option>
                          <option value={"11"}>11</option>
                          <option value={"12"}>12</option>
                          <option value={"13"}>13</option>
                          <option value={"14"}>14</option>
                          <option value={"15"}>15</option>
                          <option value={"16"}>16</option>
                          <option value={"17"}>17</option>
                          <option value={"18"}>18</option>
                          <option value={"19"}>19</option>
                          <option value={"20"}>20</option>
                          <option value={"21"}>21</option>
                          <option value={"22"}>22</option>
                          <option value={"23"}>23</option>
                          <option value={"24"}>24</option>
                          <option value={"25"}>25</option>
                          <option value={"26"}>26</option>
                          <option value={"27"}>27</option>
                          <option value={"28"}>28</option>
                          <option value={"29"}>29</option>
                          <option value={"30"}>30</option>
                          <option value={"31"}>31</option>
                        </select>

                        <select
                          className="rounded text-sm w-full bg-white"
                          {...register("dob_month", { required: true })}
                        >
                          <option value={"01"}>January</option>
                          <option value={"02"}>February</option>
                          <option value={"03"}>March</option>
                          <option value={"04"}>April</option>
                          <option value={"05"}>Mei</option>
                          <option value={"06"}>June</option>
                          <option value={"07"}>July</option>
                          <option value={"08"}>August</option>
                          <option value={"09"}>September</option>
                          <option value={"10"}>October</option>
                          <option value={"11"}>November</option>
                          <option value={"12"}>Desember</option>
                        </select>

                        <select
                          className="rounded text-sm w-full bg-white"
                          {...register("dob_year", { required: true })}
                        >
                          <option value={"1990"}>1990</option>
                          <option value={"1991"}>1991</option>
                          <option value={"1992"}>1992</option>
                          <option value={"1993"}>1993</option>
                          <option value={"1994"}>1994</option>
                          <option value={"1995"}>1995</option>
                          <option value={"1996"}>1996</option>
                          <option value={"1997"}>1997</option>
                          <option value={"1998"}>1998</option>
                          <option value={"1999"}>1999</option>
                          <option value={"2000"}>2000</option>
                          <option value={"2001"}>2001</option>
                          <option value={"2002"}>2002</option>
                          <option value={"2003"}>2003</option>
                          <option value={"2004"}>2004</option>
                          <option value={"2005"}>2005</option>
                          <option value={"2006"}>2006</option>
                          <option value={"2007"}>2007</option>
                          <option value={"2008"}>2008</option>
                          <option value={"2009"}>2009</option>
                          <option value={"2010"}>2010</option>
                        </select>
                      </span>
                    </div>
                    <div>
                      <label className="text-sm">Gender</label>
                      <div className="flex gap-4 text-sm">
                        <label className="border border-neutral-300 px-4 py-2 flex items-center gap-3 rounded w-full">
                          <input
                            type={"radio"}
                            value={"female"}
                            {...register("gender", { required: true })}
                          />
                          <span>Female</span>
                        </label>
                        <label className="border border-neutral-300 px-4 py-2 flex items-center gap-3 rounded w-full">
                          <input
                            type={"radio"}
                            value={"male"}
                            {...register("gender", { required: true })}
                          />
                          <span>Male</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <span className="text-sm">
                      People who use our service may have uploaded your contact
                      information to Facebook.{" "}
                      <Link
                        href={"/"}
                        className="text-blue-500 hover:underline"
                      >
                        Learn more.
                      </Link>
                    </span>
                    <span className="text-sm">
                      By clicking Sign Up, you agree to our{" "}
                      <Link
                        href={"/legal/terms"}
                        className="text-blue-500 hover:underline"
                      >
                        Terms
                      </Link>
                      ,{" "}
                      <Link
                        href={"/about/privacy"}
                        className="text-blue-500 hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href={"/policies/cookies"}
                        className="text-blue-500 hover:underline"
                      >
                        Cookies Policy
                      </Link>
                      . You may receive SMS notifications from us and can opt
                      out at any time.
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="text-lg font-bold text-white bg-green-600 rounded-lg px-20 py-2 "
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
      <BannerDemo />
    </div>
  );
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    let auth = getAuth();

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, data.email, data.password);
      })
      .then(() => {
        router.replace("/home");
      });
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input
        type={"email"}
        placeholder="Email address"
        className="rounded text-lg py-3 border-neutral-300"
        {...register("email", { required: true })}
      />
      <input
        type={"password"}
        placeholder="Password"
        className="rounded text-lg py-3 border-neutral-300"
        {...register("password", { required: true })}
      />
      <button
        type="submit"
        className="rounded bg-blue-500 text-white text-lg py-2 font-bold"
      >
        Log In
      </button>
      <div className="flex justify-center text-sm text-blue-500 font-semibold">
        <Link href={"/recover/initiate"} className="hover:underline">
          Forgotten password?
        </Link>
      </div>
    </form>
  );
}
