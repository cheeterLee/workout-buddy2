import React from 'react'

export interface INavlinkProps {
    icon: JSX.Element
    name: string
}

const Navlink: React.FunctionComponent<INavlinkProps> = ({ icon, name }) => {
    return (
        <li className='flex gap-1 items-center cursor-pointer'>
            <div>{icon}</div>
            <span>{name}</span>
        </li>
    )
}

export default Navlink