myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) { 

    myAverage += myGrades[i];
}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

//noticed the for loop is incorrect made it start at 0 and changed the redundant sign

function acceptNumber(grade) {
    if (typeof grade !== "number") {
      throw new Error("Num must be a number.");
    }
    if (grade < 0 || grade > 100) {
      throw new Error("Num must be between 0 and 100.");
    }
    return grade;
  }
  
  try {

    const grade = prompt("Enter a number between 0 and 100:");
    const enteredNum = acceptNumber(Number(grade));
    console.log("Entered number:", enteredNum);89

    const validNum = acceptNumber(49);
    console.log("Valid number:", validNum);

    const invalidNum1 = acceptNumber("One Hundred");
    console.log("Invalid number:", invalidNum1);

    const invalidNum2 = acceptNumber(101);
    console.log("Invalid number:", invalidNum2);

  } 
  catch (error) {

    if (error instanceof Error) {

      console.log(error.message);

      console.log("Please enter a valid number.");

    } else {
        console.log("Unexpected error:", error.message);
    }

  }  
