import React from "react";
import { Card, Button } from "react-bootstrap";
import "../css/projects.css";
import axios from "axios";

// Show all the projects that we can contribute
const EachProject = props => {
  //console.log(props.project.body.split("\n"));

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={props.project.user.avatar_url} />
      <Card.Body>
        <Card.Title>{props.project.title}</Card.Title>
        <Card.Text>{props.project.body.split("\n")[1]}</Card.Text>
        <Button
          variant="primary"
          href={props.project.body
            .split("\n")[2]
            .substring(14, props.project.body.split("\n")[2].length)}
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.github.com/repos/bghoang/os-marketplace-mock/issues?state=closed"
      )
      .then(res => {
        console.log(res.data);
        this.setState({ projects: res.data });
      })
      .catch(err => console.log(err));
  }

  showProject(projects) {
    return projects.map(project => {
      return <EachProject project={project} key={project.id} />;
    });
  }

  render() {
    return (
      <div>
        {/*console.log(Object(Object(this.state.projects[0]).user).avatar_url)*/}
        <h1>OS MARKETPLACE</h1>
        <div className="projects">{this.showProject(this.state.projects)}</div>
        <div className="button">
          <Button variant="primary" href="/form">
            Share Project
          </Button>
        </div>
      </div>
    );
  }
}

export default Project;
