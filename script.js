// Create Two Functions -> addChild and redWedding

// Attach functions to buttons

// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)
const starks = document.querySelector(".starks");
const addchildbtn = document.getElementById("addchild");
const redWedbtn = document.getElementById("redwedding");

function addChild() {
  const div = document.createElement("div");
  div.textContent = "I'm a child.";
  document.querySelector(".starks").appendChild(div);
}

function redWedding() {
  while (starks.firstChild) {
    starks.firstChild.remove();
  }
  //   const parentDiv = document.getElementById("starks");
  //   const child = parentDiv.lastElementChild;
  //   parentDiv.removeChild(child);
  //   starks.innerHTML = "";
}
console.dir(starks);
addchildbtn.addEventListener("click", addChild);
redWedbtn.addEventListener("click", redWedding);
