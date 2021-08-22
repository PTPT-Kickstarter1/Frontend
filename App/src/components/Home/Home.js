// import banner from "../utils/banners/banner.js";
import React from "react";
// import { connect } from "react-redux";
// import { Link as RouterLink } from "react-router-dom";
// import { getUser, logout, deleteProject } from "../../actions";

const Projects = (props) => {
  //   const [open, setOpen] = useState(false);
  //   const [projectToDelete, setProjectToDelete] = useState({});
  //   const { getUser } = props;
  // const classes = useStyles();

  //   useEffect(() => {
  //     getUser(localStorage.getItem("userId"));
  //   }, [getUser]);

  //   const handleClickOpen = (project) => {
  //     setProjectToDelete(project);
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setProjectToDelete({});
  //     setOpen(false);
  //   };

  //   const handleDelete = () => {
  //     deleteProject(projectToDelete);
  //     setProjectToDelete({});
  //     setOpen(false);
  //   };

  return (
    <React.Fragment>
      <main>
        <section id='banner' class='major'>
          <div class='inner'>
            <header class='major'>
              <h1>Kickstarter-1</h1>
            </header>
            <div class='content'>
              <p>
                Predict monetary success of kickstarter campaign
                <br />
                and released under the Creative Commons.
              </p>
              <a href='/' class='scrolly'>
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* <img src={banner} className='App-banner' alt='banner' /> */}

        <form></form>
      </main>
    </React.Fragment>
  );
};

export default Projects;
