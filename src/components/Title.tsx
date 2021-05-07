import React from "react";

type Props = {
  text: string;
};

export default function Title(props: Props) {
  return (
    <div>
      <h2>
        <div className="component-title ">{props.text}</div>
      </h2>
    </div>
  );
}
