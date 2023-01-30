import { useState } from "react"
import Form1 from "../CompsForm/Form1"
import Form2 from "../CompsForm/Form2"
import Form3 from "../CompsForm/Form3"

export default function Form(){
const [form,setForm] = useState(<Form1/>)

const changeAlternateForm =(alternateForm)=>{
setForm(alternateForm)
}

    return(
        <div>
            <h1>{form}</h1>
            <button onClick={()=> changeAlternateForm(<Form1/>)}>One</button>
            <button onClick={()=> changeAlternateForm(<Form2/>)}>Two</button>
            <button onClick={()=> changeAlternateForm(<Form3/>)}>Tree</button>
        </div>
    )
}