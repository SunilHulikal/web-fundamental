const users = [
    {
      name: "ajay",
      age: 30
    },
    {
      name: "ravi",
      age: 20
    },
    {
      name: "radhika",
      age: 25
    },
    {
      name: "aishwarya",
      age: 32
    },
    {
      name: "kiran",
      age: 23
    }
  ];
  
const resultEl = document.querySelector(".result");
const search= document.querySelector(".search");
search.addEventListener("click", function(){ 
    const textSearch= document.getElementById("textSearch").value;   
    const displayResults = (data) => {
    resultEl.innerHTML = "";
    if (data.length > 0){
        const ulEl = document.createElement("ul");
        const resultDom = data.filter(function(el) {
        return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1})
        .map((item) => {return `<li>${item.name}</li>`}).join("");
        ulEl.innerHTML = resultDom;
        resultEl.appendChild(ulEl);
    } else {
        resultEl.innerHTML = "No results found";
    }
   };
   displayResults(users);
});
  
   
  