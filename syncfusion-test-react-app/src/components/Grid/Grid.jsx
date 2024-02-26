import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, InfiniteScroll, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function Grid() {
    const pageSettings = { pageSize: 2 };
    const sortSettings = { columns: [
            { field: 'EmployeeID', direction: 'Ascending' }
        ] };
    return <GridComponent dataSource={data} enableInfiniteScrolling={true} height="100%" allowSorting={true} sortSettings={sortSettings}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Group, InfiniteScroll]}/>
    </GridComponent>;
}
;
export default Grid;