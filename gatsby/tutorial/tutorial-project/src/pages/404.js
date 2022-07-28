import React from 'react'
import { Link } from 'gatsby'

export default function NotFound() {
  return (
    <main>
      <div class="container">
        <div class="row">

          <div class="col-md-6 align-self-center">
            <h1>404</h1>
            <h2>UH OH! Tivemos um problema.</h2>
            <p>A pagina que você está procurando não existe.
              Por favor apertar o botão para voltar para a pagina principal.</p>
              {/* <Link className={bnt} to="pages"><button>HOME</button></Link> */}
          </div>
        </div>
      </div>
    </main>
  )
}
