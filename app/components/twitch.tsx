import axios from 'axios';

const TWITCH_API_URL = 'https://api.twitch.tv/helix';
const TWITCH_CLIENT_ID = 'tud434s6964r468112nnvrhslo7ixc'

export async function checkLiveStatus(username: string): Promise<boolean> {
   try {
      // Obtenemos el ID del usuasrio del canal a través de la API
      const userResponse = await axios.get(`${TWITCH_API_URL}/users`, {
         params: {
            login: username,
         },
         headers: {
            'Client-ID': TWITCH_CLIENT_ID,
         },
   });
   const userId = userResponse.data.data[0].id;

   // Ahora se verifica si el usuario está en vivo a través de la API

   const streamResponse = await axios.get(`${TWITCH_API_URL}/streams`, {
      params: {
         user_id: userId,
      },
      headers: {
         'Client-ID': TWITCH_CLIENT_ID,
      },
   });
   return streamResponse.data.data.length > 0;
   } catch (error) {
      console.error(error);
      return false;
   }
}

export async function updateLiveStatus() {
   const isLive = await checkLiveStatus('defcx');
   const liveSection = exports.document.('live');
   if(isLive){
      liveSection.className = 'visible'
   }
   else{ 
      liveSection.className = 'none';
   }
}