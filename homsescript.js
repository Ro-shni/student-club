let newbtn=document.querySelector('button');
newbtn.addEventListener('click', inputMsg);
function inputMsg(){
    let name =prompt('Enter Your Name');
    newbtn.textContent='HELLO'+ ' '+name;
}