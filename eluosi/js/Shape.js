(function(window){
    'use strict';
     function Shape (){
       this.block = new Block(z);
       this.x = 0;
       this.y = 0;

      this.layout = {
          [0,1,0],
          [1,1,1]
      }
     }

     Shape.prototype = {
       constructor:Shap,
       draw:function(context) {
           for(var i = 0; i<this.layout.length;i++){
               for(var j=0; j<this.layout[1].length;j++){
                   if(this.layout[i][j]){
                       this.block.draw(content,j+this.x,i+this.y);
                   }
               }
           }
       } 
     };

     window.Shap = Shap;
})(window);