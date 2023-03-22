
const reviews = [
    {
        id:1,
        descripcion: 'Me gustó, el chaleco es realmente lo que esperaba, algo moderno y que además sea fácil para ponérselo. Muy lindo diseño. Gracias.”',
        nombre:'Ana Ramirez',
        perro: 'Kalel',
        img:'./img/perrito1.png',
        icon:''
    },
    {
        id:2,
        descripcion: '¡Me encantó! Fácil de usar, de cargar información y cuando Doki se metió al mar, el Dog Id no se dañó.',
        nombre:'Laura Rodriguez',
        perro: 'Doki',
        img:'./img/perrito2.png',
        icon:''
    },
    {
        id:3,
        descripcion: 'Bruno está feliz de integrar Monarquía Perruna! Es el más lindo luciendo su Dog ID super canchero.”',
        nombre:'Marcia González',
        perro: 'Bruno',
        img:'./img/perrito3.png',
        icon:''
    },
    {
        id:4,
        descripcion: 'Me gustó, el chaleco es realmente lo que esperaba, algo moderno y que además sea fácil para ponérselo. Muy lindo diseño. Gracias.',
        nombre:'Pepita',
        perro: 'Chapi',
        img:'./img/perrito1.png',
        icon:''
    },
    {
        id:5,
        descripcion: 'Me gustó, el chaleco es realmente lo que esperaba, algo moderno y que además sea fácil para ponérselo. Muy lindo diseño. Gracias.',
        nombre:'Pepito',
        perro: 'Loli',
        img:'./img/perrito2.png',
        icon:''
    },
    {
        id:6,
        descripcion: 'Me gustó, el chaleco es realmente lo que esperaba, algo moderno y que además sea fácil para ponérselo. Muy lindo diseño. Gracias.',
        nombre:'Carina',
        perro: 'Lobi',
        img:'./img/perrito3.png',
        icon:''
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