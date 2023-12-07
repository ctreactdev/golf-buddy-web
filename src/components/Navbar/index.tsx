import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { HandMetal } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-100 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <HandMetal />
        </Link>
        <Link href="/sign-in">Sign in</Link>
        <Link className={buttonVariants()} href="/sign-up">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
