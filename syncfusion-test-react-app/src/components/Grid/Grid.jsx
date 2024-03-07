import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Toolbar, ColumnChooser, Search } from '@syncfusion/ej2-react-grids';
import { Inject, InfiniteScroll, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import {useRef, useEffect} from 'react';
import emptyRecordImg from '../../images/emptyRecordTemplate.svg';
import './grid.scss';

function Grid({ data, columns, changeRowId }) {
    // const pageSettings = { pageSize: 2 };
    // const sortSettings = { columns: [
    //         { field: 'EmployeeID', direction: 'Ascending' }
    //     ] };
    const FilterOptions = {
        type: 'Menu'
    };
    //'ColumnChooser',
    const toolbarOptions = ['Search'];
    const selectionSettings = { mode: 'Row', type: 'Single' };
    const searchOptions = {
        ignoreCase: true,
        operator: 'contains'
    };
    const gridInstance = useRef(null);

    const rowSelected = (args) => {
        console.log("row selected", args.data);
        changeRowId(args.data.OrderID);
    }

    function emptyMessageTemplate() {
        return (<div className='emptyRecordTemplate'>
            <img src={emptyRecordImg} className="e-emptyRecord" alt="No record" />
            <span>There is no data available to display at the moment.</span>
        </div>);
    }

    return <GridComponent 
            dataSource={data} 
            enableInfiniteScrolling={true} 
            height="100%" 
            allowSorting={true}
            ref={gridInstance}
            rowSelected={rowSelected}
            selectionSettings={selectionSettings}/*sortSettings={sortSettings}*/
            filterSettings={FilterOptions} 
            allowFiltering={true}
            toolbar={toolbarOptions}
            searchSettings={searchOptions}
            // selectedRowIndex={0}
            emptyRecordTemplate={emptyMessageTemplate}
            // showColumnChooser={true}
            >
        {/* <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective> */}
        <ColumnsDirective>
            {columns.map((col, index) => (
                <ColumnDirective key={index} field={col.field} headerText={col.headerText} />
            ))}
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Group, InfiniteScroll, Toolbar, ColumnChooser, Search]}/>
    </GridComponent>;
}
;
export default Grid;