import React from "react";

type Props = {
  imgSrcOne: string;
  imgSrcTwo: string;
  names: string;
};

export default function Footer(props: Props) {
  return (
    <div>
      <div className="section-footer">
        <img className="logo" src={props.imgSrcOne} />
        <div className="title">Created by</div>
        <div className="subtitle">{props.names}</div>
        <div className="team-container">
          <img className="team" src={props.imgSrcTwo} />
        </div>
      </div>
    </div>
  );
}
