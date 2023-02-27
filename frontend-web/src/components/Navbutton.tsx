import React from 'react'

export interface INavbuttonProps {
    text: string
}

const Navbutton: React.FunctionComponent<INavbuttonProps> = ({ text }) => {
    return <button className='bg-neutral-700 py-1 px-3 rounded-lg text-yellow-600 h-10 w-28'>
        {text}
    </button>
}

export default Navbutton