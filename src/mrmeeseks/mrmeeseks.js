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