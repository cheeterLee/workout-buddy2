import React from 'react'

export interface ICalenderProps {}

const Calender: React.FunctionComponent<ICalenderProps> = props => {
    return <div className='bg-neutral-600 h-[300px] drop-shadow-md rounded-md'>
        Calender
    </div>
}

export default Calender