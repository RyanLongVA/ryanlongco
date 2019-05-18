import React from 'react';
import BubbleLink from '../components/BubbleLink';
// Router 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ViewSkills extends React.Component {
    render() {
      return (
        <div>
          <div className="base-bubble-overflow">
            <Link to="/skills/FrontEnd"><BubbleLink label="Front End" preset='preset1'/></Link>
            <Link to="/skills/BackEnd"><BubbleLink label="Back End" preset='preset2'/></Link>
            <Link to="/skills/OSINT"><BubbleLink label="OSINT" preset='preset3'/></Link>
            <Link to="/"><BubbleLink label="Home" preset='preset-focus'/></Link>
          </div>
        </div>
      )
    }
}

export default ViewSkills;