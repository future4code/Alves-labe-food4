import { useState } from "react";

const useForm = (stateInicial) => {
    const [form, setForm] = useState(stateInicial)

    const pegaDados = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const limpaCampos = () => {
        setForm(stateInicial)
    }

    return { form, pegaDados, limpaCampos }

}

export default useForm