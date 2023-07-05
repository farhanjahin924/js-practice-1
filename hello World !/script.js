 let hwb = document.querySelector(".b1");
hwb.addEventListener('click',showmsg);

function showmsg()
{
alert("You did it Farhan! welcome from Js🙌 ")

}

let change = document.querySelector(".b2");
change.addEventListener('click', change_msg)
function change_msg()
{
    let name = prompt("Enter name of student");
    change.textContent = 'Roll no 1:' + name ;



}