import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Sidebar = () => {
    return (
        <aside className="dashboard__sidebar p-10 m-8">
            <div className="dashboard__navbar">
                <h3>
                    <FontAwesomeIcon icon={['far', 'user']} size="lg"/>
                </h3>
                <h3>Juan Garcia</h3>
            </div>
            <button className="mx-12">
                <span>Logout   </span> 
                <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
            </button>
            <button>
                <span>Create new entry   </span>
                <FontAwesomeIcon icon={['fas', 'calendar-plus']} />
            </button>
        </aside>
    )
}
