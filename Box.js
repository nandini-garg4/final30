class Box{
    constructor(x,y,width,height,angle)  {
     var options={
      'restitution':0.8,
      'friction':0.0,
      'density':0.4
     
    }
    this.visiblity=225
    this.width = width
    this.height = height
    this.body = Bodies.rectangle(x,y,width,height,options)
              
      
     World.add(world,this.body)
      
     }
   display()  {
     if(this.body.speed<3){
       var angle=this.body.angle
       var pos=this.body.position
       push ()
       translate (pos.x,pos.y)
       rotate (angle)
       rectMode(CENTER)
       rect(0,0,this.width,this.height)
       pop ()
     }
     else{
       World.remove(world,this.body)
       push ()
       this.visiblity=this.visiblity-5
       pop ()
     }
    
      
   }
}