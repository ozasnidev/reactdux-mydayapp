import React from 'react'

export const MyDayEntry = () => {
    return (
        <div className="dashboard__entry">
            <div 
                className="dashboard__entry-image"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://skyticket.com/guide/wp-content/uploads/2019/09/shutterstock_1135776710-680x453.jpg)'
                }}
            >
            </div>
            <div className="dashboard__entry-body">
                <div className="dashboard__entry-main">
                    <p className="dashboard__entry-title">Living Japan</p>
                    <p className="dashboard__entry-text">In dolore culpa cillum tempor id.</p>
                </div>
                <div className="dashboard__date">
                    <p className="dashboard__day-date">23</p>
                    <p className="dashboard__month-date">FEB</p>
                    <p className="dashboard__year-date">2021</p>
                </div>
            </div>
        </div>
    )
}
