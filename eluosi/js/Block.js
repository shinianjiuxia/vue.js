(function (window){
    'use strict';
    function Block(blockType){
      this.blockType = blockType;
      this.size = 30;
      this.originalSize = 266;
      this.sprite= window.ResourceManager.getResource('blocks');
    }

    Blocks.prototype = {
        constrouctor: Block,
        draw:function(context,x,y){
            context.drawImage(this.sprite,(this.blockType-1)* this.originalSize,0,this.originalSize,this.originalSize,x * this.size,y*this.size)

        }
    };
    window.Block = Block;
})(window);