"use client";

import Link from "next/link";
import Image from "next/image";

import { Logo_NAVBAR_PROP } from "@/common/types/page-props";

export function LogoNavbar({ href, name, source }: Logo_NAVBAR_PROP) {
  return (
    <div className="flex items-center gap-2 px-4 sm:px-6">
      <Link href={href} className="cursor-pointer">
        <Image src={source} alt={name} width={120} height={40} />
      </Link>
    </div>
  );
}
