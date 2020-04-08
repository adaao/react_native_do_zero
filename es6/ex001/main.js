class User{
   constructor(email, senha){
      this.email = email;
      this.senha = senha;
   }

   isAdmin = () => false;
}

class Admin extends User{
   constructor(email, senha){
      super(email, senha);
      this.admin = true;
   }

   isAdmin = () => this.admin;
}

user1 = new User('a@a.com', '1234');
admin1 = new Admin('b@b.com', '12345678');

console.log(user1.isAdmin());
console.log(admin1.isAdmin());
