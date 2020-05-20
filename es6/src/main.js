class App{
   constructor(){
      this.repositories = [];

      this.formEl = document.querySelector('#repo-form');
      this.listEl = document.querySelector('#repo-list');

      this.registerHandlers();
   }

   registerHandlers(){
      this.formEl.onsubmit = event => this.addRepository(event);
      
   }

   addRepository(event){
      event.preventDefault();

      this.repositories.push({
         name: 'rocketseat.com.br',
         description: 'Tire a sua ideia do papel e de vida à sua startup!',
         avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
         html_url: 'http://github.com/Rocketseat/'
      });

      this.render();
   }

   render(){
      this.listEl.innerHTML = '';

      this.repositories.forEach(repo => {
         let imgEl = document.createElement('img');
         imgEl.setAttribute('src', repo.avatar_url);

         let titleEl = document.createElement('strong');
         titleEl.appendChild(document.createTextNode(repo.name));

         let descriptionEl = document.createElement('p');
         descriptionEl.appendChild(document.createTextNode(repo.description));

         let linkEl = document.createElement('a');
         linkEl.setAttribute('href', repo.html_url);
         linkEl.setAttribute('target', '_blank');
         linkEl.appendChild(document.createTextNode('Acessar'));

         let listItemEl = document.createElement('li');
         listItemEl.appendChild(imgEl);
         listItemEl.appendChild(titleEl);
         listItemEl.appendChild(descriptionEl);
         listItemEl.appendChild(linkEl);
         
         this.listEl.appendChild(listItemEl);
      });
   }
}

new App();