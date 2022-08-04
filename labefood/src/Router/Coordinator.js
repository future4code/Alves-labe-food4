export const goToLogin = (navigate) => {
    navigate('/')
}

export const logout = (navigate) => {
    localStorage.clear()
    navigate('/')
}

export const goToSingUp = (navigate) => {
    navigate('/singup')
}

export const goToFeed = (navigate) => {
    navigate('/feed')
}

export const search = (navigate) => {
    navigate('/search')
}

export const goTocart = (navigate) => {
    navigate('/cart')
}

export const goToProfile = (navigate) => {
    navigate('/profile')
}

export const goToEditProfile = (navigate) =>{
    navigate('/editprofile')
}

export const goToEditAddress= (navigate) =>{
    navigate('/editaddress')
}
export const goToAddress= (navigate) =>{
    navigate('/address')
}