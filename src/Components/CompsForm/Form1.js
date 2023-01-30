import Input from "./Input";
import styles from "./Form1.module.css";
import React from "react";
import ContactForm from "./ContactForm";
import ButtonForm from "../GeneralComps/ButtonForm";
export default function form1({onClick}) {
  return (
    <div className={styles.containerForm1}>
      <div className={styles.form1}>
        <div>
          <h2>Quero vender no Pigz</h2>
          <span>Dê o primeiro passo para aumentar suas vendas</span>
        </div>
        <form>
          <Input
            placeholder="Leonercio Goesfeeld"
            text="Nome"
            id="name"
            type="text"
            name="name"
          />
          <Input
            placeholder="leonercio.goesfeeld@email.com"
            text="E-mail"
            id="email"
            type="email"
            name="email"
          />
          <ContactForm
            type="tel"
            name="tel"
            id="tel"
            text="Telefone"
            placeholder="(95) 99876-5432"
          />
          <div className={styles.terms}>
            <span>
              Ao continuar, aceito que a Pigz entre em contato comigo por
              telefone, e-mail ou WhatsApp.
            </span>
          </div>
          <ButtonForm onClick={onClick} text="Continuar"/>
        </form>
      </div>
    </div>
  );
}
