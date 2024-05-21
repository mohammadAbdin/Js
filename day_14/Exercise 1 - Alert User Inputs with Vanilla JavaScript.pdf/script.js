const submit = document.querySelector("button");
submit.addEventListener("click", function (e) {
  const nickname = document.getElementById("nickname").value;
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("Password").value;
  console.log(nickname);
  console.log(Email);
  console.log(Password);
  e.preventDefault();
  alert(
    "nickname: " + nickname + "\nEmail: " + Email + "\nPassword: " + Password
  );
});
