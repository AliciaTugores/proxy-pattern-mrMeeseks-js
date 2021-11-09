function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = ["Oooh yeah! Can do!", 
                            "Yes sireee!" , 
                            "Oh, yeah!, Yes, ma'am!"];
}

// singleton de MrMeeseeks
var factory = (function singletonMrMeeseeks() {
    const prototipo = new MrMeeseeks();
    return {
        get: function getMrMeeseeks() {
            return prototipo;
        }
    };
})();

/**
 * Testing e importacion del singleton
 * de la clase MrMeeseeks
 */

// node.js modules
exports.singletonMrMeeseeks = factory;

MrMeeseeks.prototype.speakOnCreate = function() {
    console.log(this.messageOnCreate);
};

MrMeeseeks.prototype.speakOnRequest = function() {
    let message = this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)]
    console.log(message);
    // testing
    return message;
};

MrMeeseeks.prototype.makeRequest = function(deseo, objeto) {
    let closure = function(cosa) {
        function execute() {
            return deseo + " " + cosa;
        }
        return execute;
    };
    // creamos propiedad action al vuelo en el objeto MrMeeseeks
    // accion = execute con el closure sobre deseo
    this.accion = closure(objeto);
    this.speakOnRequest();
};

MrMeeseeks.prototype.fulfillRequest = function() {
    console.log(this.accion() + " All done!!");
    // testing
    return this.accion() + " All done!!";
};

MrMeeseeks.prototype.learnRequest = function(deseo, objeto) {
    // deseo es una funcion con un closure
    // sobre objeto 
    this.accion = deseo(objeto);
};