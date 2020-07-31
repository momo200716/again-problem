class Stand {
    constructor(x,y,r){
		var options ={
			'isStatic':true,
			//restitution: 0.1,
			'friction':0.2,
			'density':1.2
		}
		this.body=Bodies.circle(x,y,r,options);
		this.r=r;
		
		World.add(world,this.body);
	}
	display(){
	   rectMode(RADIUS);
		fill("brown");
		rect(505, 200, 130, 5);
	}
}