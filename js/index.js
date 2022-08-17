document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('get item clicked')
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);


    console.log('get item clicked')
    const passField = document.getElementById('user-pass');
    const pass = passField.value;


    if (email === 'rihan' && password == 'secret') {
        console.log('valid')
    }

})
