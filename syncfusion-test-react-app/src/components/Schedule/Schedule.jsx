import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function Schedule() {
    return (<ScheduleComponent height='calc(100% - 40px)' selectedDate = {new Date()}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>);
}
export default Schedule;