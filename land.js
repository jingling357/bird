/**
 * Created by jing on 2016/7/6.
 */


function Land(cvs,ctx,x){
    if(!Land.isinit){
        throw "请先初始化Bird类!";
    }
    this.cvs=cvs;
    this.ctx=ctx;
    this.x=x||0;
    this.y=488;
    this.speed=-3;
}
Land.init=function(img){
    Land.img=img;
    Land.imgWidth=Land.img.width;
    Land.imgHeight=Land.img.height;
    if(img){
        Land.isinit=true;
    }
}
extend(Land.prototype,{
    draw:function(){
        this.ctx.drawImage(Land.img,this.x,this.y);

    },
    updata:function(){
        this.x+=this.speed;
        if(this.x<-Land.imgWidth){
            this.x=this.x+Land.imgWidth*4;
        }
    }
});