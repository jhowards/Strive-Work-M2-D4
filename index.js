let participants = [];

function addParticipant() {
  x = document.getElementById("addPlayer").value;
  if (x !== "" && isNaN(parseInt(x))) {
    participants.push(x);

    let list = document.getElementById("participantList");
    let addItem = document.createElement("li");
    addItem.innerText = participants.length + ". " + x;
    addItem.classList = "list-group-item";
    list.appendChild(addItem);
  }
}
