import React from "react";

import Titlebadge from "./Titlebadge";
import Title from "./Title";
import Description from "./Description";
import InfoCard from "./InfoCard";

type Props = {
  titleBadge: string;
  title: string;
  description: string;
  infoCards: { url: string; text: string; description?: string }[];
};

export default function Block(props: Props) {
  return (
    <div>
      <div className="content">
        <div>
          <div className="section section-what-usp">
            <div className="component-section-header">
              <Titlebadge text={props.titleBadge} />
              <Title text={props.title} />
              <Description text={props.description} />
            </div>

            <div className="component-usp-row">
              {props.infoCards.map((card) => {
                return (
                  <InfoCard
                    url={card.url}
                    text={card.text}
                    desc={card.description}
                  />
                );
              })}
            </div>
          </div>

          <div className="section-line">
            <div className="line "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
