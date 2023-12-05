//const fetch = require('node-fetch');
const inputAmount = document.getElementById("amount");
const inputDescription = document.getElementById("description");
const inputCategory = document.getElementById("category");
const addBtn = document.getElementById("addBtn");
const listOfItems = document.getElementById("oList");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = inputAmount.value;
  const description = inputDescription.value;
  const category = inputCategory.value;
  const id = Math.random() * 10;

  if (amount <= 0) {
    alert("please enter correct amount");
  } else if (description === "") {
    alert("please enter valid description");
  } else if (category === "" || category === "Select Category") {
    alert("please select a category");
  } else {
    saveData(amount, description, category, id);
    clear();
  }
});

const saveData = (amount, description, category, id) => {
  const myObj = {
    price: amount,
    product: description,
    category: category,
    Id: id,
  };
  createElement(myObj);

  fetch("http://localhost:3000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Amount: amount,
      Description: description,
      Category: category,
      Id: id,
    }),
  });
};

const createElement = (element) => {
  const amount = element.price;
  const description = element.product;
  const category = element.category;
  const li = document.createElement("li");
  li.id = element.id;

  li.innerText = `${amount}     ${description}     ${category} `;
  const deleteBtn = document.createElement("button");

  deleteBtn.appendChild(document.createTextNode("Delete"));
  li.append(deleteBtn);
  listOfItems.appendChild(li);
  deleteElement(deleteBtn, element, li);
};
const deleteElement = (deleteBtn, user, li) => {
  deleteBtn.onclick = () => {
    let userId = user.id;
    if (confirm("Are You Sure?")) {
      let element = document.getElementById(`${userId}`);
      element.remove();
      deleteData(userId);
    }
  };
};

const deleteData = (id) => {
  fetch("http://localhost:3000/delete/" + id, {
    method: "DELETE",
  });
};
const displayData = () => {
  fetch("http://localhost:3000/data", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        createElement(element);
      });
    })
    .catch((error) => console.error("Error:", error));
};
function clear() {
  amount.value = "";
  description.value = "";
  category.value = "";
}
window.addEventListener("DOMContentLoaded", displayData);
