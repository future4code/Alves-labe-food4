import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            navigate("/")
        }
    }, [])
}
export default useProtectedPage