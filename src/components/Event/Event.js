import React from 'react';

const Event = (props) => {
    const { newevents, eschedule, edate } = props.event;
    return (
        <div>
            <div class="card border-0 mb-3">
                <div class="row g-0 text-start ps-5">
                    <div class="col-md-1">
                      <p className="mt-4 fw-bold"> {edate}</p>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <p class="card-title"><small>{eschedule}</small></p>
                            <h3 class="card-text">{newevents}</h3>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Event;