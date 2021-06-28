class Particle
{
constructor()
{
 var options={
   restitution:1,
   friction:0.3,
   density:1
 }
 this.body=Bodies.circle(600,20,10,options)
 
 World.add(world,this.body)

}
display()
{
push ()

translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipseMode(RADIUS)
ellipse(0,0,10,10)
pop ()
}


}














