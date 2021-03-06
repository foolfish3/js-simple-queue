function SimpleQueue(){
    this.length=0;
}

SimpleQueue.prototype.push=function(e){
    this.tail=this.length++?this.tail[1]=[e,null]:this.head=[e,null];
}

SimpleQueue.prototype.shift=function(){
    return this.length?[this.head[0],this.head=this.head[1],this.length--][0]:null;
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

//if you want to use it as nodejs module
//module.exports=SimpleQueue;

/*
//create
var queue=new SimpleQueue();

//push/add/enqueue
for(i=0;i<5;i++){
    queue.push(i);
}

//isEmpty
console.log(queue.isEmpty());

//shift/poll/dequeue
for(;!queue.isEmpty();){
    console.log(queue.shift());
}
console.log(queue.isEmpty());

//clear
queue.clear();

//benchmark
for(i=0;i<1024*1024;i++){
    queue.push(i);
}

var st=new Date().getTime();
for(i=0;i<1024*1024;i++){
    queue.push(i);
    queue.shift();
}

console.log("cost "+(new Date().getTime()-st)+" ms for "+1024*1024+" ops");
*/
