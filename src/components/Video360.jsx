import "aframe";

AFRAME.registerComponent("hide-on-play", {
  schema: {
    type: "selector",
  },
  init: function () {
    this.onPlaying = this.onPlaying.bind(this);
    this.onPause = this.onPause.bind(this);
    this.el.object3D.visible = !this.data.playing;
  },
  play: function () {
    if (this.data) {
      this.data.addEventListener("playing", this.onPlaying);
      this.data.addEventListener("pause", this.onPause);
    }
  },
  pause: function () {
    if (this.data) {
      this.data.removeEventListener("playing", this.onPlaying);
      this.data.removeEventListener("pause", this.onPause);
    }
  },
  onPlaying: function (evt) {
    this.el.object3D.visible = false;
  },
  onPause: function (evt) {
    this.el.object3D.visible = true;
  },
});

AFRAME.registerComponent("play-on-click", {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener("click", this.onClick);
  },
  pause: function () {
    window.removeEventListener("click", this.onClick);
  },
  onClick: function (evt) {
    var videoEl = this.el.getAttribute("material").src;
    if (!videoEl) {
      return;
    }
    this.el.object3D.visible = true;
    videoEl.play();
  },
});

const Video360 = () => {
  return (
    <div className="w-full h-full rounded-lg rounded-large">
      <a-scene>
        <a-assets>
          <video
            id="video"
            loop
            crossOrigin="anonymous"
            playsinline
            webkit-playsinline
            src="src/assets/Red Bull F1 VR _ 360° Video Experience.mp4"
          ></video>
        </a-assets>
        <a-videosphere
          rotation="0 -180 0"
          src="#video"
          play-on-click
        ></a-videosphere>
      </a-scene>
    </div>
  );
};

export default Video360;
