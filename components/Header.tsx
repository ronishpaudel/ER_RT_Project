"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header({ session }: { session: Session | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b flex h-16 items-center justify-between px-8">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold sm:text-2xl">Er.RC</span>
      </Link>
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-4">
          {session ? (
            <>
              <Avatar>
                <AvatarImage src={session.user?.image || ""} />
                <AvatarFallback>
                  {session.user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </>
          ) : (
            <Button onClick={() => signIn()}>Sign Up</Button>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t p-4 sm:hidden">
          {session ? (
            <div className="flex flex-col items-center space-y-4">
              <Avatar>
                <AvatarImage src={session.user?.image || ""} />
                <AvatarFallback>
                  {session.user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <Button onClick={() => signOut()} className="w-full">
                Sign Out
              </Button>
            </div>
          ) : (
            <Button onClick={() => signIn()} className="w-full">
              Sign Up
            </Button>
          )}
        </div>
      )}
    </header>
  );
}
