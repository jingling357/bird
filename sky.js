/**
 * Created by jing on 2016/7/6.
 */

function Sky(cvs,ctx,x){
    if(!Sky.isinit){
        throw "请先初始化Bird类!";
    }
    this.cvs=cvs;
    this.ctx=ctx;
    this.x=x||0;
    this.y=0;
    this.speed=-3;
}
Sky.init=function(img){
    Sky.img=img;
    Sky.imgWidth=Sky.img.width;
    Sky.imgHeight=Sky.img.height;
    if(img){
        Sky.isinit=true;
    }
}
extend(Sky.prototype,{
    draw:function(){
        this.ctx.drawImage(Sky.img,this.x,this.y);

    },
    updata:function(){
        this.x+=this.speed;
        if(this.x<=-800){
            this.x=this.x+Sky.imgWidth*2;
            //this.x=Sky.imgWidth;
        }
    }
});