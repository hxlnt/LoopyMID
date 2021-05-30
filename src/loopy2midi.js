const fs = require('fs');
var Midi = {}
var tempstore;

fs.stat('../sample/input/e0b2cda.bin', (status, stats) => {
    if (status) {
        console.log(status.message);
        return;
    }
    else { tempstore = Buffer.alloc(stats.size); }
})

fs.open('../sample/input/e0b2cda.bin', 'r', (status, fd) => {
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
            else {
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
                    for (i = programCounter; i < templength + programCounter;) {
                        if (tempstore[i] == undefined) { break; }
                        if (tempstore[i] >= 0xC0) {
                            byte1 = tempstore[i].toString(16);
                            byte2 = tempstore[i + 1].toString(16);
                            if (byte1 == "0") { byte1 = "00"; }
                            if (byte2 == "0") { byte2 = "00"; }
                            tempObj.Data.push(byte1 + byte2);

                            datalength = 2;
                        }
                        else {
                            byte1 = tempstore[i].toString(16);
                            byte2 = tempstore[i + 1].toString(16);
                            byte3 = tempstore[i + 2].toString(16);
                            if (byte1 == "0") { byte1 = "00"; }
                            if (byte2 == "0") { byte2 = "00"; }
                            if (byte3 == "0") { byte3 = "00"; }
                            tempObj.Data.push(byte1 + byte2 + byte3);
                            datalength = 3;
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
                Midi.Events[Midi.Events.length-1] = { "EOF": footer };
                console.log(footer);
            }

            fs.writeFile('../sample/json/e0b2cda.json', JSON.stringify(Midi), status => {
                if (status) {
                    console.error(status.message);
                    return;
                }
                else { console.log(`JSON file written!`); }
            });
        });
    }
});
