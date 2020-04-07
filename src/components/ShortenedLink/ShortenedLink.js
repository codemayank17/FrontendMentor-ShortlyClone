import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ShortenedLink.css";
export default function ShortenedLink({ _id, url, short, copy, copyFunc }) {
  return (
    <div className="shortened">
      <p className="orignal">{url}</p>
      <hr />
      <p className="generated">
        <a className="generated" target="_blank" href={short}>
          {short}
        </a>
      </p>
      <CopyToClipboard text={short}>
        <button
          className={copy ? "copied" : "copy"}
          onClick={() => copyFunc(_id)}
        >
          {copy ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>
    </div>
  );
}
