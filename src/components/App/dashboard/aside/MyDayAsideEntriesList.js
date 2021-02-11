import React from 'react'
import { MyDayEntry } from './MyDayEntry';

export const MyDayAsideEntriesList = () => {
    const entryList = [1,2,3,4,5,6,7,8,9,10,11];

    return (
        <div className="dashboard__entries">
            {
                entryList.map(value => (
                    <MyDayEntry key={value} />
                ))
            }
        </div>
    )
}
