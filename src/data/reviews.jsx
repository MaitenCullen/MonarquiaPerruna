
const reviews = [
    {
        id:1,
        descripcion: 'Hola! Cómo estás? Quería avisarte que llego el chaleco, todo bien, es hermoso como se ve en la foto!',
        img:'./img/perrito1.png',
    },
    {
        id:2,
        descripcion: 'El más lindo luciendo su Dog ID super canchero.',
        img:'./img/perrito2.png',
    },
    {
        id:3,
        descripcion: 'Amamos monarquía perruna ❤️ ',
        img:'./img/perrito3.png',
    },
    {
        id:4,
        descripcion: 'Que hermosa es Magui, el Dog ID le queda muy lindo.',
        img:'./img/perrito1.png',
    },
    {
        id:5,
        descripcion: 'Bruno está feliz de integrar Monarquía Perruna!',
        img:'./img/perrito2.png',
    },
    {
        id:6,
        descripcion: 'Me gustó, el chaleco es realmente lo que esperaba, algo moderno y que además sea fácil para ponérselo. Muy lindo diseño. Gracias.',
        img:'./img/perrito3.png',

    },
    {
        id:7,
        descripcion: 'Te felicito, me encantó!!',
        img:'./img/perrito1.png',
    },
    {
        id:8,
        descripcion: 'Divinos los chalecos!! Ya tenemos el nuestro!',
        img:'./img/perrito2.png',
    },
    {
        id:9,
        descripcion: 'Gracias monarquía perruna!! Lore sos lo más!!',
        img:'./img/perrito3.png',
    },
    {
        id:10,
        descripcion: 'Gracias monarquía perruna, estos reyes están hermosos y cómodos... Vamos por más!!',
        img:'./img/perrito1.png',
    },
    {
        id:11,
        descripcion: 'Te amamos Charly, siempre buscando lo mejor ❤️ gracias monarquía',
        img:'./img/perrito2.png',
    },
    {
        id:12,
        descripcion: 'Es lo más!!! Ame su chaleco!❤️',
        img:'./img/perrito3.png',
    },
    {
        id:13,
        descripcion: 'Hermoso le quedó 😍 gracias!!!❤️',
        img:'./img/perrito1.png',
    },
    {
        id:14,
        descripcion: 'Gracias!!! Otto está feliz y calentito❤️🐶',
        img:'./img/perrito2.png',
    },
    {
        id:15,
        descripcion: 'Estamos felices!! Gracias. Sin dudas aquí el rey con su super abrigo 🤴🏻🔥❤️',
        img:'./img/perrito3.png',
    },
    {
        id:16,
        descripcion: 'Me gustó mucho, es realmente lo que esperaba , algo canchero y moderno para mi perrito y además que sea ágil ponérselo. Reune todas las condiciones que tiene que tener una prenda de ropa.',
        img:'./img/perrito1.png',
    },
    {
        id:17,
        descripcion: 'Muy lindo diseño y color. Gracias, esperamos ver la próxima temporada 😘',
        img:'./img/perrito2.png',
    },
    {
        id:18,
        descripcion: 'Me encanto💕 fácil de usar, fácil de cargar la información y cuando Doki se metió al mar con el Dog ID no sé dañó.',
        img:'./img/perrito3.png',
    },
    {
        id:19,
        descripcion: 'Hola! Le regale el Dog ID a mi prima que tiene perro y le encanto!!! Super original, muchas gracias!!',
        img:'./img/perrito1.png',
    },
    {
        id:20,
        descripcion: 'Lo lleve a la veterinaria a comprar su alimento y lo primero que preguntaron fue que llevaba en el collar. Enseguida recomendé el Dog ID y chau chapita.',
        img:'./img/perrito2.png',
    }
]


export const  getReviews =() =>  new Promise ((resolve, reject) => {
    let condition = true
            if (condition){
                resolve(reviews)
            } else {
                reject ("algo salio mal")
            }
 })