import React from 'react';
import BubbleLink from '../components/BubbleLink';
// Router 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ViewWorkExperience extends React.Component {
    render() {
      return (
        <div>
          <div className="base-bubble-overflow">
            <Link to="/workexperience/RxeobIntern"><BubbleLink label="Rxeob Intern" preset='preset1'/></Link>
            <Link to="/workexperience/RxeobFullStack"><BubbleLink label="Rxeob Junior Full Stack" preset='preset2'/></Link>
            <Link to="/workexperience/FreelanceWork"><BubbleLink label="Freelance Work" preset='preset3'/></Link>
            <Link to="/"><BubbleLink label="Home" preset='preset-focus'/></Link>
          </div>
        </div>
      );
    }
}

export default ViewWorkExperience;