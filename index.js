let participants = [];
let listAmount = 0;

function selectChange() {
  let grid = document.getElementsByClassName("teamcol");
  for (i = 0; i < grid.length; i++) {
    grid[i].replaceChildren();
  }

  let e = document.getElementById("playerAmount");
  let numberPlayers = parseInt(e.options[e.selectedIndex].value);
  listAmount = numberPlayers;
  for (i = 0; i < numberPlayers; i++) {
    let addItem = document.createElement("ol");
    let header = document.createElement("h3");
    header.innerText = "Team " + (i + 1);
    let newItem = grid[i].appendChild(header);
    newItem = grid[i].appendChild(addItem);
    newItem.appendChild;
  }
}

function addParticipant() {
  x = document.getElementById("addPlayer").value;
  if (participants.length < 28) {
    if (x !== "" && isNaN(parseInt(x))) {
      participants.push(x);

      let list = document.getElementById("participantList");
      let addItem = document.createElement("li");
      addItem.innerText = participants.length + ". " + x;
      addItem.classList = "list-group-item";
      list.appendChild(addItem);
    }
  }
}

function assignPlayer() {}

function autoAssignPlayer() {}
