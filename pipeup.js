/**
 * Created by jing on 2016/7/7.
 */



function PipeUp(x){
    if(!PipeUp.isinit){
        throw "请先初始化PipeUp类!";
    }
    this.x=x||0;
    this.y=100;
    this.height=0;
    this.speed=-2;
    this.speedPlus=-0.5;
}
PipeUp.init=function(img){
    PipeUp.img=img;
    PipeUp.imgWidth=PipeUp.img.width;
    PipeUp.imgHeight=PipeUp.img.height;
    if(img){
        PipeUp.isinit=true;
    }
}
extend(PipeUp.prototype,{
    draw:function(){

        ctx.drawImage(PipeUp.img,this.x,this.y,PipeUp.imgWidth*2,this.height);
        //ctx.translate(200,0);
        //ctx.drawImage(PipeDown.img,this.x,this.y,PipeDown.imgWidth*2,this.height);
    },
    updata:function(){
        this.x+=this.speed;

        if(!this.height){
            this.height=parseInt((Math.random()*160)+100);
        }
        this.y=600-this.height;
        if(this.x<=-900){
            //this.x=this.x+PipeDown.imgWidth*10;
            this.x=900;
        }
    }
});