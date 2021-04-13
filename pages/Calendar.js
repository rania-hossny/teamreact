import React,{useState} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "./calendar.css";
import { Form } from 'react-bootstrap';
import AddItem from './Additem';



const Calendar = () => {
  const [state,setState]=useState( [
    { title: 'event 1', date: '2021-03-29' },
    { title: 'event 2', date: '2021-03-28' }
  ]
  );
  const editstate=(data)=>{
    setState([data]);
    console.log(state);
    return state;
  }
  
  // const nameshandler=()=>{
  //   return state;
  // }
  return (
    <div className="eventcalendar">
         <AddItem  editstate={editstate}/>
         
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                events={state}
                
      />
      

        </div>
  )
}

export default Calendar

 



