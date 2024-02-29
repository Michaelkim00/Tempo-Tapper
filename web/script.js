let tapTimes = [];

function tap() {
    const currentTime = new Date();
    tapTimes.push(currentTime);

    if (tapTimes.length > 1) {
        const averageTimeInterval = tapTimes.slice(1).reduce((sum, time, index) => {
            const previousTime = tapTimes[index];
            return sum + (time - previousTime);
        }, 0) / (tapTimes.length - 1);

        const bpm = Math.round(60 / (averageTimeInterval / 1000));
        document.getElementById("bpmDisplay").textContent = `BPM: ${bpm}`;
    }
}

function reset() {
    tapTimes = [];
    document.getElementById("bpmDisplay").textContent = "BPM: ---";
}

function playRandomSong() {
    const songs = [
        { name: "Bops goin Brazy", bpm: 120 },
        // Add more songs as needed
    ];

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    // Set currentSongBPM for comparison in the tap function
    currentSongBPM = randomSong.bpm;

    // Play the selected song
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = `../songs/${randomSong.name}.mp3`; // Adjust the path here
    audioPlayer.play();
}