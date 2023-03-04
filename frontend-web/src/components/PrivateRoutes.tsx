import React from 'react'
import { useAppSelector } from '../state/hooks'
import { Navigate, Outlet } from 'react-router-dom'

export interface IPrivateRoutesProps {}

const PrivateRoutes: React.FunctionComponent<IPrivateRoutesProps> = props => {
    const token = useAppSelector((state) => state.auth.token)
    
    return token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes