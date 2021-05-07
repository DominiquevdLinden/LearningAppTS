import React from "react";

type Props = {
  url: string;
  text: string;
};

export default function InfoCard(props: Props) {
  return (
    <div>
      <div className="item team">
        <img className="image" src={props.url} />
        <div className="component-title title">{props.text}</div>
      </div>
    </div>
  );
}
