import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url, refresh) => {
    const [data, setData] = useState(initialData)

    const getPosts = () => {
        axios.get(url, {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFTWEIxTlVBTFJzRkk5NG80TGMxIiwibmFtZSI6IlBldHJpY2siLCJlbWFpbCI6IlBldHJpY2tAZnV0dXJlNC5jb20iLCJjcGYiOiIxMjEuMTIxLjEyMS0xMiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTkzNzAwNTV9.as2e97GsHIID2dGqmzfnwKW-wGPYOqSKnq_JfXtr7rI'
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