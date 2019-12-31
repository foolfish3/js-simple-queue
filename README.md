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

create queue
```js
//var SimpleQueue = require("./SimpleQueue");
var queue=new SimpleQueue();
```

is empty
```js
console.log(queue.length?"notEmpty":"empty");
```

push/add/enqueue
```js
for(i=0;i<5;i++){
    queue.push(i);
}
```

queue size
```js
console.log(queue.length);
```

clear
```js
queue.length=0;
```

shift/poll/dequeue
```js
for(;queue.length;){
    console.log(queue.shift());
}
```

benchmark
```js
for(i=0;i<1024*1024;i++){
    queue.push(i);
}

var st=new Date().getTime();
for(i=0;i<1024*1024;i++){
    queue.push(i);
    queue.shift();
}
console.log("cost "+(new Date().getTime()-st)+" ms for "+1024*1024+" ops");
```

if you want more readable functions
```js
SimpleQueue.prototype.isEmpty=function(){
    return this.length==0;
}

SimpleQueue.prototype.clear=function(){
    this.length=0;
}

SimpleQueue.prototype.size=function(){
    return this.length;
}
```

