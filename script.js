
var his = ""
function dis(a){
    document.getElementById("result").value +=a
    return a
}
function clr(){
     document.getElementById("result").value =""
}
function solve(){
    let x = document.getElementById("result").value
    his +="-->"+x+"\n"
    let y =eval(x)
    his +="="+y+"\n"
    document.getElementById("result").value=y
    return y
}
function history(){
    document.getElementById("result").value=his

}
function bk(){
    let x = document.getElementById("result").value
    let y = ""
    for(i=0;i<x.length-1;i++){
        y+=x[i]
    }
    document.getElementById("result").value =y
}
document.getElementById("result").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if(document.getElementById("result").value!=""){
            solve(); 
        }
       
    }})