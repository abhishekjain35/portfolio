import ProjectsPage from "../projects";

const Projects = () => {
  const data = [
    {
      name: "MiniHouse",
      description:
        "This is a House sharing app. Users can host or book listings through this application. MiniHouse has features like authentication, data persistence, payments through stripe, Dashboards for host and normal users etc.",
      link: "https://github.com/abhishekjain35/Mini-house-client",
      date: "Mar - Apr, 2021",
      url: "https://minihouse.herokuapp.com/",
    },
    {
      name: "Portfolio-pwa",
      description:
        "This is the 2nd version of my portfolio built with React. It's a Progressive Web App (PWA) and could be installed as native app and works offline as well.",
      link: "https://github.com/abhishekjain35/portfolio-pwa",
      date: "May - June, 2020",
      url: "https://abhishekdev.netlify.app/",
    },
    {
      name: "Take-notes",
      description:
        "It's a note-taking web-app. It is built with ReactJs, Firebase and material-UI. It uses QuillJs as the editor for taking notes. Installable and works offline because it's a PWA(Progressive-Web-App)",
      link: "https://github.com/abhishekjain35/TakeNotes",
      date: "Jul – Aug, 2020",
      url: "https://takenotes1.netlify.app/",
    },
    {
      name: "Tshirt-store",
      description:
        "Made with MERN Stack, this is complete e-commerce t-shirt store with the user and admin panels, Role-based Authentication, Payments through Stripe and Braintree.",
      link: "https://github.com/abhishekjain35/Tshirt-store",
      date: "March - Apr, 2020",
    },
  ];
  
  return <ProjectsPage projects={data} />;
};

export default Projects;
