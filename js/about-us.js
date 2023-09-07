// selects all rows from html
const row = document.querySelectorAll(".row");
// add click event to all rows
row.forEach(e =>{
    e.addEventListener("click", handleRow)
})

// highlights row on click
function handleRow(e){
    // selects clicked row
    const item = e.currentTarget
    const clickedItemId = e.currentTarget.id
    //  sets all rows to inactive then activates the clicked row
    if(item !== "active"){
        row.forEach(e => e.setAttribute("data-type", "inactive"))
        item.setAttribute("data-type", "active");
       }  

    //    calls update text 
    // will update text based on targets iD
       updateText(clickedItemId)
}


// updates text of benefits based on clicked target
function updateText(clickedTargetId){
    const primaryText = document.querySelector(".benefits-main-text")
    const secondaryText = document.querySelector(".benefits-secondary-text")
    
    // fetches data from json file and updates benefits innerhtml
    fetch("../benefits-data.json")
    .then(res => res.json())
    .then(data =>{
        // must use [clickedTargetId] to call e from event [] is same as .
        primaryText.innerHTML = data[clickedTargetId][0].description
        secondaryText.innerHTML = data[clickedTargetId][1].description
    })
}