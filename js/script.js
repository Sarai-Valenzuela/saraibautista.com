// ============================================
// SARAI BAUTISTA — Web Design for Small Businesses
// script.js
// ============================================

// ── PRICING TOGGLE ──
// Switches between "One-Time Build" and "Monthly Plans" tabs
function switchPricing(panel, btn) {
  document.querySelectorAll('.pricing-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + panel).classList.add('active');
  btn.classList.add('active');
}

// ── THANK YOU POPUP ──
// Shows popup after form is submitted, still sends to Formspree
function showThankYou(e) {
  e.preventDefault();
  const form = e.target;

  // Send the form data to Formspree in the background
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      // Show the thank you popup
      document.getElementById('thankYouPopup').classList.add('show');
      form.reset();
    } else {
      alert('Oops! Something went wrong. Please try again or email me directly.');
    }
  }).catch(() => {
    alert('Oops! Something went wrong. Please try again or email me directly.');
  });
}

// ── CLOSE POPUP ──
// Closes the thank you popup when button is clicked
function closeThankYou() {
  document.getElementById('thankYouPopup').classList.remove('show');
}

// Closes popup if user clicks the dark background
function closePopup(event) {
  if (event.target === document.getElementById('thankYouPopup')) {
    closeThankYou();
  }
}

