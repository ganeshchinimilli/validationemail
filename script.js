const emailValue = document.getElementById("email");
const submit = document.getElementById("submit");

function validation() {
  var main =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
  var res = main.test(emailValue.value);

  if (emailValue.value == "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (res !== true) {
    setErrorFor(email, "Plese enter correct Email");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const error = formControl.querySelector("#error");

  error.innerText = message;
  submit.style.visibility = "hidden";
  var x = (document.getElementById("msg").innerHTML =
    "<img src='invalid.png' style='width:20px; '>");
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";

  const error = formControl.querySelector("#error");
  error.innerText = " ";
  var x = (document.getElementById("msg").innerHTML =
    "<img src='valid.png' style='width:20px;'>");

  submit.style.visibility = "visible";
}
