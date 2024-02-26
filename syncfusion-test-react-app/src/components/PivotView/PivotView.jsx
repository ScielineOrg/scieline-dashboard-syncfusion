import './pivotView.scss';
import * as React from 'react';
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';

import { enableRipple } from '@syncfusion/ej2-base';
import {data} from './data';

enableRipple(true);
/**
 * PivotView HeatMap Sample.
 */
let colourScheme = ['range1', 'range2', 'range3', 'range4', 'range5', 'range6', 'range7', 'range8', 'range9',
    'range10', 'range11', 'range12', 'range13', 'range14'];
let minValue = 0;
let maxValue = 0;
let dataSource = data.data;
let dataSourceSettings = {
    enableSorting: false,
    columns: [{ name: 'ProductType' }, { name: 'Product' }],
    valueSortSettings: { headerDelimiter: ' - ' },
    values: [{ name: 'SoldAmount', caption: 'Sold Amount' }],
    dataSource: dataSource,
    rows: [{ name: 'Year' }],
    formatSettings: [{ name: 'SoldAmount', format: 'C0' }],
    groupSettings: [{
            name: 'Year',
            type: 'Number',
            rangeInterval: 2
        }],
    expandAll: true,
    filters: [],
    showColumnSubTotals: false
};
function HeatMap() {
    function cellTemplate(args) {
        if (args != null && args.cellInfo) {
            if (args.cellInfo.axis === 'value') {
                if (args.cellInfo.axis === 'value' && !args.cellInfo.isGrandSum) {
                    args.targetCell.classList.add(cellColour(args.cellInfo.value));
                }
                args.targetCell.querySelector('.e-cellvalue').innerText = '$' + (args.cellInfo.value / 1000).toFixed(1) + 'K';
            }
        }
    }
    function aggregateCellInfo(args) {
        if (args.rowCellType !== "grandTotal" && args.columnCellType !== "grandTotal") {
            minValue = (minValue < args.value && minValue !== 0) ? minValue : args.value;
            maxValue = maxValue > args.value ? maxValue : args.value;
        }
    }
    function cellColour(value) {
        let percentage = (maxValue - minValue) / colourScheme.length;
        let colourIndex = Math.round((value - minValue) / percentage);
        return colourScheme[colourIndex];
    }
    function enginePopulated() {
        minValue = minValue - 1000;
        maxValue = maxValue + 1000;
    }
    return (<div className='control-pane'>
         <div className='control-section'>
            <PivotViewComponent id='PivotView-Heatmap' dataSourceSettings={dataSourceSettings} width={'100%'} gridSettings={{ rowHeight: 36, columnWidth: 120 }} cellTemplate={cellTemplate.bind(this)} enginePopulated={enginePopulated.bind(this)} aggregateCellInfo={aggregateCellInfo.bind(this)}>
            </PivotViewComponent>
         </div>
      </div>);
}
export default HeatMap;