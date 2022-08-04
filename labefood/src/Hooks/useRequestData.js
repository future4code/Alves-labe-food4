import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url, refresh) => {
    const [data, setData] = useState(initialData)

    const getPosts = () => {
        axios.get(url, {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imh4TXVraFpIRm1WSG9hWk1XNVgwIiwibmFtZSI6IlBldHJpY2siLCJlbWFpbCI6IlBldHJpY2s1NEBmdXR1cmU1LmNvbSIsImNwZiI6IjE1Ni40NTEuMTUxLTEyIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1OTYyMDgxOH0.BdxJfcY7L5mt-jJN7I9xYTbwkHD2FbJZkA6RjY8x1n4'
            }
        }).then((resposta) => {
            setData(resposta.data)
        }).catch((erro) => {
            console.log(erro)
        })
    }
    useEffect(() => {
        getPosts()
    }, [url, refresh])

    return (data)
}

export default useRequestData