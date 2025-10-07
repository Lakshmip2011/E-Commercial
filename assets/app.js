// Form validation and submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = this.name.value.trim();
    let email = this.email.value.trim();
    let number = this.number.value.trim();
    let review = this.review.value.trim();
    if (!name || !email.match(/^\S+@\S+\.\S+$/) || !number.match(/^[6-9]\d{9}$/) || !review) {
        alert("Please fill all fields correctly.");
        return;
    }
    alert("Thank you for your review.");
    this.reset();
});

// Buy Now buttons
document.querySelectorAll('.buy-now').forEach(function(btn) {
    btn.addEventListener('click', function() {
        alert("Thanks for choosing this product!");
    });
});

// Back to Top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:"smooth"});
});
