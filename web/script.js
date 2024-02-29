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