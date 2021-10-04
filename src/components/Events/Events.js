import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const url = './BlogsData.JSON';
        fetch(url)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    return (
        <div>
          <h1 className="text-start ps-5 mt-5">Upcoming Events</h1>
          <p className="text-start ps-5 text-danger">Time to dance</p>
         <div>
             {
                 events.map(event=><Event
                 event={event}
                 ></Event>
                    )
             }
         </div>
        </div>
    );
};

export default Events;