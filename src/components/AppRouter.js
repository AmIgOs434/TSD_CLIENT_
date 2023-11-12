import React ,{useContext}  from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import {adminRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import { GLAV_ROUTE } from '../utils/consts';
const AppRouter = ()=>{
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAdmin && adminRoutes.map(({path,Component}) =>  
            <Route key ={path} path= {path} element={<Component/>} exact/>
            )}

            {publicRoutes.map(({path,Component}) =>
            <Route key ={path} path= {path}  element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={GLAV_ROUTE}/>} />
        </Routes>
    )
    }

export default AppRouter