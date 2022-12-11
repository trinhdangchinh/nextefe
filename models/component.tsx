import { ReactNode } from "react";
import { AppProps } from "next/app";
export interface ComponentProps {
  children: ReactNode;
  props: AppProps;
}
