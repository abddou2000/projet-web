/* this meant to redirect the user to a specific location */

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.matches("#coursesbtn"))
      window.location.href = "./courses.html";
    else if (e.target.matches("#home")) window.location.href = "./index.html";
    else if (e.target.matches("#about")) window.location.href = "./about.html";
    else if (e.target.matches("#allcourses"))
      window.location.href = "./courses.html";
    else console.log("invalid request !");
  });
});
