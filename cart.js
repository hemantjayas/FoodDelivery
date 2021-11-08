 
  let dishName = JSON.parse(localStorage.getItem('dish'))
  console.log(dishName);

  async function cartproduct(dishName) {
      let res =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Number(dishName)}`)

      let data = await res.json()
      console.log(data);
  }

