let Utente = function (addName, addSurname, addDate) {
  this.addName = addName;
  this.addSurname = addSurname;
  this.addDate = addDate;
};

 function addTable() {
  let nuovoUtente = new Utente(
    document.getElementById("addName").value,
    document.getElementById("addSurname").value,
    document.getElementById("addDate").value
  );
  let riga = document.createElement("tr");
  let colNome = document.createElement("td");
  colNome.innerHTML = nuovoUtente.addName;
  riga.appendChild(colNome);
  colCognome = document.createElement("td");
  colCognome.innerHTML = nuovoUtente.addSurname;
  riga.appendChild(colCognome);
  colDataDiNascita = document.createElement("td");
  colDataDiNascita.innerHTML = nuovoUtente.addDate;
  riga.appendChild(colDataDiNascita);
  let tab = document.getElementById("tabella");
  tab.appendChild(riga);
  tab.style.display="block"
};
