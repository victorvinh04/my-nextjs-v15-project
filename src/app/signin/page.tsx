"use client";
import { LoginForm } from "@/components/ui/base/login-form";
import Link from "next/link";
import Image from "next/image";

export default function SigninPage() {
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-14 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="flex items-center justify-center px-6 py-10 flex-cols min-h-svh md:p-10">
          <div className="gap-6 px-6 pb-2 dark:bg-gray-dark dark:text-white md:p-10">
            <div className="flex flex-col w-full max-w-sm gap-6 mx-auto rounded shadow-three">
              <Link href="/" className="self-center block gap-6 pt-4 font-medium">
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
