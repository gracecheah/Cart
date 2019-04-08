const parent = document.querySelector("#parent1");

parent.style.fontWeight = 400;
parent.innerHTML = "<div>something</div>";

const children = document.querySelectorAll(".child2");

for (let i = 0; i < children.length; i++) {
  let child = children[i];
  child.style.backgroundColor = "red";
}
