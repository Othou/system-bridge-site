import React, { ReactElement } from "react";
import {
  ReactBaseProps,
  ReactMarkdownProps,
} from "react-markdown/src/ast-to-react";

function Link({
  children,
  href,
}: ReactBaseProps & ReactMarkdownProps): ReactElement {
  return (
    <a
      href={href as string}
      target={
        String(href).startsWith(
          `${global.window ? window.location.protocol : "http"}//${
            global.window ? window.location.host : "localhost"
          }`
        )
          ? "_self"
          : "_blank"
      }>
      {children}
    </a>
  );
}

export default Link;
