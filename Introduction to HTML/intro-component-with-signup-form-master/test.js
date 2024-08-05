// Get the form elements
const form = document.getElementById('form');
const firstname = document.getElementsByClassName('firstname')[0];
const lastname = document.getElementsByClassName('lastname')[0];
const email = document.getElementsByClassName('email')[0];
const password = document.getElementsByClassName('password')[0];

// Add event listener to the form submission
form.addEventListener('submit', (e) => {

  const isValidEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const firsterror = document.getElementById('firsterror');
  const lasterror = document.getElementById('lasterror');
  const emailerror = document.getElementById('emailerror');
  const passerror = document.getElementById('passerror');
  
  if(firstname.value === '' || firstname.value == null){
    e.preventDefault();
    firsterror.innerHTML = 'First Name cannot be empty';
  } else {
    firsterror.innerHTML = '';
  }
  
  if(lastname.value === '' || lastname.value == null){
    e.preventDefault();
    lasterror.innerHTML = 'Last Name cannot be empty';
  }else {
    lasterror.innerHTML = '';
  }
  
  if(!isValidEmail(email.value) || email.value === ''){
    e.preventDefault();
    emailerror.innerHTML = 'Looks like this is not an email';
  } else {
    emailerror.innerHTML = '';
  }
  
  if(password.value === ''){
    e.preventDefault();
    passerror.innerHTML = 'Password cannot be empty';
  }else if (password.value.length < 8){
    e.preventDefault();
    passerror.innerHTML = 'Password must be at least 8 characters.';
  }
  else {
    passerror.innerHTML = '';
  }

});