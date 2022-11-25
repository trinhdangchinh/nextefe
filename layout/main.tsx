import * as React from "react";
import { LayoutProps } from "../models/common";
import Link from "next/link";
export interface IMainLayoutProps {}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div>{children}</div>
    </div>
  );
}
