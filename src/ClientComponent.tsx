import { JSX, useEffect, useState } from "react";
import { highlight, ShikiProp } from "./shared";
import React from "react";

export const ClientComponent = ({
  children,
  lang,
  initialTheme = "github-dark",
  colorMode = "dark",
}: ShikiProp & { initialTheme?: string; colorMode: string }) => {
  const [nodes, setNodes] = useState<JSX.Element>();
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    debugger;
    if (colorMode === "dark") {
      setTheme("github-dark");
    } else {
      setTheme("github-light");
    }
  }, [colorMode]);

  useEffect(() => {
    void highlight({ children, lang, theme }).then(setNodes);
  }, [theme]);

  return (
    <div
      className="text-white p-4 rounded-lg shadow-md overflow-auto"
      style={{ background: "#24292F", zIndex: "30" }}
    >
      {nodes ?? <p className="text-gray-500">Loading...</p>}
    </div>
  );
};
