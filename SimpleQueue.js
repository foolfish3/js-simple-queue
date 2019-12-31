function SimpleQueue(){
    this.length=0;
}
SimpleQueue.prototype.push=function(e){
    this.last=this.length++?this.last.next={e:e,next:null}:this.first={e:e,next:null};
}
SimpleQueue.prototype.shift=function(){
    return this.length?[this.first.e,this.first=this.first.next,this.length--][0]:null;
}

//if you want to use it as nodejs module
//module.exports=SimpleQueue;

/* if you want more readable functions
SimpleQueue.prototype.isEmpty=function(){
    return this.length==0;
}

SimpleQueue.prototype.clear=function(){
    this.length=0;
}

SimpleQueue.prototype.size=function(){
    return this.length;
}
*/

/*
//create
var queue=new SimpleQueue();

//push/add/enqueue
for(i=0;i<5;i++){
    queue.push(i);
}

//isEmpty
console.log(queue.length?"notEmpty":"empty");

//shift/poll/dequeue
for(;queue.length;){
    console.log(queue.shift());
}

//clear
queue.length=0;

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
