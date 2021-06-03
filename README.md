# LoopyMID
These command-line tools will allow you to convert files between standard MIDI files and the proprietary MIDI-like audio format of the Casio Loopy game console. These tools could be useful for those who are interested in:
 - Preserving unarchived VGM (video game music) files,
 - Creating new music to play on the Casio Loopy using your existing MIDI workflow, or
 - Keeping the memory of the Casio Loopy alive

Code is written in Node.js by [hxlnt (Rachel Simone Weil)](https://github.com/hxlnt). This codebase makes no network calls and contains no third-party dependencies or installation requirements outside of [Node.js](https://nodejs.org/en/).


## Usage

> **Note** The usage instructions below do not yet work, as this codebase is still in progress.

### Convert Loopy binary to MIDI
```node loopymid.js --binaryFile "path/to/loopy.bin" [-debug --instFile "path/to/inst.bin" --outputFile "path/to/loopy.mid" --format 0]```
 - `--binaryFile` specifies the binary containing Loopy music data.
 - `-debug` optionally exports relevant MIDI data as a JSON object. This may be useful for debugging.
 - `--instFile` optionally allows you to pass a second file that contains instrument setup data if the main file does not already contain it. This file is usually around 16 bytes.
 - `--outputFile` optionally specifies where the MIDI file should be output; the default is the `loopymid` root folder.
 - `--format` optionally allows you to select the MIDI Format 0 (`0`), Format 1 (`1`), or Format 2 (`2`) files. Presently, only Format 0 is supported, so this flag is currently ignored.
 
### Convert Loopy binary to MIDI
```node loopymid.js --midiFile "path/to/loopy.mid" [-debug --outputFile "path/to/loopy.bin"]```
 - `--midiFile` specifies the MIDI file to be converted.
 - `-debug` optionally exports relevant MIDI data as a JSON object. This may be useful for debugging.
 - `--outputFile` optionally specifies where the Loopy binary file should be output; the default is the `loopymid` root folder.

## Current limitations, known issues, and to-dos
1. Only supports most common MIDI control codes.
2. Only supports [Format 0](http://personal.kent.edu/~sbirch/Music_Production/MP-II/MIDI/midi_file_format.htm) MIDI files.
3. Instrument mapping has not been compared against hardware samples.
4. No tests and no handling of invalid MIDI files.
5. Command-line usage not yet implemented.

## Thanks
 - [Phil Bennett](https://github.com/philipjbennett/)
