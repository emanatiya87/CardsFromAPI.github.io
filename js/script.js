//  // BOM

// //  window.alert
// // window.prompt
// // window.document
// // window.console
// // window.scroll
// // window.location.href
// // window.location.pathname
// // window.location.host


// var header = document.getElementById('header');
// var backTop = document.getElementById('backTop');
// window.onscroll = function () {
//     if (window.scrollY > 250) {
//         header.classList.add('header-fixed');
//         backTop.classList.add('btn-show');
//     }
//     else {
//         header.classList.remove('header-fixed');
//         backTop.classList.remove('btn-show');
//     }
// }

// backTop.addEventListener('click', function () {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// Api
//readyState = 0
// Uninitialized
//readyState = 1 send
//readyState = 2 connection established
//readyState = 3 received
//readyState = 4 done

//status = 404
//status = 503
//status = 200


// var httpReq = new XMLHttpRequest();
// httpReq.open("GET","https://jsonplaceholder.typicode.com/users")
// httpReq.send()
// httpReq.addEventListener('readystatechange', function() {
//     if(httpReq.readyState == 4 && httpReq.status == 200){
//       var res = JSON.parse(httpReq.response )
//       console.log(res);
//     }
// })

var allRecipes = [];
var httpReq = new XMLHttpRequest();
httpReq.open("GET", "https://api.weatherapi.com/v1/search.json?key=4e13d54b4cf44732b50211426242907&q=lond")
httpReq.send()

httpReq.addEventListener('readystatechange', function () {
    if (httpReq.readyState == 4 && httpReq.status == 200) {
        allRecipes = JSON.parse(httpReq.response)
        displayRecipe()
    }
})

function displayRecipe() {
    var cartoona = ``
    for (var i = 0; i < allRecipes.length; i++) {
        cartoona += `
              <div class="col-lg-4 card">
        <h2 class="name text-center"> ${allRecipes[i].name} </h2>
        <p class=" region p-2"> ${allRecipes[i].region} </p>
        <p class="country p-2"> ${allRecipes[i].country} </p>
        <p class="lat p-2">${allRecipes[i].lat} </p>
        <p class="lon p-2"> ${allRecipes[i].lon}</p>
      </div>
        `
    }
    document.getElementById('row').innerHTML = cartoona;
}
