import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import React from "react";

interface Props {
  children: string;
  lang: BundledLanguage;
}

const ServerComponenet = async ({ children, lang }: Props) => {
  const out = await codeToHtml(children, {
    lang,
    theme: "github-dark",
  });

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
};
