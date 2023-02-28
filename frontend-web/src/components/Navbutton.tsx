import React from 'react'

export interface INavbuttonProps {
    text: string
}

const Navbutton: React.FunctionComponent<INavbuttonProps> = ({ text }) => {
    return <button className='bg-primary-300 dark:bg-primary-800 py-1 px-3 rounded-lg text-yellow-600 h-10 w-28'>
        {text}
    </button>
}

export default Navbutton