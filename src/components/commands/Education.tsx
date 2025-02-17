import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Masters in Computer Science",
    desc: "Lovely Professional University | 2022 ~ 2024",
  },
  {
    title: "B.Sc (Hons) in Computing",
    desc: "Career Point University | 2018 - 2021",
  },
];

export default Education;
