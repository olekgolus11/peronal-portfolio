import ProjectPaneContent from "../interfaces/ProjectPaneContent";

const projectPaneTexts: ProjectPaneContent[] = [
  {
    projectId: 1,
    title: "IDEMIAN",
    timespan: "10.22 - 06.23",
    description: [
      {
        label: "Quick Overview",
        content: `Idemian is a web application made for @IDEMIA as a part of university's group project called "Projekt Innowacja". It is an application that is used both for onboarding new employees as well as for entartainment during company events.`,
      },
      {
        label: "My responsibilities",
        content: `The project was developed by 9 students and as the work was divided into two teams (frontend and backend), I was responsible for the frontend part of the application. Besides learning fundamentals of web development I also learned how to work in team and how to approach clients.`,
      },
    ],
    photo: "idemian.jpg",
  },
];

export default projectPaneTexts;
