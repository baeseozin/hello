function addAddr() {
	const result = document.getElementById('addrlist');
  const newAddr = document.getElementsByName("name")[0].value + ' , ' + document.getElementsByName('tel')[0].value;
    const item = document.createElement('li');
    const txt = document.createTextNode(newAddr);
    item.appendChild(txt);
    result.appendChild(item);
}


function resetAddr() {
	document.getElementById('addrlist').innerHTML="";
}

function changeBg() {
	body=document.querySelector('body');
  body.setAttribute('style','background-color:yellow');
  //body.style.backgroundColor="yellow";
 // body.className="bgyellow";
}