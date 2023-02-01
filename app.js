const faqs = document.querySelectorAll(".questions");

faqs.forEach(questions => {
    questions.addEventListener("click", () => {
        questions.classList.toggle("active");
    });
});

