/**
 * Created by jing on 2016/7/7.
 */


function PipeDown(x){
    if(!PipeDown.isinit){
        throw "请先初始化PipeUp类!";
    }
    this.x=x||0;
    this.y=0;
    this.height=0;
    this.speed=-2;
    this.speedPlus=-0.5;
}
PipeDown.init=function(img){
    PipeDown.img=img;
    PipeDown.imgWidth=PipeDown.img.width;
    PipeDown.imgHeight=PipeDown.img.height;
    if(img){
        PipeDown.isinit=true;
    }
}
extend(PipeDown.prototype,{
    draw:function(){

        ctx.drawImage(PipeDown.img,this.x,this.y,PipeDown.imgWidth*2,this.height);
        //ctx.translate(200,0);
        //ctx.drawImage(PipeDown.img,this.x,this.y,PipeDown.imgWidth*2,this.height);
    },
    updata:function(){
        this.x+=this.speed;
        if(!this.height){
            this.height=parseInt((Math.random()*160)+100);
        }
        PipeDown.imgHeight+=this.y;
        if(this.x<=-900){
            //this.x=this.x+PipeDown.imgWidth*10;
            this.x=900;
        }
    }
});