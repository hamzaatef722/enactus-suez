import { Fragment } from "react";

export default function Headline({ parts, as: Tag = "h1", className = "" }) {
  const [pre, highlight, post] = parts;
  return (
    <Tag className={className}>
      {pre}
      <span className="hl">{highlight}</span>
      {post.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </Tag>
  );
}
