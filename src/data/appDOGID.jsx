const appDOGID = [
    {
        id:1,
        descripcion: 'Adquiere tu Dog Id.',
        icon:'./img/01.png',
        img:'./img/app01.png',
        descripcion2: 'Se perdió tu mascota, ¡qué suerte que tiene un DOG ID!',
        img2: './img/dog1.png',
        num:'1'
    },
    {
        id:2,
        descripcion: 'Ingresa a Play Store o App Store y descarga la aplicación “DOG ID”.',
        icon:'./img/02.png',
        img:'./img/app02.png',
        descripcion2: 'La persona que la encuentre puede escanear el DOG ID con su celular y ver tus datos de contacto',
        img2: './img/dog2.png',
        num:'2'
    },
    {
        id:3,
        descripcion: 'Completa tus datos de contacto  e información detallada de tu mascota.',
        icon:'./img/03.png',
        img:'./img/app03.png',
        descripcion2: 'La persona que encontró a tu mascota se contactará contigo para que puedas reunirte con ella',
        img2: './img/dog3.png',
        num:'3'
    },
    {
        id:4,
        descripcion: 'Presiona GRABAR y acerca el DOG ID a la parte superior trasera de tu dispositivo. ',
        icon:'./img/04.png',
        img:'./img/app04.png',
        descripcion2: '¡Tu mascota se sentirá feliz de volver a reunirse contigo!',
        img2: './img/dog4.png',
        num:'4'
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