class App{
   constructor(){
      this.repositories = [];

      this.formEl = document.querySelector('#repo-form');
      this.registerHandlers();
   }

   registerHandlers(){
      this.formEl.onsubmit = event => this.addRepository(event);
   }

   addRepository(event){
      event.preventDefault();

      this.repositories.push({
         name: 'a',
         description: 'b',
         avatar_url: 'c',
         html_url: 'd'
      });

      console.log(this.repositories);
   }
}

new App();