const output = document.getElementById('hamburgerOutput')

function Hamburger(bun, garnish, cheese, sauce, pattyType, pattyCount) {
    this.bun = bun;
    this.garnish = garnish;
    this.cheese = cheese;
    this.sauce = sauce;
    this.pattyType = pattyType;
    this.pattyCount = pattyCount;

    this.describe = function() {
      output.textContent = `This hamburger has a ${this.bun} bun with ${this.pattyCount} ${this.pattyType} patty(s), topped with ${this.garnish}, ${this.cheese}, and ${this.sauce} sauce.`;
    };
}

// initializing a hamburger object 
const hamburger1 = new Hamburger("sesame seed", "lettuce, tomato , pickles " , "cheddar", "mayonnaise", "beef", 1);

// Calling hamburger1 method 
hamburger1.describe();