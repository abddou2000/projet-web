
let randCourses  = document.getElementById("randCourses") //the is were we're gonna display the random courses


//generate random courses from the list of courses
function getRandomCourses(listOfCourses) {
  var randomCourses = [];
  while (randomCourses.length < 3) {
    var index = Math.floor(Math.random() * listOfCourses.length);
    var course = listOfCourses[index];
    if (!randomCourses.find( randomCourse =>  randomCourse.title ==course.title &&  randomCourse.price ==course.price)) {
      randomCourses.push(course);
    }
  }
  return randomCourses;
}

// when the page is loaded 3 course cards will be displayed

window.addEventListener("DOMContentLoaded", ()=>{
const content = getRandomCourses(courses)
 DisplayCards(randCourses, content)

})

