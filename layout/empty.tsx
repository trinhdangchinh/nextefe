import * as React from "react";
import { LayoutProps } from "../models/common";
import Link from "next/link";
// export interface IMainLayoutProps {}

export default function EmptyLayout({ children }: LayoutProps) {
  return <div>empty{children}</div>;
}
