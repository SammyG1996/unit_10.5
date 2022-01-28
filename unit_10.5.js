// Same keys and values ES2015 
function createInstructor(firstName, lastName) {
return {
  firstName, lastName
}
}

//Computed Property Names
const favoriteNumber = 42; 

const instructor = {
firstName: 'Colt', 
[favoriteNumber]: 'This is my favorite!'
}

//Object Methods

const instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

//createAnimal function
function createAnimal(species, action, noise) {
  return{
    species, 
    [action]: function() {
      console.log(noise)
    }
  }
}






