import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-10 p-20">
      <h1 className="text-8xl font-bold">Unimplemented!</h1>
      <p className="text-2xl">
        This is just a warning that this route is not implemented yet!
      </p>
      <div>
        <Link href="/home">
          <button className=" bg-green-500 text-white font-bold px-20 py-2 rounded">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
