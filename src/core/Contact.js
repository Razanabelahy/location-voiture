import React from 'react'

function Contact() {
  return (
    <section class="contact" id="contact">
          {/* <h1 class="heading">
            <span>Contacter </span> nous
          </h1> */}

          <div class="row">
            <form action="">
              <h3>Entrer en contact</h3>
              <input type="text" placeholder="Votre nom" class="box" />
              <input type="email" placeholder="Votre email" class="box" />
              <input type="text" placeholder="Sujet" class="box" />
              <textarea
                placeholder="Message...."
                class="box"
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="Envoyer" class="btn" />
            </form>
          </div>
        </section>
  )
}

export default Contact
