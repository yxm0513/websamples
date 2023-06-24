let input = document.getElementById("input");
let eyeIcon = document.getElementById("eye");

const toggleEyeIcon = () => {
  if (input.type === "password") {
    /**If input type is 'password' we will change its type to 'text' so
     * that entered text will be visible
     */
    input.type = "text";
    eyeIcon.classList.add("fa-eye"); //changing icon class to open eye
    eyeIcon.classList.remove("fa-eye-slash"); //removing close eye icon
  } else {
    /**change input type password to default */
    input.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
};
