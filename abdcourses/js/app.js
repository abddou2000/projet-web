const courseLib = document.getElementById("courseList");
const filter = document.getElementById("filter");
const budgetRange = document.querySelector('input[type="range"]');
const displayRange = document.getElementById("displayRange");

const search = document.getElementById("search");
const category = document.getElementById("category");



//checks if the a given string is a substring of another string

const isSubstring = (string, substring)=> {
  return string.toLowerCase().includes(substring.toLowerCase());
}

//when the page is ready load the content (courses)
window.addEventListener("DOMContentLoaded", () => {
  displayRange.innerHTML = "$0 - $" + budgetRange.value;
  DisplayCards(courseLib, courses);
});


// display courses by budget 
budgetRange.addEventListener("input", () => {
  displayRange.innerHTML = "0 - " + budgetRange.value;

  const budgetCourses = courses.filter((course) => {
    return course.price < budgetRange.value;
  });
  DisplayCards(courseLib, budgetCourses);
});

// display courses by categroy
category.addEventListener("input", () => {
  if (category.value != "all") {
    const catCourses = courses.filter((course) => {
      return course.category == category.value;
    });
    DisplayCards(courseLib, catCourses);
  } else {
    DisplayCards(courseLib, courses);
  }
});

// display courses by keywords
search.addEventListener("input", () => {
    const filCourses = courses.filter((course) => {
   if (isSubstring(course.title, search.value)) {
   return course 
   } 
    });
    DisplayCards(courseLib, filCourses);
});



