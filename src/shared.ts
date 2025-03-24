import type { JSX } from 'react'
import type { BundledLanguage, BundledTheme, StringLiteralUnion } from 'shiki/bundle/web'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki/bundle/web'

export interface ShikiProp {
    children: string;
    lang: BundledLanguage;
    theme?: StringLiteralUnion<BundledTheme, string>;
}

export async function highlight({children : code, lang, theme="github-dark"} : ShikiProp) {
  const out = await codeToHast(code, {
    lang,
    theme: theme,
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
  }) as JSX.Element
}
