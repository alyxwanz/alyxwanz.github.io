const loginBtn = document.getElementById('login');
loginBtn.onclick = auth;

function auth () {
    const loginRequest = prompt('login');
    let passwordRequest = prompt('password');

    if (loginRequest !== 'admin') {
        alert('incorrect login');
        return;
    } 

    if (passwordRequest === 'admin') {
        alert('welcome, Sir');
    } else {
       let anotherPasswordRequest = confirm('Password is incorrect. Do you want to try another password?'); 
       while (anotherPasswordRequest) {
        passwordRequest = prompt('password');
        if (passwordRequest === 'admin') {
            alert('welcome, Sir');
            return;
        } else {
            anotherPasswordRequest = confirm('Password is incorrect. Do you want to try another password?'); 
        }
      }

      if(!anotherPasswordRequest) {
          alert('incorrect password');
      }
    }

}

