import React from "react";
import { Card, Button } from "react-bootstrap";
import "../css/projects.css";
import axios from "axios";

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
        "https://api.github.com/repos/os-ucsd/os-ucsd.ucsd.edu/issues?q=is%3Aissue+state=closed"
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
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Project;
