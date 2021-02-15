//JournalScreen
import React from 'react'
import { Sidebar } from '../aside/Sidebar'
import { EntrySection } from './EntrySection'
//import { NoEntrySelected } from './NoEntrySelected'
export const MyDayDashboard = () => {
    return (
        <div className="dashboard__main">
            <Sidebar />
            <main>
               {/*  <NoEntrySelected /> */}
               <EntrySection />
            </main>
        </div>
    )
}
