import ButtonStyle from "./Button.module.css"
export default function Button({text}){
    return(
        <>
        <button className={ButtonStyle.btn}>{text}</button>
        </>
    )
}