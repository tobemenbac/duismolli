class Person {
  // Public property 'name' is automatically initialized by the constructor
  private _age: number | undefined;

  constructor(public name: string) {
    // Constructor logic can be expanded here if needed
  }

  // Getter for the 'age' property
  get age(): number | undefined {
    return this._age;
  }

  // Setter for the 'age' property
  set age(value: number | undefined) {
    if (value && value > 0) {
      this._age = value;
    } else {
      console.error('Invalid age');
    }
  }

  // A method to display person's details
  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this._age}`);
  }
}

// Usage
const person = new Person('Alice');
person.age = 30; // Setting the age using the setter
person.displayInfo(); // Outputs: Name: Alice, Age: 30
