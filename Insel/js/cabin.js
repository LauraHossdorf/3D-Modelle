AFRAME.registerComponent('event-animate', { // A-Frame Component zur Animation auf 'click'
    schema: {
        target: {type: 'selector'}, //mehrere Targets um mehrere Animationen mit einem 'click' auszulösen
        target2: {type: 'selector'},
        target3: {type: 'selector'},
        target4: {type: 'selector'},
        target5: {type: 'selector'},
        target6: {type: 'selector'},
        aevent: {default: 'animation1'}, // verlinkung als 'begin' in einer Animation
        triggeraction: {default: 'click' }
    },

    init: function() {

        var data= this.data;

        this.el.addEventListener(data.triggeraction, function () {
            data.target.emit(data.aevent);
            data.target2.emit(data.aevent);
            data.target3.emit(data.aevent);
            data.target4.emit(data.aevent);
            data.target5.emit(data.aevent);
            data.target6.emit(data.aevent);
        });
    }
});


var tick = 0;