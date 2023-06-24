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
  {
    projectId: 2,
    title: "DW2023",
    timespan: "01.23 - 03.23",
    description: [
      {
        label: "Quick Overview",
        content: `DW2023 was an informational website made specifically for the faculty day of my the faculty I study at.`,
      },
      {
        label: "My responsibilities",
        content: `I was responsible for both creating the website and deploying it.`,
      },
    ],
    photo: "dw2023.jpg",
  },
];

export default projectPaneTexts;
