function validateForm() {

  let form = document.getElementById("form");
  let email = form.elements["form__email"];
  let input = email.value;

  let atPosition = input.indexOf("@");
  let dotPosition = input.lastIndexOf(".");

  const error = document.getElementById("form__error");
  const message = document.getElementById("form__message");
  const formEmail = document.getElementById("form__email");

  if (atPosition < 1 || dotPosition < atPosition+2 || dotPosition+2 >= input.length) {
    error.style.visibility = "visible";
    message.style.visibility = "visible";
    formEmail.style.border = "2px solid hsl(0, 93%, 68%)";
    return false;
  }
}
