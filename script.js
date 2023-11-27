const api_url="https://jsonplaceholder.typicode.com/users";
async function getapi(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    show(data);
}
getapi(api_url);
const container=document.getElementById('display');
function show(data){
    data.forEach(element => {
    const content='<div class="col-sm-3"><div class="card p-2 m-1 bg-info"><div class="fw-bold"><p>Name : '+element.name+'</p></div><p>Email : '+element.email+'</p><p>Street : '+element.street+'</p><p>City : '+element.city+'</p></div></div>';
    container.innerHTML+=content;
   });
   
}