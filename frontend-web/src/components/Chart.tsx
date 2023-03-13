import React from 'react'

export interface IChartProps {}

const Chart: React.FunctionComponent<IChartProps> = props => {
    return <div className="v-full flex-1 flex justify-center items-center">
        <div className='w-[85%] h-[80%] bg-primary-300 dark:bg-primary-600 rounded-md drop-shadow-lg'>

        </div>
    </div>
}

export default Chart