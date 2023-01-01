import { auth, signOut } from '../firebase';
import Router from 'next/router';


const LogoutPage = () => {
   signOut(auth)
      .then(() => {
         // El usuario ha cerrado sesión correctamente
         console.log('Se ha cerrado sesión correctamente');
         Router.push('/');
      })
};

export default LogoutPage;