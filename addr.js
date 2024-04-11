function print_name(){
    const parent = document.getElementById('addrlist');
    const newUser = document.getElementsByName("name")[0].value;
    const child = document.createElement('li');
    const text = document.createTextNode(newUser);
    child.appendChild(text);
    parent.appendChild(child);
}
let flag = false;
function save_name(newUser){
    name = newUser;
    console.log(name);
    return name;
}

function clear_text(){
    document.getElementById("addrlist").innerHTML="";
}

body=document.querySelector('body');
function changeBg(){
    if(flag == false){
    body.setAttribute('style','background-color:yellow');
    flag=true;
    }
    else{
        body.setAttribute('style','background-color:white');
        flag=false;
    }
    }
    