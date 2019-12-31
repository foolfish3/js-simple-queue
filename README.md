## js-simple-queue

The simplest queue in JavaScript, only few lines.

queue with no size support
```js
function SimpleQueue(){

}

SimpleQueue.prototype.push=function(e){
    this.tail=this.head?this.tail.next={e:e,next:null}:this.head={e:e,next:null};
}

SimpleQueue.prototype.shift=function(){
    return this.head?[this.head.e,this.head=this.head.next][0]:null;
}

SimpleQueue.prototype.clear=function(){
    this.head=this.tail=null;
}

SimpleQueue.prototype.isEmpty=function(){
    return !this.head;
}
//if you want to use it as nodejs module, uncomment it
//module.exports=SimpleQueue;
```

queue with size support
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

SimpleQueue.prototype.clear=function(){
    this.head=this.tail=null;
    this.length=0;
}

SimpleQueue.prototype.isEmpty=function(){
    return this.length==0;
}

SimpleQueue.prototype.size=function(){
    return this.length;
}
//if you want to use it as nodejs module, uncomment it
//module.exports=SimpleQueue;
```

create queue
```js
//const SimpleQueue = require('./SimpleQueue');;
var queue=new SimpleQueue();
```

is empty
```js
console.log(queue.isEmpty()?"notEmpty":"empty");
```

push/add/enqueue
```js
for(i=0;i<5;i++){
    queue.push(i);
}
```

shift/poll/dequeue
```js
for(;queue.length;){
    console.log(queue.shift());
}
```

clear
```js
queue.clear();
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
//cost 74 ms for 1048576 ops
```

### Thanks

Inspired by [js-simple-queue](https://github.com/foolfish3/js-simple-queue)
by [QIAN YU](https://github.com/foolfish3).
