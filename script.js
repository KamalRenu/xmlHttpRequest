var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload = function(){
    var data=JSON.parse(request.response);
    var a = data.filter((elem)=>elem.population<100000);
    var b = a.map((elem)=>elem.name);
    console.log(b);
}