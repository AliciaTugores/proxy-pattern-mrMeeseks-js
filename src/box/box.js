var singletonMrMeeseeks = require('../mrmeeseks/mrmeeseks');

function Box(){
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}

var factory = (function singleBox(){
    const boxInstance = new Box();
    return {
        getBox : function getBox() {
            return boxInstance;
        }
    };
})();

/**
 * Testing e importacion del singleton
 * de la clase Box
 */

// node.js modules
exports.singletonBox = factory;

Box.prototype.createMrMeeseeks = function() {
    if (! this.mrMeeseeks) {
        this.mrMeeseeks = singletonMrMeeseeks.singletonMrMeeseeks.get();
    }
    // variable solo para propositos educativos de debugging: observar __proto__
    let meeseeksClon = Object.create(this.mrMeeseeks);
    return meeseeksClon;
}

Box.prototype.getProtoMeeseks = function () {
    return this.mrMeeseeks;
};

Box.prototype.pressButton = function(reality) {
    let mrMee = this.createMrMeeseeks();
    mrMee.speakOnCreate();
    reality.push(mrMee);
};

Box.prototype.getProtoMeeseks = function() {
    return this.mrMeeseeks;
};
