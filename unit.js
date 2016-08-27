/**
 * Created by jing on 2016/7/6.
 */
function angle(angle){
    return Math.PI/180*angle;
}
function extend(obj1,obj2){
    for(var k in obj2){
        obj1[k]=obj2[k];
    }
}