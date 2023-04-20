import React from 'react'
import { NavLink } from '.'
import { BiHome } from 'react-icons/bi'
import { BsPerson, BsTelephone } from "react-icons/bs"

export interface ILeftBarProps {}

const LeftBar: React.FunctionComponent<ILeftBarProps> = props => {
    return (
        <div className="hidden lg:block drop-shadow-md bg-primary-300 dark:bg-primary-600 border-primary-500 dark:border-primary-500">
            <div className='w-full h-full flex flex-col text-lg items-start justify-start gap-10 mt-10 ml-14 text-primary-600 dark:text-primary-400'>
                <NavLink icon={<BiHome />} name='home' />
                <NavLink icon={<BsPerson />} name='personal' />
                <NavLink icon={<BsTelephone />} name='subscribe' />
            </div>
            
        </div>
    )
}

export default LeftBar