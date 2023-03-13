import React from 'react'

export interface ISummaryProps {}

const Summary: React.FunctionComponent<ISummaryProps> = props => {
    return <div className="w-full h-[300px] flex items-center justify-center">
        <div className='w-[85%] h-[80%] rounded-md bg-primary-300 dark:bg-primary-600 drop-shadow-lg'></div>
    </div>
}

export default Summary