import * as React from 'react';
import { useEffect, useState } from "react";
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import './treeView.scss';

const hierarchicalData = [
    {
        id: '01', name: 'Carbonated Beverages', type:'MP', expanded: true, masterProjId:'10248',
        subChild: [
            {
                id: '01-01', name: 'Low Calorie Carbonated Beverages', type:'P', projectId:'10254',expanded: true,
                subChild: [
                    { id: '01-01-01', name: '7-Zip' },
                    { id: '01-01-02', name: 'Git' },
                    { id: '01-01-03', name: 'IIS Express' },
                ]
            },
            {
                id: '01-02', name: 'Low Sugar Carbonated Beverages', type:'R', projectId:'10253',expanded: true,
                subChild: [
                    { id: '01-02-01', name: 'Blueberries Soda (L5)', type:'LR' },
                    { id: '01-02-02', name: 'Lemon mint Soda (L9)', type:'LR' },
                ]
            }
        ]
    }
];

const TreeView = ({isProject, projOrMasterProjId}) => {
    let treeObj;
    const fields = { dataSource: hierarchicalData, id: 'id', text: 'name', child: 'subChild' };

    useEffect(() => {
        console.log('projOrMasterProjId, isProject: ', projOrMasterProjId, isProject);
        // Filter data based on projOrMasterProjId
        let filtered = [{id: '01', name: 'Carbonated Beverages', type:'MP', expanded: true, masterProjId:'10248'}]//hierarchicalData;
        if(isProject){
            filtered = hierarchicalData.map(item => ({
                ...item,
                subChild: item.subChild.filter(subItem => subItem.projectId == projOrMasterProjId)
            })).filter(item => item.subChild.length > 0);
        }else{
            filtered = hierarchicalData.filter(
                item => item.masterProjId == projOrMasterProjId
            );
        }
        console.log("filtered: ", filtered);
        if(projOrMasterProjId == null || projOrMasterProjId == undefined || projOrMasterProjId == ''){
            filtered = hierarchicalData
        }

        treeObj.fields = { dataSource: filtered, id: 'id', text: 'name', child: 'subChild' }
       
    }, [projOrMasterProjId, isProject]);

    function nodeTemplate(data) {
        return (<div>
        <span className="e-avatar e-avatar-xsmall e-avatar-circle">{data.type}</span>
        <div className='ename'>{data.name}</div>
      </div>);
    }

    return (<div className='control-pane'>
      <div className='control-section'>
        <div className='control_wrapper'>
          {/* Render the TreeView with image icons */}
          <TreeViewComponent id="treeview"  fields={fields} ref={(treeview) => { treeObj = treeview; }} sortOrder='Ascending' nodeTemplate={nodeTemplate}/>
        </div>
      </div>
    </div>);
};
export default TreeView;