import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

function ListView(){
    let messagesData = [
        {
            title: 'New Lab Recipe: 657889-L1'
            , text: 'Carbonated Beverages > Low Sugar Carbonated Beverages > Blueberries Soda'
            , read: false, id: 'list-01'
        },
        {
            title: 'New Brief arrived - Brief No. 8686800'
            , text: '', read: true, id: 'list-02'
        },
        {
            title: 'New Brief arrived - Brief No. 8686799'
            , text: '', read: true, id: 'list-03'
        },
        {
            title: 'Lab Recipe Rejected: 657889-L4'
            , text: 'Carbonated Beverages > Low Sugar Carbonated Beverages > Blueberries Soda'
            , read: false, id: 'list-04'
        }
    ];

    function listTemplate(data) {
        return (<div className='e-list-wrapper e-list-multi-line e-list-message' style={{fontWeight:data.read?400:500}}>
                <span className="e-list-item-header">{data.title}</span>
                <span className="e-list-content">{data.text}</span>
            </div>);
    }
    return (<div className='control-pane'>
            <div className='control-section'>
                <div id="messages-list">
                    <ListViewComponent id="list" dataSource={messagesData} template={listTemplate} cssClass='e-list-template'></ListViewComponent>
                </div>
            </div> 
        </div>);
};
export default ListView;
