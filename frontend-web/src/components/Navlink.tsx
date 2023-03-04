import React from 'react'
import { useNavigate } from 'react-router-dom'

export interface INavlinkProps {
    icon: JSX.Element
    name: string
}

const Navlink: React.FunctionComponent<INavlinkProps> = ({ icon, name }) => {
    const navigate = useNavigate()

    const handleClick = () => setTimeout(() => {navigate(`/${name}`)}, 0)

    return (
        <li 
            onClick={handleClick}
        className='flex gap-1 items-center cursor-pointer hover:text-primary-600 hover:dark:text-yellow-300 transition-color duration-75'>
            <div>{icon}</div>
            <span>{name}</span>
        </li>
    )
}

export default Navlink