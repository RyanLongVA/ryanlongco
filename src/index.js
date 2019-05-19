import React, { Component } from 'react';
import { render } from 'react-dom';
import BubbleLink from './components/BubbleLink';
import Hello from './Hello';
import './style.css';
// Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Views
import ViewPassions from './views/Passions';
import ViewSideProjects from './views/SideProjects';
import ViewSkills from './views/Skills';
import ViewWorkExperience from './views/WorkExperience';


class App extends Component {
  updateGradient(rgb1, rgb2) {
    var x = document.getElementsByClassName("root-background");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "";
    }
  }


  componentDidMount() {
    var x = document.getElementsByClassName("root-background");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "";
    }
  }
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="root-background">
        <Router>
          <Route exact path="/" component={base} />
          <Route path="/skills/" component={ViewSkills} />
          <Route path="/workexperience/" component={ViewWorkExperience} />
          <Route path="/passions/" component={ViewPassions}/>
          <Route path="/sideprojects/" component={ViewSideProjects} />
        </Router>
      </div>

    );
  }
}

function base() {
  return (
          <div className="base-bubble-overflow">
            <BubbleLink label="Ryan Long" preset='preset1' isText/>
            <Link to="/skills/"><BubbleLink label="Skills" preset='preset2'/></Link>
            <Link to="/workexperience/"><BubbleLink label="Work Experience" preset='preset3'/></Link>
            <Link to="/passions/"><BubbleLink label="Passions" preset='preset4'/></Link>
            <Link to="/sideprojects/"><BubbleLink label="Side Projects" preset='preset5'/></Link>
          </div>
  );
}

render(<App />, document.getElementById('root'));
