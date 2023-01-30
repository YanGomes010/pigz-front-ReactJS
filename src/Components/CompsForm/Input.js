import styles from "./Input.module.css"

export default function Input({type,placeholder,name,id,text}){
    return(
        <div className={styles.containerCompInput}>
        <label htmlFor={name}>{text}
            <input type={type} placeholder={placeholder}  id={id} />
        </label>
        </div>
    )
}