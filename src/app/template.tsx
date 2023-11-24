"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

type TemplateProps = {
  children: ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Template;
