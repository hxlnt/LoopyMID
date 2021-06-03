function convert(binaryInputFile, debugFlag, instFile, outputFile, format) {

    const fs = require('fs');
    var Midi = {}
    var tempstore;

    // Reads binary file, exports MIDI and optional debug file
    fs.stat(binaryInputFile, (status, stats) => {
        if (status) {
            console.log(status.message);
            return;
        }
        else { tempstore = Buffer.alloc(stats.size); }
    });
    fs.open(binaryInputFile, 'r', (status, fd) => {
        if (status) {
            console.log(status.message);
            return;
        }
        else {
            fs.read(fd, buffer = tempstore, 0, length = tempstore.byteLength, position = 0, (status, num) => {
                if (status) {
                    console.log(status.message);
                    return;
                }
                else { doMidiStuff(); }

                if (debugFlag) {
                    fs.writeFile(outputFile + '.json', JSON.stringify(Midi), status => {
                        if (status) {
                            console.error(status.message);
                            return;
                        }
                        else { console.log(`JSON file written!`); }
                    });
                }
            });
        }
    });

    function doMidiStuff() {
        Midi.Timer = tempstore.toString('hex', 0, 2);
        Midi.Address = tempstore.toString('hex', 2, 4);
        Midi.Events = [];
        var tempObj = {};
        let programCounter = 0x04;
        let eventCounter = 0;
        let templength = 0;
        while (programCounter < tempstore.byteLength) {
            let tempdelay = tempstore.toString('hex', programCounter, programCounter + 1);
            tempObj.Delay = tempdelay;
            tempObj.Data = [];
            programCounter++;
            templength = tempstore[programCounter];
            programCounter++;
            var datalength;
            let controlcode = "";
            for (i = programCounter; i < templength + programCounter;) {

                if (tempstore[i] == undefined) { break; }

                else if (tempstore[i] >= 0xC0) {
                    bytestring = adjust(tempstore[i]) + adjust(tempstore[i + 1]);
                    tempObj.Data.push(bytestring);
                    datalength = 2;
                }

                else if (tempstore[i] >= 0x80) {
                    controlcode = adjust(tempstore[i]);
                    bytestring = controlcode + adjust(tempstore[i + 1]) + adjust(tempstore[i + 2]);
                    tempObj.Data.push(bytestring);
                    datalength = 3;
                }
                else {
                    bytestring = controlcode + adjust(tempstore[i]) + adjust(tempstore[i + 1]);
                    tempObj.Data.push(bytestring);
                    datalength = 2;
                }
                function adjust(int) {
                    string = int.toString(16);
                    if (string == "0") { return "00" } else { return string }
                }
                i = i + datalength;
            }
            Midi.Events[eventCounter] = JSON.parse(JSON.stringify(tempObj));
            programCounter = templength + programCounter;
            eventCounter++;
        }
        let footerOffset = programCounter - templength - 2;
        console.log(footerOffset);
        let footer = tempstore.toString('hex', footerOffset, tempstore.byteLength);
        Midi.Events[Midi.Events.length - 1] = { "EOF": footer };
        console.log(footer);
    }
}

module.exports.convert = convert;