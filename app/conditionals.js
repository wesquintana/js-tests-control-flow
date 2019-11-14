//1. Given two numbers, write a function that will return  the larger number

function largerNum(num1, num2) {
  // you code here
  return num1 > num2 ? num1 : num2;
}

// 2. Given two numbers, amount correct and amount possible of a test, return the corresponding letter grade.
// Example:
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

function testGrader(score, possible) {
  let percentGrade = score / possible;
  if (percentGrade < 0.6) {
    return "F";
  } else if (percentGrade < 0.7) {
    return "D";
  } else if (percentGrade < 0.8) {
    return "C";
  } else if (percentGrade < 0.9) {
    return "B";
  } else {
    return "A";
  }
}

// --------------------------------------------

// 3. Given an integer that represents an hour in the day (1 - 24), write a function that returns "good morning", "good afternoon", "good evening", or "good night" based off of what hour it is. You'll need to think in military time.
//Morning is between 5am and 11am (5 - 11)
//afternoon is between 12pm and 5pm (12 - 17)
//evening is between 6pm and 9pm (18 - 21)
//night is between 10pm and 4am (22 -24 and 1 - 4)
//Make sure your ranges are inclusive

function timeOfDayGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return "good morning";
  } else if (hour >= 12 && hour < 18) {
    return "good afternoon";
  } else if (hour >= 18 && hour < 22) {
    return "good evening";
  } else {
    return "good night";
  }
  // you code below
}

//4. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (at or above 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function isFever(temp) {
  let tempStr = "";
  if (temp > 98.6) {
    tempStr += "fever";
    if (temp >= 103) {
      tempStr += " go to hospital";
    }
  } else {
    tempStr += "no fever";
  }
  return tempStr;
}

//5. Write a function that takes in a car object, if it is not moving then return true
let myCar = {
  make: "Ford",
  model: "Mustang",
  color: "Red",
  moving: false
};

function isStopped(car) {
  return !car.moving;
}

//6. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
  yourDish: true,
  isDirty: true
};

function washDish(dish) {
  return dish.yourDish && dish.isDirty;
}

//7. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [
  {
    from: "BOI",
    to: "LAX",
    prices: {
      standard: 500,
      firstClass: 2200
    }
  },
  {
    from: "BOI",
    to: "SEA",
    prices: {
      standard: 800,
      firstClass: 1200
    }
  },
  {
    from: "BOI",
    to: "CAN",
    prices: {
      standard: 750,
      firstClass: 6200
    }
  }
];

function flightCost(destination, firstClass) {
  //***hint: use the find method***
  let temp = flights.find(element => element.to == destination.toUpperCase());
  if (firstClass) {
    return temp.prices.firstClass;
  } else {
    return temp.prices.standard;
  }
}
