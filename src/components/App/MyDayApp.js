//JournalApp
import React from 'react'
import { Provider } from 'react-redux'

import { reduxStore } from '../../store/store'
import { MainRouter } from '../../services/routers/MainRouter'

export const MyDayApp = () => {
    return (
        <Provider store={reduxStore} >
            <MainRouter />
        </Provider>
        
    )
}
