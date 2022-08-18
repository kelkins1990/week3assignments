function cookInMicrowave(food,seconds){
    return "microwaving" + food + "for" + seconds + "seconds!";
}

var burrito = cookingInMicrowave("burrito", 60)
console.log(burrito)

var taco = cookInMicrowave("taco", 30);
console.log(taco)