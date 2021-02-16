//NoteScreen
//NoteScreen
import React from 'react'
import { Appbar } from './Appbar'

export const EntrySection = () => {
    return (
        <div className="dashboard__entry-section-content"> 
            <Appbar />
            <div className="dashboard__entry-section-data-content">
                <input 
                    type="text"
                    placeholder="Amazing experience name"
                    className="dashboard__entry-section-title-input mb-5"
                    autoComplete="off"
                />
                <textarea
                    placeholder="Tell us your experience with details!"
                    className="dashboard__entry-section-textarea mb-5 p-5"
                ></textarea>
                <div className="dashboard__entry-section-image">
                    <img 
                        src="https://skyticket.com/guide/wp-content/uploads/2019/09/shutterstock_1135776710-680x453.jpg"
                        alt="ancient Japan"    
                    />
                </div>
            </div>
        </div>
    )
}
