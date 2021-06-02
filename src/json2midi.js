// Lookup table for standard MIDI counterparts to Loopy instrument codes
const instrumentMap = ["00", "06", "0B", "1E", "41", "40", "11", "26", "0E", "29", "01", "03", "04", "05", "02", "5A", "63", "2D", "4D", "21", "54", "68", "6F", "10", "40", "6A", "07", "0F", "5B", "2C", "0C", "72", "09", "08", "0A", "0D", "6C", "70", "71", "76", "18", "1A", "1C", "19", "46", "1F", "6B", "69", "1B", "29", "47", "44", "38", "28", "2A", "46", "16", "39", "6D", "3C", "42", "57", "50", "51", "56", "49", "4E", "4A", "4F", "15", "55", "5D", "64", "14", "52", "17", "13", "48", "5C", "12", "20", "22", "27", "24", "25", "60", "53", "3D", "5F", "23", "58", "59", "62", "32", "33", "7C", "66", "7B", "67", "5E", "2B", "6E", "34", "3A", "3B", "30", "31", "35", "37", "36"];

// Loopy music is timed on the CPU clock (2MHz)
const loopyCyclesPerSecond = 2000000;

// MIDI "end of track" message
const footer = "00FF2F00";

// TODO: Replace these once CLI is implemented
const { exit } = require('process');
var Midi = require('../sample/json/new.js');

// Sets up some default values in MIDI header
let header = {
    "chunkType": "4D546864",
    "chunkLength": "00000006",
    "chunkData": {
        "format": "0000",
        "tracks": "0001",
        "division": "00"
    }
}

// Sets up some default values in MIDI track
let track = {
    "chunkType": "4D54726B",
    "chunkLength": "00000000",
    "chunkData": ""
}

// Appends tempo value to MIDI header
header.chunkData.division = header.chunkData.division + getDivision(Midi.Timer);

// Converts Loopy events to MIDI events and appends them to MIDI track data
for (j = 0; j < (Midi.Events.length - 1); j++) {
    track.chunkData = track.chunkData + getFrame(Midi.Events[j]);

    // Adjusts instruments and note events to the MIDI standard
    function getFrame(event) {
        let frameHex = event.Delay + swapInstrument(event.Data[0]);
        for (k = 1; k < (event.Data.length); k++) {
            frameHex = frameHex + "00" + swapInstrument(event.Data[k]);
        }
        return frameHex;

        // Swaps Loopy instrument with a close approximation in MIDI standard
        // using lookup table (instrumentMap)
        function swapInstrument(notecommand) {
            if (notecommand[0] == "c") {
                oldinst = parseInt(notecommand.slice(2, 4), 16);
                newinst = instrumentMap[oldinst];
                newcommand = notecommand[0] + notecommand[1] + newinst;
                return newcommand;
            }
            else { return notecommand; }
        }
    }
}

// Counts bytes in music data and appends as checksum to track header
let trackByteCounter = ((track.chunkData.length / 2) + 4).toString(16);
let padded = "0000000" + trackByteCounter;
let amountToTrim = padded.length - 8;
track.chunkLength = padded.substr(amountToTrim, 8);

// Prints MIDI as a hex string
// TODO: Replace this with a file export
let midiHexString = header.chunkType + header.chunkLength + header.chunkData.format + header.chunkData.tracks + header.chunkData.division + track.chunkType + track.chunkLength + track.chunkData + footer;
console.log(midiHexString);

// Translates Loopy timing into ticks per quarter-note
function getDivision(timerHex) {
    timer = parseInt(timerHex, 16);
    division = Math.round(loopyCyclesPerSecond / (2 * timer));

    // Reports an error to the user if tempo is 0 or
    // wildly out of bounds
    if (division < 1 || division > 255) {
        console.log(`Error: Tempo is out of bounds. Quitting...`);
        exit(1);
    }

    // Otherwise, returns tempo as a hex string
    else { return division.toString(16); }
}