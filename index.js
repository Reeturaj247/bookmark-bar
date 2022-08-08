
// const inputEl = document.getElementById("input-el")
// const saveEl = document.getElementById("save-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteEl = document.getElementById("delete-btn")
// const savetabEl = document.getElementById("savetab-btn")

// // localStorage.setItem("myinputs","www.example.com")
// // console.log(localStorage.getItem("myinputs"))
// // localStorage.clear()
// let myInputs = []


// const storedItem = JSON.parse(localStorage.getItem("myinputs"))
// if(storedItem){
//     myInputs = storedItem
//     render(myInputs)
// }

// let currTab = [
//     {url:"https://www.google.com"}
// ]

// savetabEl.addEventListener("click" ,function(){
//     myInputs.push(currTab[0].url)
//     localStorage.setItem("inputs",JSON.stringify(currTab[0].url))
//     render(myInputs)
// })

// function render(arr) {
//     let listItems = "";
//     for (let i = 0; i < arr.length; i++) {
//         // listItems += "<li><a href = '''+myInputs[i]+''' target='_blank'>" + myInputs[i] +"</a></li>"
//         listItems +=
//             `<li>
//             <a href = '${arr[i]}' target='_blank'>
//                 ${arr[i]}
//             </a>
//         </li>`
//     }
//     ulEl.innerHTML = listItems
// }


// saveEl.addEventListener("click", function () {
//     myInputs.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myinputs", JSON.stringify(myInputs))
//     render(myInputs)
// })

// deleteEl.addEventListener("click",function(){
//     localStorage.clear();
//     // while(myInputs.length)myInputs.pop()
//     myInputs = []
//     render(myInputs)
// })

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

