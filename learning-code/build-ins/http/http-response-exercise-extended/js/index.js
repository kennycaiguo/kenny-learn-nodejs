let tds = document.querySelectorAll('td')
tds.forEach(item =>{
    item.onclick = function () {
        item.style.background = "#ccc"
    }
})
