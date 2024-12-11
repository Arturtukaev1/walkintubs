
const form = document.getElementById('info-form');
const thankYouMessage = document.getElementById('thank-you-message');
const scriptURL = 'https://script.google.com/macros/s/AKfycbzndF1XiM5zy_BmhWAeWib4wjMncbA3VCeg1RxYMKy48tOi7OGz6UKQkuW8NOZWHM9g_A/exec'; 

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        zipCode: document.getElementById('zipCode').value.trim(),
    };

    fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        mode: 'no-cors', 
    })
        .then((response) => {
            console.log('Request sent. Response status cannot be read in no-cors mode.');
            form.style.display = 'none';
            thankYouMessage.style.display = 'block';
        })
        .catch((error) => {
            console.error('Fetch error:', error.message);
            alert('Error: ' + error.message);
        });
});
