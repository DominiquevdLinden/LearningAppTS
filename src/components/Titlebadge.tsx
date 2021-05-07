import React from "react";

type Props = {
  text: string;
};

export default function Titlebadge(props: Props) {
  return (
    <div>
      <div className="title-badge">
        <div className="title-badge-title">{props.text}</div>
      </div>
    </div>
  );
}
