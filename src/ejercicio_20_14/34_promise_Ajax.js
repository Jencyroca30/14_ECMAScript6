//Promises Ajax//
function GetData(url) {
  return new Promise(function(response) {
      let xhr= new XMLHttpRequest(); 
      xhr.open('GET', url); 
      xhr.onload=function() {
          if (xhr.status==200) {
              response(xhr.response);   
          } 
      }
      xhr.send(); 
  })
}

GetData('https://jsonplaceholder.typicode.com/posts').then(function (response) {
   console.log(response);  
})
