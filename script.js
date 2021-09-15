window.onload = ()=>{
    var ele = document.getElementsByClassName("menu")
    ele[0].onclick = ()=>{
        var cont = document.getElementsByClassName("cont")
        var tog = document.getElementsByClassName("sidebar")
        tog[0].classList.toggle("active")
        cont[0].classList.toggle("active")
        ele[0].firstElementChild.classList.toggle("active")
    }
}