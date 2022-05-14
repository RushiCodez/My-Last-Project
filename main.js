prediction_1 = ""
prediction_2 = ""

Webcam.set({
width : 350,
height : 300,
image_format : 'png',
png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';


});
}
console.log("m15.version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/G91a2nqRf/model.json', modelLoaded);

function modelLoaded(){
console.log("Model loaded!");

}

function speak(){
var synth = window.speechSynthesis;
speak_data1 = "The first prediction is" + prediction_1;
speak_data2 = "And the second prediciton is" + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
synth.speak(utterthis);
}

function check(){
img = document.getElementById("captured_image");
classifier.classify(img, gotresult);
}

function gotresult(error, results){
if(error){
console.error(error);

} else{
    console.log(results);
    document.getElementById("result_emotion_name_1").innerHTML = results[0].label;
    document.getElementById("result_emotion_name_2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(result[0].label == "Happy"){
    document.getElementById("update_emoji_1").innerHTML = "&#128522;";
    }
    if(result[0].label == "Sad"){
        document.getElementById("update_emoji_1").innerHTML = "&#128532;";
        }
    if(result[0].label == "Angry"){
            document.getElementById("update_emoji_1").innerHTML = "&#128548;";
            }
    if(result[1].label == "Happy"){
                document.getElementById("update_emoji_2").innerHTML = "&#128522;";
                }
    if(result[1].label == "Sad"){
                    document.getElementById("update_emoji_2").innerHTML = "&#128532;";
                    }
    if(result[1].label == "Angry"){
                    document.getElementById("update_emoji_2").innerHTML = "&#128548;";
                        }
}

}



