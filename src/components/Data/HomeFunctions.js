import Data from "./Data";

//FUNCTIONS FOR HOME PAGE CHARRT //
export const DatalistWithLabels = Data.map((avg) => ({
  assignment: avg.Opdracht,
  difficultyRating: avg.Moeilijk,
  enjoymentRating: avg.Leuk,
  label: `Opdracht ${avg.Opdracht}, difficultyRating: ${avg.Moeilijk.toFixed(
    1
  )}, enjoymentRating: ${avg.Leuk.toFixed(1)}`,
}));

// remove duplicates of the assignments
const assignments = [
  ...new Set(
    DatalistWithLabels.map((item) => {
      return item.assignment;
    })
  ),
];

// calculate the average
export const averagesDifficulty = assignments.map((assignment) => {
  // group the assignments by the assignment name
  const assignmentsByCourse = DatalistWithLabels.filter(
    (item) => item.assignment === assignment
  );
  // get the grades per course
  const courseGrades = assignmentsByCourse.map((value) => {
    return value.difficultyRating;
  });
  // calculate the total per course
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  // return object with the average grade and the assignment name
  return {
    x: assignment,
    y: courseGrades.reduce(reducer) / courseGrades.length,
  };
});

export const averagesEnjoyment = assignments.map((assignment) => {
  // group the assignments by the assignment name
  const assignmentsByCourse = DatalistWithLabels.filter(
    (item) => item.assignment === assignment
  );
  // get the grades per course
  console.log("one log per assignment ");
  const courseGrades = assignmentsByCourse.map((value) => {
    return value.enjoymentRating;
  });
  // calculate the total per course
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  // return object with the average grade and the assignment name
  return {
    x: assignment,
    y: courseGrades.reduce(reducer) / courseGrades.length,
  };
});

export const difficultyWithLabels = averagesDifficulty.map((avg) => ({
  x: avg.x,
  y: avg.y,
  label: `Opdracht ${avg.x}, difficultyRating: ${avg.y.toFixed(1)}`,
}));

export const enjoymentWithLabels = averagesEnjoyment.map((avg) => ({
  x: avg.x,
  y: avg.y,
  label: `Opdracht ${avg.x}, enjoymentRating: ${avg.y.toFixed(1)}`,
}));
// END FUNCTIONS FOR HOMEPAGE CHART //
// Functions for student chart are in the studentChart file as this is made more sense for me to read through.
