const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

let submit = document.getElementById('submit')

submit.addEventListener('click', function sub(){
  alert('Thank you for signing In we will get back to you soon')
})

function sendEmail(){
    Email.send({
          Host : "smtp.gmail.com",
          Username : "Mitchell Dennis",
          Password : "abominableacrimony6105",
          To : 'denmichigan123@gmail.com',
          From : document.getElementById('email'.value),
          Subject : "New customer Enquiry/ Details",
          Body : "And this is the body"
      }).then(
        message => alert(message)
  );
}