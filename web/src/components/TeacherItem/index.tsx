import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (<article className="teacher-item">

            <header>
              <img src="https://avatars3.githubusercontent.com/u/53957603?s=400&u=8f57de9b12d0a0681d801886391c23e639da2c5e&v=4" alt="Guilherme Alves dos Santos"/>
              <div>
                <strong>Guilherme Alves</strong>
                <span>Química</span>
              </div>
            </header>

            <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
              <p>
                Preco/hora
                <strong>R$ 80,00</strong>
              </p>

              <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
              </button>
            </footer>

          </article>
  )
}

export default TeacherItem
