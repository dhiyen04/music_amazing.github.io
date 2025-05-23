const songs = [
  {
    title: "SoundHelix Song 1",
    file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://cdn.pixabay.com/photo/2020/03/09/16/27/headphones-4916287_1280.jpg"
  },
  {
    title: "SoundHelix Song 2",
    file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://cdn.pixabay.com/photo/2016/11/29/04/17/adult-1868750_1280.jpg"
  },
  {
    title: "SoundHelix Song 3",
    file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://cdn.pixabay.com/photo/2016/11/23/15/38/auriculares-1851905_1280.jpg"
  }
];


let current = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");

function loadSong(index) {
  title.textContent = songs[index].title;
  audio.src = "music/" + songs[index].file;
  cover.src = "images/" + songs[index].cover;
}

function togglePlay() {
  if (audio.paused) audio.play();
  else audio.pause();
}

function nextSong() {
  current = (current + 1) % songs.length;
  loadSong(current);
  audio.play();
}

function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  audio.play();
}

audio.ontimeupdate = () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
};

loadSong(current);
