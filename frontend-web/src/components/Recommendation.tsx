import React from 'react'

export interface IRecommendationProps {}

const Recommendation: React.FunctionComponent<IRecommendationProps> = props => {
    return <div className='bg-primary-300 dark:bg-primary-700 rounded-md flex-1 drop-shadow-md'>Recommendation</div>
}

export default Recommendation