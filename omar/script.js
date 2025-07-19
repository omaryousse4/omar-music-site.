// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Back button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elements for Song Detail Page (won't be directly used when clicking song, but still loaded)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Play button on detail page

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Add this
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Add this

// App State
let songs = [
  {
    id: 1,
    title: "عارف حبيبي",
    artist: "عمرو دياب",
    album: "بناديك تعالي",
    albumArtUrl: "https://i.ytimg.com/vi/114eVkzRdzo/maxresdefault.jpg", // صورة الألبوم
    audioSrc: "audio/aref-habibi.mp3",
    videoBgSrc: "videos/habibi.mp4", 
   lyrics: [
  { time: 16, text: "عارف حبيبي اللي زود في الخلاف" },
  { time: 24, text: "بقيت بلاقي بنا مليون إختلاف" },
  { time: 31, text: "أنا كل ما أعمل حاجة بنا تقربك" },
  { time: 39, text: "ما بقيتش ألاقي حاجة واحدة بتعجبك" },
  { time: 46, text: "واما أسألك بتحبني وتقول لي آه" },
  { time: 54, text: "ما بقيتش قادر أصدقك وبقيت بخاف" },
  { time: 76, text: "نفس الإثنين اللي اتفقوا ما بنهم وعد" },
  { time: 84, text: "خايف بإيديهم يتفارقم ويموتوا بعض" },

  { time: 92, text: "لا بقيت تسمعني وتفهمني ولا حاسس بيّ" },
  { time: 99, text: "وكأني عدوك وسعادتك في عذابك ليّ" },
  { time: 107, text: "واما أسألك بتحبني وتقول لي آه" },
  { time: 114, text: "ما بقيتش قادر أصدقك وبقيت بخاف" },

  { time: 122, text: "هو احنا مالنا وإيه جرا لنا وليه كده؟" },
  { time: 129, text: "هو احنا مالنا وليه وصلنا لكل ده؟" },
  { time: 135, text: "هو احنا مالنا وإيه جرا لنا وليه كده؟" },
  { time: 167, text: "هو احنا مالنا وليه وصلنا لكل ده؟" },

  { time: 174, text: "هو احنا مالنا وإيه جرا لنا وليه كده؟" },
  { time: 182, text: "هو احنا مالنا وليه وصلنا لكل ده؟" },
  { time: 189, text: "هو احنا مالنا وإيه جرا لنا وليه كده؟" },
  { time: 201, text: "هو احنا مالنا وليه وصلنا لكل ده؟" }
]

  },


   // {
     //   id: 2,
       // title: "Perfect",
        //artist: "Ed Sheeran",
        //album: "÷ (Divide)",
        //albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        //audioSrc: "audio/Ed Sheeran - Perfect.mp3",
        //videoBgSrc: "videos/perfect_bg.mp4", // Special video background path for this song
        // Lyrics with timestamp in seconds
        //lyrics: [
          //  { time: 2.9 , text: "I found a love for me" },
            //{ time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
            //{ time: 18, text: "I found a girl, beautiful and sweet" },
            //{ time: 25, text: "I never knew you were the someone waiting for me" },
            //{ time: 32, text: "'Cause we were just kids when we fell in love" },
            //{ time: 36.7, text: "Not knowin' what it was" },
            //{ time: 40.5, text: "I will not give you up this time" },
            //{ time: 48, text: "But, darlin', just kiss me slow" },
            //{ time: 51.6, text: "Your heart is all I own" },
            //{ time: 55.9, text: "And in your eyes, you're holdin' mine" },
            //{ time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            //{ time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            //{ time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            //{ time: 88, text: "But you heard it, darling, you look perfect tonight" }
        //]
    //},    
    //{
        //id: 3,
        //title: "Unconditionally",
        //artist: "Katy Perry",
        //album: "Prism",
        //albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        //audioSrc: "audio/Katy Perry - Unconditionally.mp3",
        //videoBgSrc: "videos/unconditionally_bg.mp4", // Special video background path for this song
        // Lyrics with timestamp in seconds
        //lyrics: [

       // ]
    //}
];



// App State Variables
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation Functions ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Make sure detail page is hidden
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Hide video background
    backgroundVideo.pause(); // Pause video background
    backgroundVideo.src = ""; // Clear video src
    backgroundVideo.load();
    pauseTrack(); // Pause music when returning to home
}

// Function to show song detail page (maintained but not called from song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Pause video background
    backgroundVideo.src = ""; // Clear video src
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Show video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Clear src if no special video
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">No songs available.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Important Change Here ---
        // When song item is clicked, directly load & play song then show player page
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Go directly to music player page
        });

        // Event listener for hover
        listItem.addEventListener('mouseenter', () => {
            // Only activate video background if we're on home page
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Add class for body background color
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Hide video background only if we're on home page
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Pause video when mouse leaves
                backgroundVideo.src = ""; // Clear src so it doesn't play in background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Remove body background color class
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics not available.</p>";
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Call renderLyrics function
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// New function to render lyrics
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Clear lyrics container
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lyrics not available for this song.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Store timestamp in data-attribute
        span.classList.add('lyric-line'); // Add class for styling
        lyricsContainer.appendChild(span);
    });
}

function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("No songs to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error during play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Continue with more functions - prevTrack, nextTrack, etc.
function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update video background
}

// Audio event listeners and remaining functionality
audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Lyrics highlight logic ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lyrics only if highlighted line is not visible ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Event Listeners
playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener for speed slider
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});

// Button event listeners
playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});

playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

// Navigation button event listeners
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // From detail page to home
backToHomeBtn.addEventListener('click', showHomePage); // From player page to home

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Add log for initialization
    console.log("Songs array length:", songs.length); // Check number of songs
    console.log("songListElement:", songListElement); // Check if songListElement is found

    renderSongList(); // This renders the song list
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // This will display if songs array is empty
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Music";
        playerTrackTitle.textContent = "No Songs";
        playerTrackArtist.textContent = "Add songs";
        lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Set initial speed
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Update speed display
    updatePlayPauseIcon();
    showHomePage(); // Start from song list page
    console.log("Initialization complete."); // Log completion of initialization
}

init();