/**
 * Created by Laura on 24.08.2018.
 */
/*AFRAME.registerComponent('event-animate-sprechblase',{
   shema:{
        target:{type: 'selector'}
        triggeraction:{default: 'click'}
    },
    init:function(){
        var data= this.data;

            this.getElementById('sprechblase1').setAttribute('visible','true')
    }
})*/


// Für Einblendung des neuen Textes
AFRAME.registerComponent('event-animate-text1',{
    schema:{
        target: {type: 'selector'},
        aevent2: {default: 'animation2'},


        triggeraction: {default: 'click'}
    },

    init: function(){

        var data= this.data;
        var zustand= 0;


        this.el.addEventListener(data.triggeraction,function() {
            if(zustand==0){

                data.target.emit(data.aevent2);
                zustand=0;
            }


        });
    }
});

//Ausblendung von Text
AFRAME.registerComponent('event-animate-text',{
    schema:{
        target: {type: 'selector'},
        aevent1: {default: 'animation1'},

        triggeraction: {default: 'click'}
    },

    init: function(){
        var data= this.data;


        this.el.addEventListener(data.triggeraction,function() {

            data.target.emit(data.aevent1);


        });
    }
});
