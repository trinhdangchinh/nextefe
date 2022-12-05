import * as React from "react";
import { LayoutProps } from "../../models/common";
import Link from "next/link";
// export interface IMainLayoutProps {}

export default function EmptyLayout({ children }: LayoutProps) {
  return (
    <div>
      <div className="header w-[100%] h-[10vh] ">123</div>
      {children}
    </div>
  );
}
