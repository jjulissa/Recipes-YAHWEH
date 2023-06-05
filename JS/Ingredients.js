const mainIngredients = document.querySelector(".mainIngredients");
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    
    .then(res => res.json())
    .then(data => data.meals.forEach((e) => {

        const divIngredients = document.createElement('div')
        
        divIngredients.classList.add("divIngredients"); 
        console.log(e); 

        divIngredients.innerHTML = ` 
            <div style=" " class="containerIngre"> 

                <div class="divIngre"> 
                    <div class="divFoto"> 
                        <h1 style="color: black; text-decoration:none; list-style-type: none;" class="TitleMeal">${e.strMeal}</h1>
                        <img class="imgMeal" width="300px" src="${e.strMealThumb}" alt="${e.strMeal}">
                    </div>

                    <div class="containerIngredient"> 
                        <h1 style="color: black; text-decoration:none; list-style-type: none;" class="TitleMeal">Ingredients</h1>
                        <p>${e.strMeasure1}  ${e.strIngredient1}</p>
                        <p>${e.strMeasure2}  ${e.strIngredient2}</p>
                        <p>${e.strMeasure3}  ${e.strIngredient3}</p>
                        <p>${e.strMeasure4}  ${e.strIngredient4}</p>
                        <p>${e.strMeasure5}  ${e.strIngredient5}</p>
                        <p>${e.strMeasure6}  ${e.strIngredient6}</p>
                        <p>${e.strMeasure7}  ${e.strIngredient7}</p>
                        <p>${e.strMeasure8}  ${e.strIngredient8}</p>
                        <p>${e.strMeasure9}  ${e.strIngredient9}</p>
                        <p>${e.strMeasure10}  ${e.strIngredient10}</p> 
                        <p>${e.strMeasure11}  ${e.strIngredient11}</p> 
                        <p>${e.strMeasure12}  ${e.strIngredient12}</p> 
                        <p>${e.strMeasure13}  ${e.strIngredient13}</p> 
                        <p>${e.strMeasure14}  ${e.strIngredient14}</p> 
                        <p>${e.strMeasure15}  ${e.strIngredient15}</p> 
                        <br> 
                        <a style="text-decoration:none" href=${e.strYoutube}>See the recipe on YOUTUBE</a>
                    </div>
                </div>

                <div style=" " class="containerIngredients"> 
                    <p><span>Instructions: </span> ${e.strInstructions}</p> 
                </div>
            </div>`

        mainIngredients.append( divIngredients);
    
    }))