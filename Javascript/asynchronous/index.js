const button = document.querySelector('button');
const table = document.querySelector('table');

button.addEventListener('click', fetchData);

function fetchData() {
  fetch('https://reqres.in/api/users/1')
    .then(response => response.json())
    .then(data => {
      const { first_name, last_name, email } = data.data;
      const row = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const lastNameCell = document.createElement('td');
      const emailCell = document.createElement('td');
      firstNameCell.textContent = first_name;
      lastNameCell.textContent = last_name;
      emailCell.textContent = email;
      row.appendChild(firstNameCell);
      row.appendChild(lastNameCell);
      row.appendChild(emailCell);
      table.appendChild(row);
    })
    .catch(error => console.error(error));
}
