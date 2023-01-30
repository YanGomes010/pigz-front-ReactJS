import flag from "../../images/bandeiragrande.svg"
import styles from "./ContactForm.module.css" 
export default function ContactForm({type,placeholder,name,id,text}) {
  return (
    <div className={styles.containerContact}>
      <label htmlFor={name}>{text}
        <select>
          <option value="1">+55</option>
        </select>
        <input type={type} placeholder={placeholder} name={name} id={id} />
      </label>
    </div>
  );
}
