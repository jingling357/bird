/**
 * Created by jing on 2016/7/8.
 */



function Pipe(cvs,ctx,x){
    if(!Pipe){
        throw "请先初始化PipeUp类!";
    }
    this.cvs=cvs;
    this.ctx=ctx;
    this.x=x;
    this.width=Pipe.imgWidth;
    this.height=parseInt((Math.random()*150)+80);
    this.downy=this.height-Pipe.imgHeight;
    this.upy=this.height+130;

    this.speed=-2;
    this.speedPlus=-0.5;
}
Pipe.init=function(pipeDown,pipeUp){
    Pipe.pipedown=pipeDown;
    Pipe.pipeup=pipeUp;
    Pipe.imgWidth=pipeDown.width;
    Pipe.imgHeight=pipeDown.height;
    if(pipeDown&&pipeUp){
        Pipe.isinit=true;
    }
}
extend(Pipe.prototype,{
    draw:function(){
        this.ctx.drawImage(Pipe.pipedown,this.x,this.downy,Pipe.imgWidth,Pipe.imgHeight);
        this.ctx.drawImage(Pipe.pipeup,this.x,this.upy,Pipe.imgWidth,Pipe.imgHeight);
        this.drawpath();
    },
    drawpath:function(){
        //ctx.strokeStyle="#4EC0CA";
        this.ctx.rect(this.x,this.downy,Pipe.imgWidth,Pipe.imgHeight);
        this.ctx.rect(this.x,this.upy,Pipe.imgWidth,Pipe.imgHeight);
        //ctx.stroke();
    },
    updata:function(){
        this.x+=this.speed;
        if(this.x<-this.width){
            this.x=this.x+Pipe.imgWidth*3*6;
            this.height=parseInt((Math.random()*160)+80);
            this.downy=this.height-Pipe.imgHeight;
            this.upy=this.height+130;
        }
    }
});