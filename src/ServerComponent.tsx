import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import React from "react";

interface Props {
  children: string;
  lang: BundledLanguage;
}

export const ServerComponenet = async ({ children, lang }: Props) => {
  const out = await codeToHtml(children, {
    lang,
    theme: "github-dark",
  });

  {
    /* 
    Usage: 
     <ServerComponent lang="ts">
        {[
          'console.log("Hello")',
          'console.log("World")',
        ].join('\n')}
      </ServerComponent>
    */
  }

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
};
