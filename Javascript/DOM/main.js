const clientArray = [
    {company: "Toyota", contact: "John", country: "U.S.A"},
    {company: "Benz", contact: "Philip", country: "Germany"},
    {company: "Vodafone", contact: "Samuel", country: "Kenya"},
    {company: "Glo", contact: "Lindamell", country: "Ghana"}
  ];
  const clientDetailsEl = document.getElementById("client-details");
  for (let client of clientArray) {
    const row = document.createElement("tr");
    const companyCell = document.createElement("td");
    companyCell.textContent = client.company;
    row.appendChild(companyCell);
    const contactCell = document.createElement("td");
    contactCell.textContent = client.contact;
    row.appendChild(contactCell);
    const countryCell = document.createElement("td");
    countryCell.textContent = client.country;
    row.appendChild(countryCell);
    clientDetailsEl.appendChild(row);
  }

  var els = document.getElementById("t1").getElementsByTagName("td");

  for(var i=0;i<els.length;i++){
    els[i].style.background = "green"   
  };