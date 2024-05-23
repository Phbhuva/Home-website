// slider //
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 3, // Change the number of items displayed as needed
      loop: true,
      margin: 8,
      nav: true,
      dots: true, // Show navigation dots
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })
  });
// home lona //
document.getElementById('calculateBtn').addEventListener('click', function() {
  // Get input values
  const price = parseFloat(document.getElementById('price').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;
  const downPayment = parseFloat(document.getElementById('downPayment').value);


  document.getElementById('priceError').innerText = '';
  document.getElementById('interestRateError').innerText = '';
  document.getElementById('loanTermError').innerText = '';
  document.getElementById('downPaymentError').innerText = '';

  // Validate inputs
  let hasError = false;

  if (isNaN(price) || price <= 0) {
      document.getElementById('priceError').innerText = 'Please enter a valid price.';
      hasError = true;
  }

  if (isNaN(interestRate) || interestRate <= 0) {
      document.getElementById('interestRateError').innerText = 'Please enter a valid interest rate.';
      hasError = true;
  }

  if (isNaN(loanTerm) || loanTerm <= 0) {
      document.getElementById('loanTermError').innerText = 'Please enter a valid loan term.';
      hasError = true;
  }

  if (isNaN(downPayment) || downPayment < 0) {
      document.getElementById('downPaymentError').innerText = 'Please enter a valid down payment.';
      hasError = true;
  }

  if (hasError) {
      return;
  }

  // Calculate loan amount
  const loanAmount = price - downPayment;

  // Calculate monthly payment using the formula for annuity
  const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow((1 + interestRate), -loanTerm));

  document.getElementById('result').value = `Monthly Payment: ₹${monthlyPayment.toFixed(2)}`;
});

// back to top //
    window.onscroll = function() {
      var backToTopButton = document.getElementById('back-to-top');
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    };

    // Scroll to the top of the page
    document.getElementById('back-to-top').onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };