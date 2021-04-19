const resultEl = document.querySelector(".result");
const detailsEl = document.querySelector(".details");
var txt="", txt1="", user_Id="";


const getUsers= async () => {
    const response = await fetch("https://api.github.com/users");
    const result = await response.json();
    //resultEl.innerHTML = result;
    txt +="<table border='1'><tr><th>Avatar</th><th>Login</th><th></th></tr>";

    for(x in result){
        user_Id = JSON.stringify(result[x].login);
        txt +="<tr><td><img width='150px' src=" + result[x].avatar_url + "/></td><td>" + user_Id + "</td><td><input type='button' value='Show Details' onclick= 'showdetails("+ user_Id +")'/></td></tr>";
    }
    txt += "</table>";    
    document.getElementById("resultPara").innerHTML = txt;
    
}

getUsers();


async function showdetails (login){
    const response = await fetch("https://api.github.com/users/"+login+"/repos");
    const result = await response.json();
    txt1 +="<ul>";
    for(x in result){
        txt1 +="<li>"+result[x].name+"</li>";
    }
    txt1 += "</ul>";    
    document.getElementById("detailsPara").innerHTML = txt1;

}


//to get users
// https://api.github.com/users  https://pokeapi.co/api/v2/pokemon

// to get repos of user
// https://api.github.com/users/<login>/repos
// for eg.
// https://api.github.com/users/mojombo/repos
