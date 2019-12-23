let users = [];
let name = document.getElementById('name');
let email = document.getElementById('email');
let company = document.getElementById('company');
let buttonSubmit = document.querySelector('.form__button');

const addUser = (e) => {

  if(!name.value) {
    name.style.border ="1px solid red";
    return false;
  }

  if(!email.value) {
    email.style.border ="1px solid red";
    return false;
  }

  if(!company.value || company.value.length < 3) {
    company.style.border ="1px solid red";
    return false;
  }

  e.preventDefault();
  let user = {
    id: Date.now(),
    name: name.value,
    email: name.value,
    company: company.value,
  }
  users.push(user);
  document.forms[0].reset();
  name.style.border ="";
  email.style.border ="";
  company.style.border ="";
  console.log(JSON.stringify(users));
}

buttonSubmit.addEventListener('click', addUser);