import data from './data.js';

function renderFullData() {
  const body = document.querySelector('body');

  body.innerText = '';

  const userTable = document.createElement('table');
  const thead = document.createElement('thead');
  const headerTr = document.createElement('tr');

  const headers = ['ID', 'Name', 'Age', 'Email', 'Country', 'Company', 'Birthday'];

  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerTr.append(th);
  });

  thead.append(headerTr);
  userTable.append(thead);

  const tbody = document.createElement('tbody');

  data.forEach(user => {
    const tr = document.createElement('tr');

    const trData = [user.id, user.name, user.age, user.email, user.country, user.company, user.birthday];
    trData.forEach(cellData => {
      const td = document.createElement('td');
      td.textContent = cellData;
      tr.append(td);
    });

    tbody.append(tr);
  });

  userTable.append(tbody);

  body.append(userTable);
}

export default renderFullData;