// Problem 7: Enum and Day Type

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
  }
  
  // Examples
  console.log(getDayType(Day.Monday));  // "Weekday"
  console.log(getDayType(Day.Sunday));  // "Weekend"
  