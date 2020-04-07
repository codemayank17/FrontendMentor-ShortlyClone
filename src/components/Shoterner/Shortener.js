import React from "react";
import axios from "axios";
import ShortenedLink from "../ShortenedLink/ShortenedLink";
import shortid from "shortid";
import "./Shortener.css";
export default function Shortener() {
  const [shortened, setShortened] = React.useState([]);
  const [inputText, setInputText] = React.useState("");
  const [error, setError] = React.useState(null);
  const shorten = (x) => {
    const reflink = "https://rel.ink/api/links/";
    const result = validURL(x);
    if (result.valid) {
      setError(null);

      axios({
        method: "post",
        url: reflink,
        data: {
          url: result.url,
        },
      }).then((res) => {
        setShortened((prev) => [
          ...prev,
          {
            _id: shortid.generate(),
            url: res.data.url,
            copy: false,
            short: `https://rel.ink/${res.data.hashid}`,
          },
        ]);
      });
    } else {
      if (x === "") setError("Please add a Link!");
      else setError("Please add a valid Link!");
    }
  };

  const validURL = (myURL) => {
    var pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
    if (pattern.test(myURL)) {
      return { valid: true, url: myURL };
    } else return { valid: false };
  };

  const copyFunc = (id) => {
    let arr = [...shortened];

    arr.map((a) => (a._id === id ? (a.copy = true) : (a.copy = false)));

    setShortened(arr);
    console.log(arr);
    console.log(shortened);
  };
  return (
    <div className="shortener">
      <div className="shorten-form">
        <div className="form-group">
          <input
            className={`shortener-text-input${error ? " error-input" : ""}`}
            type="text"
            placeholder="Shorten a Link here."
            onChange={(e) => setInputText(e.target.value)}
          />
          <span className="error">{error ? error : ""}</span>
        </div>
        <button className="shorten-btn" onClick={() => shorten(inputText)}>
          Shorten It!
        </button>
      </div>
      <div className="shortened-links">
        {shortened.map(({ _id, url, short, copy }) => (
          <ShortenedLink
            key={_id}
            _id={_id}
            url={url}
            copy={copy}
            short={short}
            copyFunc={copyFunc}
          />
        ))}
      </div>
    </div>
  );
}
