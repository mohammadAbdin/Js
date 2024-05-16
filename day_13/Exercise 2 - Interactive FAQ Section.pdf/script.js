const faq_item = document.querySelectorAll(".faq-item");
console.log(faq_item);

faq_item.forEach((faq) => {
  faq.addEventListener("click", function () {
    const faqAnswer = faq.querySelector(".faq-answer");
    faqAnswer.classList.remove("faq-answer");
    faqAnswer.classList.add("active");
    console.log(faqAnswer);
  });
});
