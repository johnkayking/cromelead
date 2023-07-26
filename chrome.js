


let myLeads = []

const inputEl = document.getElementById("input-el")
const  getButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn =document.getElementById("delete-btn")
const leadFromLocalstorage = JSON.parse (localStorage.getItem("myLeads"))
const tabBtn =document.getElementById("tab-btn")


if(leadFromLocalstorage ){
    myLeads = leadFromLocalstorage 
    render(myLeads)
}

 



tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads) )

    render(myLeads)

    })  
})

function render(leads) {
    let listItems = ""
for(let i = 0; i<leads.length; i++){
   listItems +=`
   <li>
   <a href='${leads[i]}' target='_blank'>
          ${leads[i]}
   </a>
   </li>
   `  
}
ulEl.innerHTML = listItems

}



deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)

})
getButton.addEventListener("click" ,function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads) 
 }); 

 
 


 













