import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from '@syncfusion/ej2-react-layouts';
import Gantt from "../Gantt/Gantt";
import './dashboard.scss';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import Grid from "../Grid/Grid";
import TreeView from "../TreeView/TreeView";
import HeatMap from "../PivotView/PivotView";
import UserInfo from "../UserInfo/UserInfo";

function Dashboard({isOpen}) {
    useEffect(() => {
        console.log("isOpen", isOpen)
        onCreated();
      }, [isOpen]);

    let dashboardObj = useRef(null);

    const cellSpacing = [20, 20];

    function gantt() {
        return <Gantt/>;
    }

    function grid() {
        return <Grid/>;
    }

    function treeview() {
        return <TreeView/>;
    }

    function heatMap() {
        return <HeatMap/>;
    }

    function userInfo() {
        return <UserInfo/>;
    }

    function onCreated(args){

        setTimeout(function() {
    
            dashboardObj.current.refresh();
    
        }, 500);
    
    };

    return (<div>
        {/* <div className="container"> */}
            {/* <div> */}
                <DashboardLayoutComponent allowResizing={true} id="dashboard_default" columns={12} cellSpacing={cellSpacing} ref={dashboardObj} created={onCreated}>
                    <PanelsDirective>
                        <PanelDirective sizeX={6} sizeY={1} row={0} col={0} content={grid} header="<div>MY MASTER PROJECTS / MY PROJECTS</div>"/>
                        <PanelDirective sizeX={4} sizeY={1} row={0} col={6} content={treeview} header="<div>PROJECT HIERARCHY</div>"/>
                        <PanelDirective sizeX={2} sizeY={6} row={0} col={10} content={userInfo} />
                        <PanelDirective sizeX={4} sizeY={2} row={3} col={0} content={grid} header="<div>Product usage ratio</div>"/>
                        <PanelDirective sizeX={6} sizeY={2} row={1} col={4} content={heatMap} header="<div>Product usage ratio</div>"/>
                        <PanelDirective sizeX={10} sizeY={3} row={4} col={0} content={gantt} header="<div>GANTT</div>"/>
                    </PanelsDirective>
                </DashboardLayoutComponent>
            {/* </div> */}
        {/* </div> */}
    </div>);
}
export default Dashboard;