//https://teachablemachine.withgoogle.com/models/i9ORyjagE/
Webcam.set({
    width: 350,
    height: 270,
    image_format: "jpeg",
    jpeg_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src ="'+data_uri+'">';
    });
}

