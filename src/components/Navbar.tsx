import React from "react";

type Props = {
  imgSrcOne: string;
  imgSrcTwo: string;
  title: string;
};

export default function Navbar(props: Props) {
  return (
    <div>
      <header id="header" className="section-header scroll">
        <a href="./">
          <img className="icon" src={props.imgSrcOne} />
        </a>
        <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
          <img className="meetup-icon" src={props.imgSrcTwo} />
        </a>
        <nav>
          <a href="/courses.html">{props.title}</a>
        </nav>
      </header>
      <div className="section-header-spacer"></div>
    </div>
  );
}
