import template from "./template/template.hbs";

const refs = {
  createBtn: document.querySelector(".create-btn"),
  saveBtn: document.querySelector(".save-btn"),
  phonebook: document.querySelector(".phonebook"),
};

refs.createBtn.addEventListener("click", handleCreateCard);

const getMarkup = () => {
  const markup = `<form action="" class="form-input">
        <input type="text" placeholder="Name" class="input-field" data-name="name">
        <input type="text" placeholder="Lastname" class="input-field" data-name="lastname">
        <input type="number" placeholder="Number" class="input-field" data-name="number">
        <input type="email" placeholder="E-Mail" class="input-field" data-name="email">
          </form>`;
  return markup;
};
refs.phonebook.insertAdjacentHTML("beforeend", getMarkup());

const inputName = document.querySelector(`input[data-name="name"]`);
const inputLastName = document.querySelector(`input[data-name="lastname"]`);
const inputNumber = document.querySelector(`input[data-name="number"]`);
const inputEmail = document.querySelector(`input[data-name="email"]`);

const card = {
  name: "",
  lastName: "",
  number: "",
  email: "",
};

let cardId = 0;

inputName.addEventListener("input", handleName);
inputLastName.addEventListener("input", handleLastName);
inputNumber.addEventListener("input", handleNumber);
inputEmail.addEventListener("input", handleEmail);
refs.saveBtn.addEventListener("click", handlerCounter);

function handleName(e) {
  card.name = e.target.value;
}
function handleLastName(e) {
  card.lastName = e.target.value;
}
function handleNumber(e) {
  card.number = e.target.value;
}
function handleEmail(e) {
  card.email = e.target.value;
}
function handleCreateCard(e) {
  cardId += 1;
}
function handlerCounter(e) {
  saveCard(cardId);
  render(cardId);
}
const saveCard = (cardId) => {
  if (card.name === "") {
    card.name = "empty";
  }
  if (card.number === "") {
    card.number = "empty";
  }
  if (card.lastName === "") {
    card.lastName = "empty";
  }
  if (card.email === "") {
    card.email = "empty";
  }

  localStorage.setItem(`${cardId}`, JSON.stringify(card));
};

function render(id) {
  const saveItem = localStorage.getItem(`${id}`);
  console.log(saveItem);
  let array = [];
  let newArray = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    if (localStorage[i] !== undefined) {
      newArray.push(JSON.parse(localStorage[i]));
    }
  }
  console.log("Вот", newArray);
}
