var user = {
  name: 'Путь Дракона',
  releaseDate: '1972',
  mainActor: 'Брюс Ли',
  episod: 1,
  user2: {
    rating: 10,
    ganre: "Боевик"
  }
}

console.log("Cериал" + " "+ user.name + ", дата выхода "+user.releaseDate +" года." +"В главных ролях " + user.mainActor)
console.log("В "+user.name + " "+user.episod +" кол-во эпизодов");
