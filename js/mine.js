let SiteName =document.getElementById("SiteName");
let SiteURL =document.getElementById("SiteURL");
let Submit =document.getElementById("Submit");
let alertName = document.querySelector(".alertName");
let alertUrl = document.querySelector(".alertUrl");


let arrayBook =[];

if(localStorage.keyBook !=null){

    arrayBook= JSON.parse(localStorage.keyBook)
}else{
    arrayBook =[];
}


Submit.onclick =function(){


    if(SiteName.value =="" && SiteURL.value ==""){

        alertName.style.cssText ='display: block !important'
        alertUrl.style.cssText ='display: block !important'

    }else if(SiteName.value ==""){
        alertName.style.cssText ='display: block !important'

    }else if(SiteURL.value ==""){
        alertUrl.style.cssText ='display: block !important'


    }else{
        bookData();

        displayBook();
        cleanInput();
        alertUrl.style.cssText ='display: none !important'
        alertName.style.cssText ='display: none !important'

    }
    

}



function bookData(){

   let books ={

    Name:SiteName.value,
    Url:SiteURL.value,
    }

   

   arrayBook.push(books);
   localStorage.setItem("keyBook" ,JSON.stringify(arrayBook));

}
function displayBook(){
    let table ='';

    for(let i = 0 ; i < arrayBook.length ; i++){

        table+=`
        <tr class="rowTable">
        <td class="widthText">${arrayBook[i].Name}</td>
        
        <td>
            <a class="btn btn-primary visit me-2" href="${arrayBook[i].Url}" target="-blank"> visit</a>
            <button onclick="deleteBtn(${i})" class="btn btn-danger">Delete</button>
        </td>
        </tr>
        `
    }

   
    document.getElementById("tableCartoona").innerHTML=table;

}
displayBook();


function deleteBtn(indexDelet){

    // console.log(indexDelet);
    arrayBook.splice(indexDelet , 1);
    localStorage.setItem("keyBook" ,JSON.stringify(arrayBook));

    displayBook();
}

function cleanInput(){
    SiteName.value="";
    SiteURL.value="";
}

