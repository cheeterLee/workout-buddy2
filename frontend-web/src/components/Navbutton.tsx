import React from 'react'

export interface INavbuttonProps {
    text: string
}

const Navbutton: React.FunctionComponent<INavbuttonProps> = ({ text }) => {
    return <button className='bg-primary-300 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700 py-1 px-3 rounded-lg text-primary-800 dark:text-yellow-500 h-10 w-28'>
        {text}
    </button>
}

export default Navbutton