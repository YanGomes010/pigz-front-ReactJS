import stylesBtn from "./ButtonForm.module.css"
export default function ButtonForm({text, onClick}){
    return(
        <div className={stylesBtn.btn}>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}