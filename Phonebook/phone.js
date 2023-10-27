function add(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let pnumber = document.getElementById("pnumber").value;

    let newRow = document.createElement("tr");
    
    let firstnamec = document.createElement("td");
    let lastnamec = document.createElement("td");
    let pnumberc = document.createElement("td");

    firstnamec.textContent = firstname;
    lastnamec.textContent = lastname;
    pnumberc.textContent = pnumber;

    newRow.appendChild(firstnamec);
    newRow.appendChild(lastnamec);
    newRow.appendChild(pnumberc);
    
    document.getElementById("ctable").getElementsByTagName('tbody')[0].appendChild(newRow)
    document.getElementById("contact").reset()


}