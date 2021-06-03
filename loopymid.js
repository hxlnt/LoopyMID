const path = require('path');
const Loopy2Mid = require('./src/loopy2mid');
//const Mid2Loopy = require('./src/mid2loopy');
let binaryInputFile = "";
let midiInputFile = "";
let instFile = "";
let outputFile = "";
let format = "";

// Sets debug flag if -debug is passed
const debugFlag = process.argv.indexOf('-debug') > -1;

// Sets input file
if (process.argv.indexOf('--binaryFile') > -1) {
    binaryInputFile = path.resolve(process.argv[process.argv.indexOf('--binaryFile') + 1]); }
else if (process.argv.indexOf('--midiFile') > -1) {
    midiInputFile = path.resolve(process.argv[process.argv.indexOf('--midiFile') + 1]); }
else { 
    console.log(`Error: Did not specify input file.`); 
    process.exit(1); 
}

// Sets instrument definition file (optional)
if (process.argv.indexOf('--instFile') > -1) {
    instFile = path.resolve(process.argv[process.argv.indexOf('--instFile') + 1]); 
}

// Sets output file
// If not specified, output file will be in same path as input file
// with extension .mid (for MIDI) or .bin (for Loopy binary) added.
if (process.argv.indexOf('--outputFile') > -1) {
    if (binaryInputFile != "") { 
        outputFile = path.resolve(process.argv[process.argv.indexOf('--outputFile') + 1]); 
    }
    else { outputFile = path.resolve(process.argv[process.argv.indexOf('--outputFile') + 1]); }
}
else {
    if (binaryInputFile != "") { outputFile = path.join(path.dirname(binaryInputFile), path.basename(binaryInputFile) + ".mid"); }
    else { outputFile = path.join(path.dirname(binaryInputFile), path.basename(binaryInputFile) + ".bin"); }
}

// Sets format
// Note: Only format 0 is currently supported
if (process.argv.indexOf('--format') > -1) {
    format = process.argv[process.argv.indexOf('--binaryInputFile') + 1];
    if (format != "0") { 
        console.log(`Error: Only Format 0 MIDI files are currently supported.`);
        process.exit(1);
    }
}
else { format = "0"; }

// Converts files
if (binaryInputFile != "") { 
    Loopy2Mid.convert(binaryInputFile, debugFlag, instFile, outputFile, format); 
} 
    else { Mid2Loopy.convert(midiInputFile, debugFlag, outputFile); }