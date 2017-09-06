<template>
	<div>
		<canvas id="bannerHead" ref="bannerHead">123</canvas>
		
    </div>
	</div>
</template>
<style lang="sass">

</style>
<script>
import Vue from 'vue'

export default {
	components: {},
	mounted () {
		this.init();
	},methods:{
		init() {
			let that = this
			let canvasMod = {
				//构造画布
				ctx : document.getElementById('bannerHead').getContext('2d'),
				round : function (x,y){//画一个圆
					this.ctx.beginPath();
					this.ctx.arc(x, y, 20, 0, Math.PI * 2, false);
					this.ctx.closePath();
					this.ctx.fillStyle = "rgba(0,0,0,1)";
					this.ctx.fill();
				},
				gogok : function(x,y,rotate){//画勾玉
					let rotX = 42 , rotY = 42 ,rotW = 10;
					this.ctx.restore()
					this.ctx.beginPath();
					this.ctx.translate(x,y);console.info(rotate);
					this.ctx.rotate(rotate*Math.PI/180);
					this.ctx.arc(rotX, rotY, rotW, Math.PI * 1.9, Math.PI * .5, true);
					this.ctx.arc(rotX-11, rotY+17, rotW+2, Math.PI * 1.9, Math.PI * .3, false);
					this.ctx.arc(rotX-15, rotY+4, rotW+16, Math.PI *.35, Math.PI * 1.93, true);
					this.ctx.closePath();
					this.ctx.fillStyle = "#000";
					this.ctx.fill();
				},
				ring : function(x,y){
					this.ctx.beginPath();
					this.ctx.arc(x, y, 60, 0, Math.PI * 2, false);
					this.ctx.arc(x, y, 60, 0, Math.PI * 2, false);
					this.ctx.closePath();
					this.ctx.stroke()
				},
				roundList : function(x,y,rotate){
						this.gogok(x,y,rotate);
						/*this.gogok(0,0,120);
						this.gogok(0,0,120);*/
				},
				init : function(){
					//画布自适应
					let rotate = 360,self = this;
						let width = window.innerWidth,height = width/2;
						that.$refs.bannerHead.width = width
						that.$refs.bannerHead.height = height
						let x = width/2 , y = height/2;

						/*self.ctx.clearRect(0,0,x,y);
						self.ctx.fillStyle = 'red'
						self.ctx.fillRect(0, 0, width, height,'#a3dde9');
						self.round(x,y);
						self.ring(x,y);
						if(rotate==0)rotate=360;
						self.roundList(x,y,rotate);
*/					setInterval(function(){
						self.ctx.clearRect(0,0,x,y);
						self.ctx.fillStyle = 'red'
						self.ctx.fillRect(0, 0, width, height,'#a3dde9');
						self.round(x,y);
						self.ring(x,y);
						if(rotate==0)rotate=360;
						self.roundList(x,y,rotate);
						self.ctx.translate(-x,-y)
						rotate--;
					},500000)
				}

			};
			canvasMod.init()
		}
	}
}
</script>