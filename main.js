function start() {
    navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json",modelready)
} function modelready(){
    console.log("model is ready")
    classifier.classify (gotresult)
}
function gotresult (error,results){
    if (error) {
console.log(error)     
    } else {
     console.log(results)
     random_number_r=Math.floor(Math.random()*255)+1; 
    random_number_g=Math.floor(Math.random()*255)+1; 
    random_number_b=Math.floor(Math.random()*255)+1;
   document.getElementById("result_label").innerHTML='I can hear -'+results[0].label;
   document.getElementById("result_confidence").innerHTML='Accuracy -'+(results[0].confidence*100).toFixed(2)+"%";
img=document.getElementById('alien1')
img1=document.getElementById('alien2')
img2=document.getElementById('alien3')
img3=document.getElementById('alien4')
if(results[0].label=="Clap"){
    img.src= 'alines-01.gif'
    img1.src= 'alines-02.png'
    img2.src= 'alines-03.png'
    img3.src= 'alines-04.png'
}
 else if(results[0].label=="Bell"){
    img.src= 'alines-01.png'
    img1.src= 'alines-02.gif'
    img2.src= 'alines-03.png'
    img3.src= 'alines-04.png'
}
 else if(results[0].label=="Snapping"){
    img.src= 'alines-01.png'
    img1.src= 'alines-02.png'
    img2.src= 'alines-03.gif'
    img3.src= 'alines-04.png'
}
else{


    img.src= 'alines-01.png'
    img1.src= 'alines-02.png'
    img2.src= 'alines-03.png'
    img3.src= 'alines-04.gif'
}


} 
}