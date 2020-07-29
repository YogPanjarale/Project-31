function newGround(x,y,width,height){
   var ground = new Ground(x,y,width,height);
   display.push(ground)
   return ground
}
function newparticle(x,y){
    var particle = new Particle(x,y);
    display.push(particle)
    return particle
 }
 function createPlinkos(){
     var offset =2.5
     for (let h = 150; h < 450; h+=100) {
          
    for (let j = 55; j < width; j+=50) {
        var p =new Particle(j +random(-offset,offset),h,true)
        plinkos.push(p)
        display.push(p);
    }
}
for (let h = 100; h < 400; h+=100) {
          
    for (let j = 30; j < width; j+=50) {
        var p =new Particle(j+random(-offset,offset),h,true)
        plinkos.push(p)
        display.push(p);
    }
}
 }
 function showDivisions(){
     for (let i = 66.66666667; i < width; i+=66.6666666667) {
         var division=new Box(i,height-200/2,10,200)
         divisions.push(division)
         display.push(division)
     }
 
 }

function displayAll(array){
    for (let index = 0; index < array.length; index++) {
    array[index].display();
        
    }
}

function show(object){
    object.display();
}