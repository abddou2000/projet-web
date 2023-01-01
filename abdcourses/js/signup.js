/*declaration */

const submit = document.getElementById("submit"); // button submit
const pwd = document.getElementById("pwd"); //password field
const pwdConf = document.getElementById("ConfPwd"); //password confirmation field
const username = document.getElementById("username"); // username field
const email = document.getElementById("email"); // email field
const accept = document.getElementById("accept"); // checkbox



/* verification functions */

//check what ever the email is in the folowing form : example@example.ma

const checkEmail = (email) => {
  var regex = /^[^\s@]+@[^\s@]+\.ma$/;
  return regex.test(email.value);
};

// check if the password is matched
const checkPasswordsMatch = (pwd, pwdConf) => {
  if (pwd.value == pwdConf.value) {
    return true;
  } else {
    return false;
  }
};

// checks the username eligibility (not empty and the length is between 3 and 25 )
const checkUsername = (username) => {
  username = username.value;
  if (username.length >= 3 && username.length <= 25) {
    return true;
  }
  return false;
};

// check if the given password is secure

const checkPassword = (password) => {
  if (password.value.length < 8) {
    return false;
  }

  var hasUppercase = /[A-Z]/.test(password.value);
  if (!hasUppercase) {
    return false;
  }

  var hasLowercase = /[a-z]/.test(password.value);
  if (!hasLowercase) {
    return false;
  }

  var hasDigit = /\d/.test(password.value);
  if (!hasDigit) {
    return false;
  }

  var hasSpecial = /[!@#$%^&*]/.test(password.value);
  if (!hasSpecial) {
    return false;
  }

  return true;
};



/* function resposible for given a feedback to the user to guide him and emprove his experience */

const setFeedback = (isValid, element, msg) => {
  element.classList.toggle("is-valid", isValid);
  element.classList.toggle("is-invalid", !isValid);
  const parentNode = element.parentNode;
  const feedback = parentNode.getElementsByTagName("div")[0];
  feedback.classList.toggle("valid-feedback", isValid);
  feedback.classList.toggle("invalid-feedback", !isValid);
  feedback.innerHTML = isValid ? "Looks good !" : msg;
};

// event management for input responses
document.addEventListener("input", (e) => {
  switch (e.target) {
    case email:
      setFeedback(
        checkEmail(email),
        email,
        "Please enter a valid email address (example@example.ma)"
      );
      break;
    case username:
      setFeedback(
        checkUsername(username),
        username,
        "Invalid username (3 - 25 characters required)"
      );
      break;
    case pwd:
      setFeedback(
        checkPassword(pwd),
        pwd,
        "Invalid password (8+ characters, 1 special character(!@#$%^&*), 1 uppercase, 1 lowercase, 1 digit required)"
      );
      break;
    case pwdConf:
      setFeedback(
        checkPasswordsMatch(pwd, pwdConf),
        pwdConf,
        "Please make sure that the confirmation password matches the original password"
      );
          break;
     case accept:

  accept.classList.toggle("is-valid", accept.checked);
  accept.classList.toggle("is-invalid", !accept.checked);
          break;

    default:
      alert("invalid request !")
      break;
  }
});


// if the form has been fill with approprite data model redirect the user to index.html page

submit.addEventListener("click", () => {
  if (
    !(checkUsername(username) && 
    checkEmail(email) && 
    checkPassword(pwd) && 
    checkPasswordsMatch(pwd, pwdConf) && 
    accept.checked)
  ) {
    if (!accept.checked) {
     accept 
        .classList.remove("is-valid");
        accept
        .classList.add("is-invalid");

      alert("please accept our conditions and privacy policy !");
    } else {
      
      alert("Please complete the form before submitting");
    }
  } else {
    window.location.href = "../index.html";
  }
});

// on the load of the page create for each element with  class form group a child with id msg 
// msg == where the message gonna show in the page 
document.addEventListener("DOMContentLoaded", ()=>{
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(formGroup => {
  const msg = document.createElement('div');

  msg.id = 'msg';
  formGroup.appendChild(msg);
});

})

