const clientesCaninos = [
    { id:1 , nombre: "Bulldog" , producto:"Chaleco" , modelo:"Modelo Zafiro" , img:"/img/Bulldog2.jpg" },
    { id:2 , nombre: "Millie" , producto:"Chaleco" , modelo:"Cuarzo Rosa" , img:"/img/Millie2.jpg" },
    { id:3 , nombre: "Magui", producto:"Dog Id" , modelo:"Color Rosa" , img:"/img/Magui2.jpg" },
    { id:4 , nombre: "Roquefort", producto:"Dog Id" , modelo:"Color Verde" , img:"/img/Roquefort2.jpg" },
    { id:5 , nombre: "Charly", producto:"Dog Id" , modelo:"Color Agua" , img:"/img/Charly2.jpg" },
    { id:6 , nombre: "Alai", producto:"Chaleco" , modelo:"Modelo Oro" , img:"/img/Alai2.jpg" },
    { id:7 , nombre: "Bruno", producto:"Dog Id" , modelo:"Modelo Aqua" , img:"/img/Bruno2.jpg" },
    { id:8 , nombre: "Dino", producto:"Chaleco" , modelo:"Modelo Platino" , img:"/img/Dino2.jpg" }
]

export const  getClients =() =>  new Promise ((resolve, reject) => {
    let condition = true;
            if (condition){
                resolve( clientesCaninos )
            } else {
                reject ("Error")
            }
 })