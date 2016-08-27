/**
 * Created by jing on 2016/7/6.
 */
function getImgObj(fn){
    var imgObjPath={
        birds:"./imgs/birds.png",
        land:"./imgs/land.png",
        pipeDown:"./imgs/pipeDown.png",
        pipeUp:"./imgs/pipeUp.png",
        sky:"./imgs/sky.png"
    };
    var imgObj={};
    var count=0;
    //图片路径
    for(var key in imgObjPath){
        var path=imgObjPath[key];
        var img=new Image();
        img.src=path;
        //每张图片加载完成
        img.addEventListener("load",function(){
            //当这五张图片加载完成后执行回掉函数
            count++;
            if(count>=5){
                fn(imgObj); //实参
            }
        });
        //imgObj存储的是图像对象
        imgObj[key]=img;
    }
}