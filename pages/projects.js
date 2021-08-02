import ProjectsPage from "../components/projects";
import NavBar from "../components/navbar";

const Projects = () => {
  const projects = [
    {
      name: "Fyyur - Artist booking site",
      description:
        "Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues. This site lets you list new artists and venues, discover them, and create shows with artists as a venue owner.",
      link: "https://github.com/abhishekjain35/fyyur-project",
      date: "July, 2021",
    },
    {
      name: "Trivia Game",
      description:
        "Trivia is application where you can play with friends and family. Anyone can search and add questions based on categories. Play trivia based on random questions from selected categories etc.",
      link: "https://github.com/abhishekjain35/trivia-game",
      date: "July, 2021",
    },
    {
      name: "MiniHouse",
      description:
        "This is a House sharing app. Users can host or book listings through this application. MiniHouse has features like authentication, data persistence, payments through stripe, Dashboards for host and normal users etc.",
      link: "https://github.com/abhishekjain35/Mini-house-client",
      date: "Mar - Apr, 2021",
      url: "https://minihouse.herokuapp.com/",
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
      name: "Portfolio-pwa",
      description:
        "This is the 2nd version of my portfolio built with React. It's a Progressive Web App (PWA) and could be installed as native app and works offline as well.",
      link: "https://github.com/abhishekjain35/portfolio-pwa",
      date: "May - June, 2020",
      url: "https://abhishekdev.netlify.app/",
    },
    {
      name: "Tshirt-store",
      description:
        "Made with MERN Stack, this is complete e-commerce t-shirt store with the user and admin panels, Role-based Authentication, Payments through Stripe and Braintree.",
      link: "https://github.com/abhishekjain35/Tshirt-store",
      date: "March - Apr, 2020",
    },
    {
      name: "Vidly-backend",
      description:
        "Vidly is a video rental application. This is the backend part of it and is made with NodeJS, express and MongoDB. It has features like Signup/Login, rent movies, stocks, categories etc.",
      link: "https://github.com/abhishekjain35/Vidly-backend",
      date: "Feb 2020",
    },
    {
      name: "weather-app",
      description:
        "This is a weather app. It is made using React. I've implemented the OpenWeatherMap API and used Axios for fetching it. It is responsive too.",
      link: "https://github.com/abhishekjain35/weather-app",
      date: "Dec 2019",
      url: "https://abhishek-weather-app.netlify.app/",
    },
    {
      name: "Vidly",
      description:
        "Vidly is a video rental application. This is the frontend part of it and is made with React. It has functionalities to Signup/Login, rent movies, check stocks, Pagination, Filtering etc.",
      link: "https://github.com/abhishekjain35/Vidly",
      date: "Sep - Oct, 2019",
    },
  ];

  return (
    <>
      <NavBar />
      <ProjectsPage projects={projects} page={true} />
    </>
  );
};

export default Projects;
