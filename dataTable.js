$(document).ready(async function getData() {
  //get data from database
  const records = await fetch("https://dummyjson.com/users");
  const data = await records.json();

  //create table rows for each user in data object
  let tab = "";
  data.users.forEach((user) => {
    tab += `<tr>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.age}</td>
          <td>${user.email}</td>
          <td>${user.gender}</td>
      </tr>`;
  });

  //insert created rows in table boby
  $("#tbody").innerHTML = tab;

  //init and confugure data table
  $("#userTable").DataTable({
    data: data.users,
    oLanguage: {
      sSearch: "Търси",
      sLengthMenu: "Покажи _MENU_ записа на страница",
      sInfo: "Показване _START_ до _END_ от _TOTAL_ записа",
    },
    columns: [
      { data: "firstName" },
      { data: "lastName" },
      { data: "age" },
      { data: "email" },
      { data: "gender" },
    ],
  });
});
