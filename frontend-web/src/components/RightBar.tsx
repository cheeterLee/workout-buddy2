import React from 'react'

export interface IRightBarProps {}

const RightBar: React.FunctionComponent<IRightBarProps> = props => {
    return (
        <div className="hidden xl:block drop-shadow-md bg-primary-300 dark:bg-primary-600 border-primary-500 dark:border-primary-500">
            RightBar
        </div>
    )
}

export default RightBar