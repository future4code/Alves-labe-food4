import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url, refresh) => {
    const [data, setData] = useState(initialData)

    const getPosts = () => {
        axios.get(url, {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJFVFhOODlKY2JpcmRKVjNPaXQwIiwibmFtZSI6IlBldHJpY2siLCJlbWFpbCI6IlBldHJpY2s0QGZ1dHVyZTQuY29tIiwiY3BmIjoiMTIxLjE1MS4xNTEtMTIiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjU5NjE2NDMwfQ.WBanQTK9PIiUQBB9c7_F4MGrKK60ywcecwsFuGhw3P8'
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