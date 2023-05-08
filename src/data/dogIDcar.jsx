const dogID = [
    {
        id:1,
        descripcion: 'Con solo acercar tu celular al DOG ID puedes acceder a toda su información.',
        icon:'./img/celular.png',
    },
    {
        id:2,
        descripcion: 'No requiere Internet ni datos móviles.',
        icon:'./img/noWIFI.png'
    },
    {
        id:3,
        descripcion: 'Fácil de colocar y utilizar.',
        icon:'./img/chack.png',
        nfc:  'Permite la comunicación entre dos dispositivos sin contacto entre ambos.',
        iconNFC:'./img/pata.png'
    },
    {
        id:4,
        descripcion: 'Resistente al agua y a la imtemperie.',
        icon:'./img/agua.png',
        nfc: 'Cada día se utiliza en más aplicaciones. marcando una tendencia tecnológica mundial.',
        iconNFC:'./img/pata.png'
    },
    {
        id:5,
        descripcion: 'Liviano y totalmente inofensivo.',
        icon:'./img/seguridad.png',
        nfc: 'Los celulares con iOS ya tienen incorporado NFC desde el modelo 7 en adelante.',
        iconNFC:'./img/pata.png'
    },   
    {
        id:6,
        descripcion: 'No tiene GPS.',
        icon:'./img/noGPS.png',
        nfc: 'Los dispositivos con Android incorporaron NFC hace varios años en sus versiones de media y alta gama, actualmente los últimos modelos ya incorporan NFC por defecto.',
        iconNFC:'./img/pata.png'
    }
]



export const  getDogID =() =>  new Promise ((resolve, reject) => {
    let condition = true
            if (condition){
                resolve(dogID)
            } else {
                reject ("algo salio mal")
            }
    })