function SimpleQueue(){
}
SimpleQueue.prototype.push=function(e){
    this.tail=this.head?this.tail[1]=[e,null]:this.head=[e,null];
}
SimpleQueue.prototype.shift=function(){
    return this.head?[this.head[0],this.head=this.head[1]][0]:null;
}
SimpleQueue.prototype.clear=function(){
    this.head=this.tail=null;
}
SimpleQueue.prototype.isEmpty=function(){
    return !this.head;
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
