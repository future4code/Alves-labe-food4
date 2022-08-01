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

