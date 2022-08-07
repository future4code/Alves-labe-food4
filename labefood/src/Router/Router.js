import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Page/Login/Login'
import Singup from '../Page/Sign-up/Singup'
import Feed from '../Page/Feed/Feed'
import Search from '../Page/Search/Search'
import Cart from "../Page/Cart/Cart"
import Profile from "../Page/Profile/Profile"
import EditProfile from '../Page/EditProfile/EditProfile'
import EditAddress from '../Page/EditAddress/EditAddress'
import Address from "../Page/Address/Address";
import RestaurantDetail from "../Page/RestaurantDetail/RestaurantDetail";
import Header from "../Components/Header/Header";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Login />} />
                <Route path='singup' element={<Singup />} />
                <Route path='feed' element={<Feed />} />
                <Route path="search" element={<Search />} />
                <Route path="cart" element={<Cart />} />
                <Route path="profile" element={<Profile />} />
                <Route path="editprofile" element={<EditProfile />} />
                <Route path="editaddress" element={<EditAddress />} />
                <Route path="address" element={<Address />} />
                <Route path='restaurantDetail' element={<RestaurantDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router