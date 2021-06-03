let participants = [];

function addParticipant() {
  x = document.getElementById("addPlayer").value;
  if (x !== "" && isNaN(parseInt(x))) {
    participants.push(x);

    let list = document.getElementById("participantList");
    let addItem = document.createElement("li");
    addItem.innerText = x;
    list.appendChild(addItem);
  }
}
