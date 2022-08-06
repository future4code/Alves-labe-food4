import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url, refresh) => {
    const [data, setData] = useState(initialData)

    const getPosts = () => {
        axios.get(url, {
            headers: {
                auth: localStorage.getItem('token')
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