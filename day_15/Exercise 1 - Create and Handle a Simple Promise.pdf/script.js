const triggerPromiseButton = document.getElementById("triggerPromise");
const triggerRejectionCheckbox = document.getElementById("triggerRejection");
const message = document.getElementById("message");

triggerPromiseButton.addEventListener("click", function () {
  message.textContent = "";

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerRejectionCheckbox.checked) {
        reject("The Promise has been rejected!");
      } else {
        resolve("The Promise has been resolved!");
      }
    }, 1000);
  });

  myPromise
    .then((result) => {
      message.textContent = result;
      message.classList.add("resolved");
    })
    .catch((error) => {
      message.textContent = error;
      message.classList.add("rejected");
    });
});
