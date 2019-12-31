## js-simple-queue

The simplest queue in JavaScript, only 9 lines.

```js
function SimpleQueue(){
    this.length=0;
}

SimpleQueue.prototype.push=function(e){
    this.last=this.length++?this.last.next={e:e,next:null}:this.first={e:e,next:null};
}

SimpleQueue.prototype.shift=function(){
    return this.length?[this.first.e,this.first=this.first.next,this.length--][0]:null;
}
//if you want to use it as nodejs module, uncomment it
//module.exports=SimpleQueue;
```
