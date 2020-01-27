import React from "react";
import { Card, Button } from "react-bootstrap";
import "../css/projects.css";
import axios from "axios";

// Show all the projects that we can contribute
/*
const EachProject = props => {
    return (
      <Card style={{ className: "card", width: "20rem" }}>
        <Card.Img variant="top" src={props.project.owner.avatar_url} />
        <Card.Body>
          <Card.Title> Project's Name: {props.project.name}</Card.Title>
          <Card.Title>Owner: {props.project.owner.login}</Card.Title>
          <Card.Text> Description: {props.project.description}</Card.Text>
          <Button
            variant="outlined"
            color="primary"
            href={props.project.html_url}
          >
            Check Project
          </Button>
        </Card.Body>
      </Card>
    );
};

// Method to show the EachProject component
  showProject(projects) {
    return projects.map(project => {
      return <EachProject project={project} key={project.id} />;
    });
  }
*/

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

  render() {
    return (
      <div>
        {console.log(Object(Object(this.state.projects[0]).user).avatar_url)}
        <h1>OS MARKETPLACE</h1>
        <div className="projects">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Object(Object(this.state.projects[0]).user).avatar_url}
            />
            <Card.Body>
              <Card.Title>{Object(this.state.projects[0]).title}</Card.Title>
              <Card.Text>{Object(this.state.projects[0]).body}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Project;
