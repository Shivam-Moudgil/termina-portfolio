import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Patr Test",
    desc: "A desktop view pwa for recruiters to find out the best candidate for cyberSecurity job.",
    url: "https://patrtest.com",
  },
  {
    id: 2,
    title: "Haus Kitchens",
    desc: "A kithcen app where users can book a free no obligation design consultation.",
    url: "https://haus-hauskitchens.vercel.app/",
  },
  {
    id: 3,
    title: "Chat App",
    desc: "A RESTful API developed for the Haru fashion ecommerce project.",
    url: "https://chat.app",
  },
  {
    id: 4,
    title: "YOOX Clone",
    desc: "A web ecommmerce app where user can buy clothes and do the payment easily",
    url: "https://isnt-shivam-awesome.netlify.app/",
  },
  {
    id: 5,
    title: "Get Harvest Clone",
    desc: "A minimal, accessible and SEO-friendly website.",
    url: "https://get-harvest.netlify.app/",
  },
];

export default Projects;
