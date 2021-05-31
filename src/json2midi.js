const { exit } = require('process');
var Midi = require('../sample/json/e0b2cda.js')
console.log(Midi.Timer);

const loopyCyclesPerSecond = 2000000;
const footer = "00FF2F00";
var trackByteCounter;
let header = {
    "chunkType": "4D546864",
    "chunkLength": "00000006",
    "chunkData":
        { "format": "0000",
        "tracks": "0001",
        "division": "00"
        }
    }

let track = {
    "chunkType": "4D54726B",
    "chunkLength": "00000000",
    "chunkData": ""
}

header.chunkData.division = header.chunkData.division + getDivision(Midi.Timer);


for (j=0; j<(Midi.Events.length - 1); j++) {
    track.chunkData = track.chunkData + getFrame(Midi.Events[j]);
}


trackByteCounter = ((track.chunkData.length / 2) + 4).toString(16);
console.log(trackByteCounter);
padded = "0000000" + trackByteCounter;
amountToTrim = padded.length - 8;
track.chunkLength = padded.substr(amountToTrim,8);
//track.chunkLength = ("0000000" + trackByteCounter).substr(-1,8);
console.log(track.chunkLength);
megaString = header.chunkType + header.chunkLength + header.chunkData.format + header.chunkData.tracks + header.chunkData.division + track.chunkType + track.chunkLength + track.chunkData + footer;

console.log(megaString);

function getFrame(event){
    let frameHex = event.Delay + event.Data[0];
    for (k=1; k<(event.Data.length - 1); k++) {
        frameHex = frameHex + "00" + event.Data[k];
    }
    return frameHex;
}

function getDivision(timerHex){
    timer = parseInt(timerHex, 16);
    division = Math.round(loopyCyclesPerSecond/(2 * timer));
    if (division < 1 || division > 255) { console.log(`Something went wrong with calculating the timing. Quitting...`);
        exit(1);
        }
    else { return division.toString(16); }
    }

