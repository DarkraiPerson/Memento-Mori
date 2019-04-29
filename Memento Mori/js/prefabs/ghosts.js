function ghosts(color){
	this.color = color;
	var ypos;
	var ghost;
}

ghosts.prototype = {
	spawn: function(game,x,y,blackghost,whiteghost){
		if(this.color == 0){
			this.ghost = game.add.sprite(x,y,blackghost);
		}else{
			this.ghost = game.add.sprite(x,y,whiteghost);
		}
		this.ghost.scale.setTo(2.3,2.3);
		this.ypos = y;
	},
}