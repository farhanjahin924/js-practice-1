//  let hwb = document.querySelector("button");
// hwb.addEventListener('click',showmsg);

// function showmsg()
// {
// alert("You did it Farhan! welcome from Js🙌 ")

// }

let change = document.querySelector("button");
change.addEventListener('click', cngmsg)
function cngmsg()
{
    let name = prompt("Enter name of student");
    change.textContent = 'Roll no 1:' + name ;



}