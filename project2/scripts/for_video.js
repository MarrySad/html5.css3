var video = document.querySelector("#video"),
    button = document.querySelector("#video-btn");

button.addEventListener("click", function () {
    video.play();
    video.setAttribute("controls", "controls");
}, false);

$(".video_presentation-layer-play_btn").click(function () {
    $(".video_presentation-layer").addClass('video_presentation-layer-play_btn--hide');
});
