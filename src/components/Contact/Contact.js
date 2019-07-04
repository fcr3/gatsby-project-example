import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form action="https://formspree.io/fcreyes@berkeley.edu" 
               method="POST" >
          <div>
            <input type="text" name="name" id="name"
                   className={styles.formControl}
                   placeholder="Firstname Lastname"/>
          </div>
          <div>
            <input type="email" name="email" id="email"
                   className={styles.formControl}
                   placeholder="email@email.com"/>
          </div>
          <div>
            <textarea rows="10" name="message" id="message"
                   className={styles.formControl}
                   placeholder="Type a messagefor!"/>
          </div>
          <div>
            <input type="submit" value="submit"
                   className={styles.submit}/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
