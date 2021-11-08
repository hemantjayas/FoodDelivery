// console.log('menu');



async function dishes() {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)

    let data = await res.json()
    //    console.log(data.meals);
    showMeals(data.meals)
}



let menu = document.getElementById('menu');

function showMeals(product) {
    // console.log(product);
    product.forEach(item => {
        console.log(item);

        let div = document.createElement('div');
        let divImage = document.createElement('div');
        let img = document.createElement('img');
        img.src = item.strMealThumb;
        let dishName = document.createElement('p')
        dishName.textContent = item.strMeal;
        let btn = document.createElement('button')
        btn.textContent = 'Add to Cart'
        
        btn.onclick = function () {
            localStorage.setItem('dish', JSON.stringify(item.idMeal))
            window.location.href = 'cart.html'

        }


        divImage.append(img)
        div.append(divImage, dishName, btn);

        menu.append(div)
    });
}







// console.log(Math.random());