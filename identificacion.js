let user = 'admin';
let password = 1234;

function identificacion (usuario, contraseña){
    switch (true){
        case (usuario == undefined  && contraseña == undefined ):
            console.log ('debe ingresar los datos requeridos');
             break;   
        case (usuario == user && contraseña == password):
            console.log ('Bienvenido a nuestro sitio ' + user);
            break;
        case (usuario == user && contraseña != password):
            console.log ('contraseña incorrecta'); 
            break;
        case (usuario != user && contraseña == password):
            console.log ('usuario incorrecto');
            break;
        case (usuario != user && contraseña != password):
            console.log ('usuario y contraseña incorrectos');
            break;        
    }
}


identificacion();
identificacion('admin', 1234);
identificacion('admin', 1245);
identificacion('adminn', 1234);
identificacion('adminn', 1245);