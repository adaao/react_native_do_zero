import axios from 'axios';

class Api {
   static async getUserInfo(userName){
      try{
         const response = await axios.get(`http://api.github.com/users/${userName}`);

         console.log(response);
      } catch (err) {
         console.log('Usuário não encontrado ou erro na Api');
      }
   }
}

Api.getUserInfo('adaao');

Api.getUserInfo('diego3g41234123423');
