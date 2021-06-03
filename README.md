# LoopyMID
This command-line tool allows you to convert the proprietary MIDI-like audio format of the Casio Loopy game console to standard MIDI. Support for the reverse conversion of MIDI to Loopy format is planned. This tool could be useful for those who are interested in:
 - Preserving unarchived VGM (video game music) files,
 - Creating new music to play on the Casio Loopy using your existing MIDI workflow, or
 - Keeping the memory of the Casio Loopy alive

## System requirements
 - [Node.js](https://nodejs.org/)

## Usage
```node loopymid.js --binaryFile "path/to/loopy.bin" [-debug] [--outputFile "path/to/loopy.mid"]```
 - `--binaryFile` specifies the binary containing Loopy music data.
 - `-debug` optionally exports relevant MIDI data as a JSON object. This may be useful for debugging.
 - `--outputFile` optionally specifies a custom path and file name for the MIDI file output.

## Planned features
 - Support for passing separate instrument header when Loopy binary does not already contain it
 - Ability to convert MIDI to Loopy binary
 - MIDI soundfont based on Loopy sound data for more accurate instruments

## Additional information
 - This codebase makes no network calls and requires no installation of dependencies (*e.g.,* via `npm install`)
 - The Loopy-to-MIDI conversion substitutes non-standard Loopy instrument codes for approximations in General MIDI as illustrated in `src\instrumentMap.js`
 - Code written by self-proclaimed Loopy Babe [hxlnt (Rachel Simone Weil)](https://github.com/hxlnt)

## Thanks
 - [Phil Bennett](https://github.com/philipjbennett/)
