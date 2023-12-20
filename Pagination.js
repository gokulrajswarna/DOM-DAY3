
const url = "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

function fetchData() {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
fetchData().then((data) => {
  window.data = data;
  renderData();
  renderPagination();
});
const perPage = 10;
let currentPage = 1;
const table = document.getElementById("table");
function renderData() {
  table.querySelector("tbody").innerHTML = "";
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  for (let i = startIndex; i <endIndex && i < data.length; i++) {
const row = document.createElement("tr");
const idCell = document.createElement("td");
idCell.textContent = data[i].id;
const nameCell = document.createElement("td");
nameCell.textContent = data[i].name;
const emailCell = document.createElement("td");
emailCell.textContent = data[i].email;

row.appendChild(idCell);
row.appendChild(nameCell);
row.appendChild(emailCell);
table.querySelector("tbody").appendChild(row);
}
}
function renderPagination() {
const pagination = document.getElementById("pagination");
const totalPages = Math.ceil(data.length / perPage);
pagination.innerHTML = "";
const prevButton = document.createElement("button");
prevButton.textContent = "Prev";
currentPage === 1;
prevButton.addEventListener("click", () => {
currentPage--;
renderData();
renderPagination();
});
pagination.appendChild(prevButton);
for (let i = 1; i <= totalPages; i++) {
const pageButton = document.createElement("button");
pageButton.textContent = i;
currentPage === i;
pageButton.addEventListener("click", () => {
currentPage = i;
renderData();
renderPagination();
pageButton.removeAttribute("disabled");
});
pagination.appendChild(pageButton);
}
const nextButton = document.createElement("button");
nextButton.textContent = "Next";
currentPage === totalPages;
nextButton.addEventListener("click", () => {
currentPage++;
renderData();
renderPagination();
});
pagination.appendChild(nextButton);
}
renderData();
renderPagination();