import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css';
import eventsimg from '../../images/cover.jpg'

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const url = './BlogsData.JSON';
        fetch(url)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    return (
        <div className="d-flex justify-content-around">
            <div>
                <h1 className="text-start ps-5 mt-5">Upcoming Events</h1>
                <p className="text-start ps-5 text-danger">Time to dance</p>
                <div>
                    {
                        events.map(event => <Event
                            event={event}
                        ></Event>
                        )
                    }
                </div>
            </div>
            <div>
                <img className="event-img mt-5 img-fluid" src={eventsimg} alt="" />
            </div>
        </div>
    );
};

export default Events;