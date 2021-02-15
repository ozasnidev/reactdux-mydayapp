import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NoEntrySelected = () => {
    return (
        <div className="dashboard__noentry-content">
            <h2>Select a entry</h2>
            or create your new entry!
            <FontAwesomeIcon icon={['far', 'calendar-check']} size="4x" className="mt-10"/>
        </div>
    )
}
