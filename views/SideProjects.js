import React from 'react';
import BubbleLink from '../components/BubbleLink';
// Router 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ViewSideProjects extends React.Component {
    render() {
      return (
        <div>
          <div className="base-bubble-overflow">
            <Link to="/sideprojects/MetisBounty"><BubbleLink label="Metis Bounty" preset='preset1'/></Link>
            <Link to="/sideprojects/NodeGraph"><BubbleLink label="Music" preset='preset2'/></Link>
            <Link to="/sideprojects/BankAssets"><BubbleLink label="Ctf Events" preset='preset3'/></Link>
            <Link to="/sideprojects/impDefine"><BubbleLink label="Volunteering" preset='preset4'/></Link>
            <Link to="/"><BubbleLink label="Home" preset='preset-focus'/></Link>
          </div>
        </div>
      )
    }
}

export default ViewSideProjects;