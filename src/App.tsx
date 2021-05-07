import "./App.css";
import Navbar from "./components/Navbar";
import Block from "./components/Block";

let navbarData = {
  imgSrcOne: "https://learntocodetogether.nl/assets/icon.svg",
  imgSrcTwo: "https://learntocodetogether.nl/assets/meetup-icon.svg",
  title: "Our Courses",
};

let Data = [
  {
    titleBadge: "Do you want to",
    title: "Learn how to code",
    description:
      "Awesome! Let’s do this together. We are here to support you in your coding journey.",
    infoCards: [
      {
        url: "https://learntocodetogether.nl/assets/team.svg",
        text: "Get help from experienced developers",
      },
      {
        url: "https://learntocodetogether.nl/assets/community.svg",
        text: "Learn & share with our community",
      },
      {
        url: "https://learntocodetogether.nl/assets/personal-speed.svg",
        text: "Personal & at your own speed",
      },
    ],
  },
  {
    titleBadge: "Courses",
    title: "Our Courses",
    description:
      "We have created courses to help you learn, with easy to follow steps and some sparks of fun!",
    infoCards: [
      {
        url: "https://learntocodetogether.nl/assets/expand-horizon.svg",
        text: "Learn new skills and expand your horizon",
      },
      {
        url: "https://learntocodetogether.nl/assets/developers.svg",
        text: "Follow courses created by experienced developers",
      },
      {
        url: "https://learntocodetogether.nl/assets/step-by-step.svg",
        text: "Fun, hands on and easy to follow",
      },
    ],
  },
  {
    titleBadge: "Why?",
    title: "Why do we do this",
    description:
      "It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together.",
    infoCards: [
      {
        url: "https://learntocodetogether.nl/assets/technology.svg",
        text: "Technology",
        description:
          "We love to experiment and create awesome stuff from the comfort of our couch.",
      },
      {
        url: "https://learntocodetogether.nl/assets/community.svg",
        text: "People",
        description:
          "It’s always fun to do things together, the excitement and the collaborations.",
      },
      {
        url: "https://learntocodetogether.nl/assets/personal-speed.svg",
        text: "Teaching",
        description: "We like to learn and to teach others the stuff we know.",
      },
    ],
  },
];

export default function App() {
  return (
    <div>
      <Navbar
        imgSrcOne={navbarData.imgSrcOne}
        imgSrcTwo={navbarData.imgSrcTwo}
        title={navbarData.title}
      />

      {Data.map((block) => {
        return (
          <Block
            titleBadge={block.titleBadge}
            title={block.title}
            description={block.description}
            infoCards={block.infoCards}
          />
        );
      })}

      <div className="section-footer">
        <img
          className="logo"
          src="https://learntocodetogether.nl/assets/logo.svg"
        />
        <div className="title">Created by</div>
        <div className="subtitle">
          Rein Op &#x27;t land &amp; Danny van der Jagt
        </div>
        <div className="team-container">
          <img
            className="team"
            src="https://learntocodetogether.nl/assets/danny&rein.svg"
          />
        </div>
      </div>
    </div>
  );
}
