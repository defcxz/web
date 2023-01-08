'use client'

import { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import styles from '../styles/form.module.css'

export function Form(){

   const [msg, setMsg] = useState('');

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await fetch('/api/Inquiry', {
         method: 'POST',
         body: JSON.stringify({ msg }),
         headers: {
            'Content-Type': 'application/json'
         }
         });

         const data = await response.json();
         console.log(data);
         setMsg('Mensaje enviado! :D')
      } catch (error) {
         console.error(error);
         setMsg('Error al enviar el mensaje, inténtalo nuevamente')
      }
   }

   return(
      <form onSubmit={ handleSubmit } method="POST" className={styles.formulario}>
         <input className={styles.input} required minLength={10} onChange={ (e) => setMsg(e.target.value) } value={ msg } type="text" id="msg" name="msg" placeholder='Te gustaría decir algo?'/>
         <button className={styles.submit} type="submit"><BsArrowRightShort/></button>
      </form>
   )
}