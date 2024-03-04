import * as React from 'react';
import { useEffect } from "react";
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import './treeView.scss';

const TreeView = () => {
    const hierarchicalData = [
        {
            id: '01', name: 'Carbonated Beverages', type:'MP', expanded: true,
            subChild: [
                {
                    id: '01-01', name: 'Low Calorie Carbonated Beverages', type:'P',
                    subChild: [
                        { id: '01-01-01', name: '7-Zip' },
                        { id: '01-01-02', name: 'Git' },
                        { id: '01-01-03', name: 'IIS Express' },
                    ]
                },
                {
                    id: '01-02', name: 'Low Sugar Carbonated Beverages', type:'R',
                    subChild: [
                        { id: '01-02-01', name: 'Blueberries Soda (L5)', type:'LR' },
                        { id: '01-02-02', name: 'Lemon mint Soda (L9)', type:'LR' },
                    ]
                }
            ]
        }
    ];
    const fields = { dataSource: hierarchicalData, id: 'id', text: 'name', child: 'subChild' };

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
          <TreeViewComponent id="treeview" fields={fields} sortOrder='Ascending' nodeTemplate={nodeTemplate}/>
        </div>
      </div>
    </div>);
};
export default TreeView;