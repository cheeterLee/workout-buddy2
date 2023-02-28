import React from 'react'

export interface ICalenderProps {}

const Calender: React.FunctionComponent<ICalenderProps> = props => {
    return <div className='bg-primary-300 dark:bg-primary-700 h-[300px] drop-shadow-md rounded-md'>
        Calender
    </div>
}

export default Calender