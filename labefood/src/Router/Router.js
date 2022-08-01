import React from "react";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Login from '../Page/Login/Login'
import Singup from '../Page/Sign-up/Singup'
import Feed from '../Page/Feed/Feed'
import Search from '../Page/Search/Search'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='singup' element={<Singup />} />
                <Route path='feed' element={<Feed />} />
                <Route path="search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router