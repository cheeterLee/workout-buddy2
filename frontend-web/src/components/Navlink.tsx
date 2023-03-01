import React from 'react'

export interface INavlinkProps {
    icon: JSX.Element
    name: string
}

const Navlink: React.FunctionComponent<INavlinkProps> = ({ icon, name }) => {
    return (
        <li className='flex gap-1 items-center cursor-pointer hover:text-primary-600 hover:dark:text-yellow-300 transition-color duration-75'>
            <div>{icon}</div>
            <span>{name}</span>
        </li>
    )
}

export default Navlink