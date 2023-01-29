import styleMarketing from "./Marketing.module.css"
import Hamburguer from "../../images/burguer_2.png"
export default function Marketing(){
    return(
        <div className={styleMarketing.containerMarketing}>
            <div className={styleMarketing.containerImg}>
                <div>
                <span>Pigz: tudo que você precisa pra vender ainda mais!</span>
                </div>
                <img src={Hamburguer} alt="Hamburguer"/>
            </div>
            <div className={styleMarketing.containerText}>
                <span>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</span>
            </div>
        </div>
    )
}