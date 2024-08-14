// Retornar Funciones
function a () {
    function b () {
        return 1;
    }

    return b;
}


// Asignar funciones a variables
const a = function() {
    return 1;
}

// terner propiedades y métodos
function a () {
}

const obj = {};

a.call(obj);

// Anidar funciones -> Nested functions
function a () {
    function b () {
       function c() {
              return 1;
       }
    }

    b();
}
a();

// Métodos -> Funciones dentro de un objeto
const rocket = {
    name: 'Falcon 1',
    launchMessage: function() {
        console.log(`Lanzando el cohete ${this.name}`);
    }
}

rocket.launchMessage();