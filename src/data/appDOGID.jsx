const appDOGID = [
    {
        id:1,
        descripcion: 'Adquiere tu Dog Id.',
        icon:'./img/01.png',
        img:'./img/app01.png'
    },
    {
        id:2,
        descripcion: 'Ingresa a Play Store o App Store y descarga la aplicación “DOG ID”.',
        icon:'./img/02.png',
        img:'./img/app02.png'
    },
    {
        id:3,
        descripcion: 'Completa tus datos de contacto  e información detallada de tu mascota.',
        icon:'./img/03.png',
        img:'./img/app03.png'
    },
    {
        id:4,
        descripcion: 'Presiona GRABAR y acerca el DOG ID a la parte superior trasera de tu dispositivo. ',
        icon:'./img/04.png',
        img:'./img/app04.png'
    },
    {
        id:5,
        descripcion: '¡Listo! Los datos han sido guardados.',
        icon:'./img/05.png',
        img:'./img/app05.png'
    }
]



export const  getAppDOGID =() =>  new Promise ((resolve, reject) => {
    let condition = true
            if (condition){
                resolve(appDOGID)
            } else {
                reject ("algo salio mal")
            }
    })