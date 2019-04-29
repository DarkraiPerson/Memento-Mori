function platforms(color){
	this.color = color;
	var platform;
}

platforms.prototype = {
	spawn: function(game,x,y,blackplatform,whiteplatform){
		if(this.color == 0){
			this.platform = game.add.sprite(x,y,blackplatform);
		}else{
			this.platform = game.add.sprite(x,y,whiteplatform);
		}
		this.platform.scale.setTo(0.5,0.5);
	},
}