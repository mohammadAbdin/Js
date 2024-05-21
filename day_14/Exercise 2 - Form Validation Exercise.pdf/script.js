const submit = document.querySelector("button");
submit.addEventListener("click", function (e) {
  let isValid = true;
  const nickname = document.getElementById("nickname").value;
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("Password").value;
  e.preventDefault();
  alert(show(nickname, Email, Password));
});

const show = (nickname, email, password) => {
  if (nickname.length < 3) {
    return "nickname must be at least 3 characters long.";
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!emailPattern.test(email)) return "Please enter a valid email.";
  if (!passwordPattern.test(password))
    return "Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character.";
  return (
    "nickname: " + nickname + "\nEmail: " + email + "\nPassword: " + password
  );
};
