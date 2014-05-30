var Events = {

  on: function(event, funct){
    if (this.events === undefined){
      this.events = {};
    };
    if (this.events[event] === undefined){
      this.events[event] = [];
    };
    this.events[event].push(funct);
  },

  trigger: function(event){
    var array = this.events[event];
    for(var i =0; i<array.length; i++){
      array[i].call();
    };
  }

};
