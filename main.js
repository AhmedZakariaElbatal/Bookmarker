var bookmarkerNameInput =document.getElementById("bookmarkerName");
var websiteURLInput =document.getElementById("websiteURL");
// var siteList=[];
if(localStorage.getItem("siteList")==null){
    var siteList=[];
}else
{
    siteList = JSON.parse(localStorage.getItem("siteList"))
    displayData();
}
function addSite(){
    if(ValidName()&& ValidUrl()) {
    var site ={
        name:bookmarkerNameInput.value,
        url:websiteURLInput.value,
    }
    
    siteList.push(site);
    localStorage.setItem("siteList",JSON.stringify(siteList))
    console.log(siteList);
    displayData();
    }
}
function displayData()
{
    var temp ="";
    for(i=0; i<siteList.length; i++){
        temp+=`<tr>
        <td>${i}</td>
    <td><h2 class="text-secondary">${siteList[i].name}<h2></td>

    <td><button class="btn btn-outline-primary"onclick="visitUrl()">visit</button></td>
    <td><button class="btn btn-danger"onclick="deleteData(${i})">delete</button></td>
 </tr>`
    }
    document.getElementById("tableBody").innerHTML=temp

}
function deleteData(index)
{
    siteList.splice(index,1)
    localStorage.setItem("siteList",JSON.stringify(siteList));
    displayData();
}


function visitUrl(){
    var myInput = document.getElementById("websiteURL").value;
    var websitelink = 'https://' + myInput + '';
    window.open(websitelink);
}

function ValidName(){
  
    if(bookmarkerName.value!=""){
        document.getElementById("validNameAlert").innerHTML=""
    return true
    }
    else {
        document.getElementById("validNameAlert").innerHTML="<h5>Name field is required</h5>"
        return false

    }
}

function ValidUrl(){
  
    if(websiteURL.value!=""){
        document.getElementById("validUrlAlert").innerHTML=""
    return true
    }
    else {
        document.getElementById("validUrlAlert").innerHTML="<h5>URL field is required</h5>"
        return false

    }
}
