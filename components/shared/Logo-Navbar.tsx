"use client";

import Link from "next/link";
import Image from "next/image";

import { Logo_NAVBAR_PROP } from "@/common/types/page-props";

export function LogoNavbar({ href, name, source }: Logo_NAVBAR_PROP) {
  return (
    <Link href={href}>
      <div className="flex items-center cursor-pointer gap-2 px-4 sm:px-6 flex-1">
        <Image
          src={source}
          alt={name}
          width={120}
          height={40}
          className="h-full w-auto"
        />
      </div>
    </Link>
  );
}
