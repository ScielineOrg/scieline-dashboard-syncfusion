import * as React from 'react';
import './main-content.scss';
import Dashboard from '../Dashboard/Dashboard';

function MainContent({isOpen}) {
    return (<div>
      <div className="main-content">
        <Dashboard isOpen={isOpen}/>
      </div>
  </div>);
}
export default MainContent;