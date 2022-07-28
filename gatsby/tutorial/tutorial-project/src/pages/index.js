import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div style={{ "margin-top" : "105px" }}>
          <h2>GANHE TEMPO PARA CUIDAR DO SEU NEGÓCIO</h2>
          <h3>todas as suas compras em um só lugar</h3>
          <p>Com a vupty e nossos diversos parceiros, você tem
      acesso a mais 9000 produtos na palma da sua mão,
      com entrega em até 24h e as melhores formas
      de prazo para o seu pagamento </p>
          <Link className={styles.btn}> COMPRAR </Link>
        </div>
        <img src="/veia no mercado-modified.png" alt="garota propaganda" style={{ 'max-width':'100%',
'margin-left':'150px', 'margin-top':'150px'}}/>
      </section>
    </Layout>
  )
}
