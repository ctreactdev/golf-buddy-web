import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
// import { HandMetal } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { UserAccountNav } from "@/components";
import logo from "../../../public/img/golfbuddylogo.png";
const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-[#19855e] py-2 border-b border-s-zinc-200 fixed w-full z-100 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          {/* <HandMetal /> */}
          <img className="h-24 w-24" src={logo.src} />
        </Link>

        {session?.user ? (
          <div>
            <UserAccountNav />
          </div>
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
