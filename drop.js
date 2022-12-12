const dropdownbtn = document.getElementById("btn");
const dropdown = document.getElementById("dropdown");
const down = document.getElementById("down")

 const toggleDown = function(){
    dropdown.classList.toggle('show');
    down.classList.toggle('arrow')
 }
dropdownbtn.addEventListener('click', function(e){
    e.stopPropagation();
    toggleDown()
})

document.documentElement.addEventListener('click', function(){
    if (dropdown.classList.contains('show')){
        toggleDown()
    }
})