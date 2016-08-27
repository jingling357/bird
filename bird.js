/**
 * Created by jing on 2016/7/6.
 */
function Bird(cvs,ctx,x,y,width,height){
    if(!Bird.isinit){
        throw "请先初始化Bird类!";
    }
    this.cvs=cvs;
    this.ctx=ctx;
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.index=0;//小鸟裁切
    this.speed=1;
    this.speedPlus=0.05;
}
Bird.init=function(img){
    Bird.img=img;
    Bird.imgWidth=Bird.img.width/3;
    Bird.imgHeight=Bird.img.height;
    if(img){
        Bird.isinit=true;
    }
}
extend(Bird.prototype,{
    draw:function(){
        this.ctx.save();
        var a=this.x+this.width/2;
        var b=this.y+this.height/2;
        this.ctx.translate(a,b);
        var rab=this.speed*10;
        rab=rab>45?45:rab;
        this.ctx.rotate(angle(rab));
        this.ctx.drawImage(Bird.img,
            this.index*Bird.imgWidth,0,Bird.imgWidth,Bird.imgHeight,
            -this.width/2,-this.height/2,this.width,this.height);
        this.ctx.restore();
    },
    updata:function(){
        this.index=++this.index%3;
        this.y+=this.speed;
        this.speed+=this.speedPlus;
    }
});