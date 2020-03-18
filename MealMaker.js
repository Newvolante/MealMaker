let menu = {
  _courses: {
    appetizers : [],
    mains : [],
    desserts : []
  },
  get appetizersList() {                  // returns appetizers
    return this._courses.appetizers;
  },
  set newAppetizer(item) {                // adds an appetizer
    this._courses.appetizers.push(item);
  },
  get mainsList() {                       // returns mains
    return this._courses.mains;
  },
  set newMain(item) {                     // adds a main
    this._courses.mains.push(item);
  },
  get dessertsList() {                    // returns desserts
    return this._courses.desserts;
  },
  set newDessert(item) {                  // adds a dessert
    this._courses.desserts.push(item);
  },
  get courses() {                         // returns appetizers, mains and desserts
    return {                              // what is returned is an object
      Appetizers : this.appetizersList,
      Mains : this.mainsList,
      Desserts : this.dessertsList
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {    // creates a new dish with properties
    const dish = {                                    // a new object is returned
      dish : dishName,
      price : dishPrice
    }
    this._courses[courseName].push(dish);             // adds the dish to the proper array
  },
  getRandomDishFromCourse(courseName) {           // gets a random dish from a specific course
    let dishes = this._courses[courseName];
    let randomI = Math.floor(Math.random() * dishes.length);
    return this._courses[courseName][randomI];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    return (`Appetizer: ${appetizer.dish}, main: ${main.dish}, dessert: ${dessert.dish}, for a total of ${appetizer.price + main.price + dessert.price}€`);
  }
}

menu.addDishToCourse("appetizers", "Olive ascolane", 3);
menu.addDishToCourse("appetizers", "Formaggi e affettati", 5);
menu.addDishToCourse("appetizers", "Prosciutto e melone", 4);

menu.addDishToCourse("mains", "Tagliatelle", 6);
menu.addDishToCourse("mains", "Pastasciutta", 5);
menu.addDishToCourse("mains", "Calamarata al sugo", 6);

menu.addDishToCourse("desserts", "Torta della nonna", 3);
menu.addDishToCourse("desserts", "Tartufo bianco", 2);
menu.addDishToCourse("desserts", "Crostata", 3);


    // call this to create a random meal
const meal = menu.generateRandomMeal();   
console.log(meal);




