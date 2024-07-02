fetch('http://localhost:3000/tables')
.then(response => response.json())
.then(data => {
  const tableList = document.getElementById('table-list');
  data.forEach(table => {
    const listItem = document.createElement('li');
    listItem.textContent = table;
    tableList.appendChild(listItem);
  });
})
.catch(error => {
  console.error('Error fetching table data:', error);
});