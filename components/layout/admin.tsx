import * as React from "react";
import { LayoutProps } from "../../models/common";
import Link from "next/link";
export interface MainLayoutProps {}

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>Side bar</div>
      <h1>Admin Layout</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div>{children}</div>
    </div>
  );
}
