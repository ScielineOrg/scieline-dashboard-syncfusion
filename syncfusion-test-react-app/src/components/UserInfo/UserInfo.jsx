import * as React from 'react';
import './user-info.scss';
import ListView from '../ListView/ListView';
import Schedule from '../Schedule/Schedule';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';

function UserInfo() {

    function clickEventHandler() {
        
    }
    return (<div>
        <div className='userInfo-headerContainer'>
            <span className="e-icons e-comment-show e-medium"></span>
            <DropDownButtonComponent items={[{text:"Log Out"}, {text:"Sign In"}]} >
                <div className="e-avatar e-avatar-small e-avatar-circle">AJ</div>
            </DropDownButtonComponent>
       </div>
      
        <div className='userInfo-section' id='userInfo-messages'>
            <h2 id='messages-header'>Your Messages</h2>
            <ListView/>
        </div>
        <div className='userInfo-section' id='userInfo-nextTask'>
            <span id='messages-header'>Next Task</span>
            <h2>10:00 PM</h2>
        </div>
        <div className='userInfo-section' id='userInfo-schedule'>
            <h2 id='messages-header'>Your Messages</h2>
            <Schedule/>
        </div>
  </div>);
}
export default UserInfo;