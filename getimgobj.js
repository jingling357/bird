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
    //ͼƬ·��
    for(var key in imgObjPath){
        var path=imgObjPath[key];
        var img=new Image();
        img.src=path;
        //ÿ��ͼƬ�������
        img.addEventListener("load",function(){
            //��������ͼƬ������ɺ�ִ�лص�����
            count++;
            if(count>=5){
                fn(imgObj); //ʵ��
            }
        });
        //imgObj�洢����ͼ�����
        imgObj[key]=img;
    }
}