document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Login successful');
          } else {
              alert('Login failed');
          }
      });
});
