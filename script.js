var cartazFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]
var filmes = []
filmes.push("Toy Story","Interestelar","Naruto")
var comando = parseInt(prompt(" Para listar filmes digite 1 \n Para sortear Filme do dia digite 2"))


if(comando == 1){
  for (var i = 0; i < cartazFilmes.length; i++){
  document.write("<img src=" + cartazFilmes[i] + ">")
  document.write(filmes[i])
  }
}
else (comando == 2)
  var Numero =parseInt(Math.random() * (filmes.length - 0) + 0)
  document.write("<img src=" + cartazFilmes[Numero] + ">")
  document.write(filmes[Numero])