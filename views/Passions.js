import React from 'react';
import BubbleLink from '../components/BubbleLink';
// Router 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Pages
import WebAppSec from './passions/WebAppSec';

class ViewPassions extends React.Component {
    render() {
      return (
        <div>
        <Route exact path="/passions/" component={base} />
          <Route path="/passions/WebAppSec" component={WebAppSec} />
        </div>
      )
    }
}

function base() {
  return (
    <div className="base-bubble-overflow">
        <Link to="/passions/WebAppSec"><BubbleLink label="Web App Sec" preset='preset1'/></Link>
        <Link to="/passions/Music"><BubbleLink label="Music" preset='preset2'/></Link>
        <Link to="/passions/CtfEvents"><BubbleLink label="Ctf Events" preset='preset3'/></Link>
        <Link to="/passions/Volunteering"><BubbleLink label="Volunteering" preset='preset4'/></Link>
        <Link to="/"><BubbleLink label="Home" preset='preset-focus'/></Link>
      </div>
  );
}

export default ViewPassions;