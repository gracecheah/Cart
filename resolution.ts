import { question } from "readline-sync";

function displayOption(array) {
  let i = 0;
  while (i < 3) {
    console.log(array[i]);
    console.log(i + ". " + array[i].label + ", Price:" + array[i].price);
    //i=i+1
    i += 1;
  }
}

console.log("choose your resolution");
const resOptions = [
  { label: "1920 x 1080", price: "300" },
  { label: "2560 x 1440", price: "600" },
  { label: "3280 x 1680", price: "900" }
];
displayOption(resOptions);
let ansRes = question("Select resOptions index\n");
console.log(resOptions[ansRes].label);

console.log("You Have Chosen the following options: ");
const prices = [resOptions[ansRes].price];

let totalPrice = 0;

for (let i in prices) {
  totalPrice = totalPrice + prices[parseInt(i)];
}

console.log(totalPrice);
console.log(resOptions[ansRes].label);

// console.log("choose your video card");
// const videoOptios = ["nVdia", "AMD", "Intel"];
// console.log(videoOptios[0]);

// console.log("choose your Processor");
// const processorOptions = ["I3", "I5", "I7"];
// console.log(processorOptions[0]);

// console.log("choose your Hard Disk");
// const hardOptions = ["216GB", "516GB", "1T"];
