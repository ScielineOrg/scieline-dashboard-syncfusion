import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from '@syncfusion/ej2-react-layouts';
import Gantt from "../Gantt/Gantt";
import './dashboard.scss';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Grid from "../Grid/Grid";
import TreeView from "../TreeView/TreeView";
import HeatMap from "../PivotView/PivotView";
import UserInfo from "../UserInfo/UserInfo";
import {projectData, masterProjectData, recipeData} from '../Grid/datasource';

function Dashboard({isOpen}) {
    const [isProjectData, setIsProjectData] = useState(true);
    const [projOrMasterProjId, setProjOrMasterProjId] = useState(null);
    const [recipeOrLabRecipeId, setRecipeOrLabRecipeId] = useState(null);

    useEffect(() => {
        console.log("isOpen", isOpen)
        onCreated();
    }, [isOpen]);

    let dashboardObj = useRef(null);

    const cellSpacing = [20, 20];

    function gantt() {
        return <Gantt/>;
    }

    function projectGrid() {
        return <Grid 
                data={isProjectData ? projectData : masterProjectData} 
                changeRowId={handleSelectedProjId} 
                columns={[{ field: 'OrderID', headerText: 'Project ID' }, { field: 'CustomerID', headerText: 'User' }, { field: 'ShipCountry', headerText: 'Ship Country' }]} 
            />;
    }

    function recipeGrid() {
        return <Grid 
                data={recipeData} 
                columns={[{ field: 'OrderID', headerText: 'ID' }, { field: 'recipeName', headerText: 'Recipe Name' },{ field: 'ShipCountry', headerText: 'Ship Country' }]}
                changeRowId={handleSelectedRecipeId}
            />;
    }

    function treeview() {
        return <TreeView isProject={isProjectData} projOrMasterProjId={projOrMasterProjId}/>;
    }

    function heatMap() {
        return <HeatMap/>;
    }

    function userInfo() {
        return <UserInfo/>;
    }


    function changeProjectGridData(isProject) {
        setIsProjectData(isProject);
    }

    function projectHeaderTemplate() {
        return (<div>
            <span className={`dashboard-projectHeader ${!isProjectData ? 'active' : ''}`} onClick={(e)=>changeProjectGridData(false)}>MY MASTER PROJECTS</span> 
            <span> / </span>
            <span className={`dashboard-projectHeader ${isProjectData ? 'active' : ''}`} onClick={(e)=>changeProjectGridData(true)}>MY PROJECTS</span>
        </div>);
    }

    function onCreated(args){
        if(dashboardObj.current){
            setTimeout(function () {
                dashboardObj.current.refresh();
            }, 500); 
        }
    };

    function handleSelectedProjId(data) {
        console.log('handleDataFromChild data: ', data);
        setProjOrMasterProjId(data);
    };

    function handleSelectedRecipeId(data) {
        console.log('handleDataFromChild data: ', data);
        setRecipeOrLabRecipeId(data);
    };

    return (<div>
        {/* <div className="container"> */}
            {/* <div> */}
                <DashboardLayoutComponent draggableHandle='.e-panel-header' allowResizing={true} id="dashboard_default" columns={12} cellSpacing={cellSpacing} ref={dashboardObj} created={onCreated}>
                    <PanelsDirective>
                        <PanelDirective sizeX={6} sizeY={2} row={0} col={0} content={projectGrid} header={projectHeaderTemplate}/>
                        <PanelDirective sizeX={4} sizeY={2} row={0} col={6} content={treeview} header="<div>PROJECT HIERARCHY</div>"/>
                        <PanelDirective sizeX={2} sizeY={7} row={0} col={10} content={userInfo} />
                        <PanelDirective sizeX={4} sizeY={2} row={2} col={0} content={recipeGrid} header="<div>Product usage ratio</div>"/>
                        <PanelDirective sizeX={6} sizeY={2} row={2} col={4} content={heatMap} header="<div>Product usage ratio</div>"/>
                        <PanelDirective sizeX={10} sizeY={3} row={4} col={0} content={gantt} header="<div>GANTT</div>"/>
                    </PanelsDirective>
                </DashboardLayoutComponent>
            {/* </div> */}
        {/* </div> */}
    </div>);
}
export default Dashboard;