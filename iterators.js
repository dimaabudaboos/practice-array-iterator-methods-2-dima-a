// Task 1: Using forEach()
const cities = ["Amman", "Cairo", "Dubai", "Mecca", "Tokyo"];
cities.forEach(city => console.log(city.toUpperCase()));
/*
Expected Output:
AMMAN
CAIRO
DUBAI
MECCA
TOKYO
*/

// Task 2: Transforming with map()
const numbers =;
const squares = numbers.map(num => num * num);
console.log(squares);
/*
Expected Output:
[ 1, 4, 9, 16, 25 ]
*/

// Task 3: Filtering with filter()
const scores =;
const highScores = scores.filter(score => score >= 80);
console.log(highScores);
/*
Expected Output:
[ 85, 90, 100 ]
*/

// Task 4: Finding with find() and findIndex()
const favoriteFood = ["Fig", "Rice", "Pizza", "Burger", "Pasta"];
const foundFood = favoriteFood.find(food => food.length > 4);
const foundIndex = favoriteFood.findIndex(food => food.length > 4);
console.log(foundFood);
console.log(foundIndex);
/*
Expected Output:
Pizza
2
*/

// Task 5: Checking conditions with some() and every()
const temperatures =;
const anyAbove90 = temperatures.some(temp => temp > 90);
const allAbove50 = temperatures.every(temp => temp > 50);
console.log([anyAbove90, allAbove50]);
/*
Expected Output:
[ true, true ]
*/

// Task 6: Reducing with reduce()
const totalBudget = 200;
const prices =;
const remainingBudget = prices.reduce((budget, price) => budget - price, totalBudget);
console.log(remainingBudget);
/*
Expected Output:
55
*/
