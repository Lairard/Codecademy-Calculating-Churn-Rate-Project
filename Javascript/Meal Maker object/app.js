const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },
  get courses(){
    return{
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },

  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * (dishes.length));
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");
    let totalPrice = appetizer.price + main.price + dessert.price;

    return `Your 3 course meal are ${appetizer.name}, ${main.name}, and ${dessert.name}. Price is $${totalPrice}"`
  }
}

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Bulgarian Salad', 6.25);
menu.addDishToCourse('appetizers', 'Argentinian Salad', 2.25);
menu.addDishToCourse('mains', 'Satay', 9.00);
menu.addDishToCourse('mains', 'Fried Rice', 7.00);
menu.addDishToCourse('mains', 'Soup Zuppa', 8.50);
menu.addDishToCourse('desserts', 'Sundae', 1.15);
menu.addDishToCourse('desserts', 'Ice Cream', 1.25);
menu.addDishToCourse('desserts', 'Chocolate', 2.00);

let meal = menu.generateRandomMeal();
console.log(meal)
