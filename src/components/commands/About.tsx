import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Shivam Moudgil</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Mohali,
        Punjab.
      </p>
      <p>
        I specialize in the <span className="text-primary">MERN stack</span> (MongoDB, Express.js, React, Node.js) and
        love building scalable, user-friendly web applications.
      </p>
      <p>
        I am passionate about writing clean, efficient code and solving real-world problems through technology.
      </p>
    </AboutWrapper>
  );
};

export default About;
