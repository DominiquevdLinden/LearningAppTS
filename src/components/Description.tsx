import React from "react";

type Props = {
  text: string;
};

export default function Description(props: Props) {
  return (
    <div>
      <div className="description">{props.text}</div>
    </div>
  );
}
