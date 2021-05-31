const instrumentMap = [
    { "Loopy": {
        "Code": "00",
        "Name": "PIANO 1" },
    "Standard": {
        "Code": "00",
        "Name": "Acoustic grand piano" }
    },
    { "Loopy": {
        "Code": "01",
        "Name": "HARPSICHORD 1" },
    "Standard": {
        "Code": "06",
        "Name": "Harpsichord" }
    },
    { "Loopy": {
        "Code": "02",
        "Name": "VIBRAPHONE 1" },
    "Standard": {
        "Code": "0B",
        "Name": "Vibraphone" }
    },
    { "Loopy": {
        "Code": "03",
        "Name": "DIST GUITAR 1" },
    "Standard": {
        "Code": "1E",
        "Name": "Distortion Guitar" }
    },
    { "Loopy": {
        "Code": "04",
        "Name": "SAXOPHONE" },
    "Standard": {
        "Code": "41",
        "Name": "Alto sax" }
    },
    { "Loopy": {
        "Code": "05",
        "Name": "SYNTH REED 1" },
    "Standard": {
        "Code": "40",
        "Name": "English horn" }
    },
    { "Loopy": {
        "Code": "06",
        "Name": "JAZZ ORGAN 1" },
    "Standard": {
        "Code": "11",
        "Name": "Percussive organ" }
    },
    { "Loopy": {
        "Code": "07",
        "Name": "SYNTH BASS 1" },
    "Standard": {
        "Code": "26",
        "Name": "Synth bass 1" }
    },
    { "Loopy": {
        "Code": "08",
        "Name": "CATHEDRAL" },
    "Standard": {
        "Code": "0E",
        "Name": "Tubular bells" }
    },
    { "Loopy": {
        "Code": "09",
        "Name": "STRINGS 1" },
    "Standard": {
        "Code": "29",
        "Name": "Viola" }
    },
    { "Loopy": {
        "Code": "0A",
        "Name": "PIANO 2" },
    "Standard": {
        "Code": "01",
        "Name": "Bright acoustic piano" }
    },
    { "Loopy": {
        "Code": "0B",
        "Name": "PIANO 3" },
    "Standard": {
        "Code": "03",
        "Name": "Honky tonk piano" }
    },
    { "Loopy": {
        "Code": "0C",
        "Name": "E.PIANO 1" },
    "Standard": {
        "Code": "04",
        "Name": "Electric piano 1" }
    },
    { "Loopy": {
        "Code": "0D",
        "Name": "E.PIANO 2" },
    "Standard": {
        "Code": "05",
        "Name": "Electric piano 2" }
    },
    { "Loopy": {
        "Code": "0E",
        "Name": "E.PIANO 3" },
    "Standard": {
        "Code": "02",
        "Name": "Electric grand piano" }
    },
    { "Loopy": {
        "Code": "0F",
        "Name": "E.PIANO 4" },
    "Standard": {
        "Code": "5A",
        "Name": "Polysynth" }
    },
    { "Loopy": {
        "Code": "10",
        "Name": "E.PIANO 5" },
    "Standard": {
        "Code": "63",
        "Name": "Atmosphere" }
    },
    { "Loopy": {
        "Code": "11",
        "Name": "STR PIANO" },
    "Standard": {
        "Code": "2D",
        "Name": "Pizzicato strings" }
    },
    { "Loopy": {
        "Code": "12",
        "Name": "FLUTE EP" },
    "Standard": {
        "Code": "4D",
        "Name": "Shakuhachi" }
    },
    { "Loopy": {
        "Code": "13",
        "Name": "BASS EP" },
    "Standard": {
        "Code": "21",
        "Name": "Fingered electric bass" }
    },
    { "Loopy": {
        "Code": "14",
        "Name": "HARPSICHORD 2" },
    "Standard": {
        "Code": "54",
        "Name": "Synth charang" }
    },
    { "Loopy": {
        "Code": "15",
        "Name": "HARPSICHORD 3" },
    "Standard": {
        "Code": "68",
        "Name": "Sitar" }
    },
    { "Loopy": {
        "Code": "16",
        "Name": "HARPSICHORD 4" },
    "Standard": {
        "Code": "6F",
        "Name": "Shanai" }
    },
    { "Loopy": {
        "Code": "17",
        "Name": "FUNKY CLAVI" },
    "Standard": {
        "Code": "10",
        "Name": "Hammond / drawbar organi" }
    },
    { "Loopy": {
        "Code": "18",
        "Name": "SYNTH CLAVI 1" },
    "Standard": {
        "Code": "40",
        "Name": "Soprano sax" }
    },
    { "Loopy": {
        "Code": "19",
        "Name": "SYNTH CLAVI 2" },
    "Standard": {
        "Code": "6A",
        "Name": "Shamisen" }
    },
    { "Loopy": {
        "Code": "1A",
        "Name": "HARPSI CLAVI" },
    "Standard": {
        "Code": "07",
        "Name": "Clavinet" }
    },
    { "Loopy": {
        "Code": "1B",
        "Name": "HARPSI GUITAR" },
    "Standard": {
        "Code": "0F",
        "Name": "Dulcimer" }
    },
    { "Loopy": {
        "Code": "1C",
        "Name": "CHOIR HPSCD" },
    "Standard": {
        "Code": "5B",
        "Name": "Space vox / choir" }
    },
    { "Loopy": {
        "Code": "1D",
        "Name": "STRING HPSCD" },
    "Standard": {
        "Code": "2C",
        "Name": "Tremolo strings" }
    },
    { "Loopy": {
        "Code": "1E",
        "Name": "MARIMBA 1" },
    "Standard": {
        "Code": "0C",
        "Name": "Marimba" }
    },
    { "Loopy": {
        "Code": "1F",
        "Name": "STEEL DRUM" },
    "Standard": {
        "Code": "72",
        "Name": "Steel drums" }
    },
    { "Loopy": {
        "Code": "20",
        "Name": "MARIMBA 2" },
    "Standard": {
        "Code": "09",
        "Name": "Glockenspiel" }
    },
    { "Loopy": {
        "Code": "21",
        "Name": "VIBRAPHONE 2" },
    "Standard": {
        "Code": "08",
        "Name": "Celesta" }
    },
    { "Loopy": {
        "Code": "22",
        "Name": "MUSIC BOX" },
    "Standard": {
        "Code": "0A",
        "Name": "Music box" }
    },
    { "Loopy": {
        "Code": "23",
        "Name": "XYLOPHONE" },
    "Standard": {
        "Code": "0D",
        "Name": "Xylophone" }
    },
    { "Loopy": {
        "Code": "24",
        "Name": "BELLS 1" },
    "Standard": {
        "Code": "6C",
        "Name": "Kalimba" }
    },
    { "Loopy": {
        "Code": "25",
        "Name": "TREE CHIME" },
    "Standard": {
        "Code": "70",
        "Name": "Tinkle bell" }
    },
    { "Loopy": {
        "Code": "26",
        "Name": "BELLS 2" },
    "Standard": {
        "Code": "71",
        "Name": "Agogo" }
    },
    { "Loopy": {
        "Code": "27",
        "Name": "PERCUSSION" },
    "Standard": {
        "Code": "76",
        "Name": "Synth drum" }
    },
    { "Loopy": {
        "Code": "28",
        "Name": "ACOUS GUITAR" },
    "Standard": {
        "Code": "18",
        "Name": "Nylon string acoustic guitar" }
    },
    { "Loopy": {
        "Code": "29",
        "Name": "JAZZ GUITAR" },
    "Standard": {
        "Code": "1A",
        "Name": "Jazz electric guitar" }
    },
    { "Loopy": {
        "Code": "2A",
        "Name": "MUTE GUITAR" },
    "Standard": {
        "Code": "1C",
        "Name": "Muted electric guitar" }
    },
    { "Loopy": {
        "Code": "2B",
        "Name": "12DTR GUITAR" },
    "Standard": {
        "Code": "19",
        "Name": "Steel string acoustic guitar" }
    },
    { "Loopy": {
        "Code": "2C",
        "Name": "HARP" },
    "Standard": {
        "Code": "46",
        "Name": "Orchestral strings / harp" }
    },
    { "Loopy": {
        "Code": "2D",
        "Name": "FEEDBACK" },
    "Standard": {
        "Code": "1F",
        "Name": "Guitar harmonics" }
    },
    { "Loopy": {
        "Code": "2E",
        "Name": "KOTO" },
    "Standard": {
        "Code": "6B",
        "Name": "Koto" }
    },
    { "Loopy": {
        "Code": "2F",
        "Name": "BANJO" },
    "Standard": {
        "Code": "69",
        "Name": "Banjo" }
    },
    { "Loopy": {
        "Code": "30",
        "Name": "STRING GUITAR" },
    "Standard": {
        "Code": "1B",
        "Name": "Clean electric guitar" }
    },
    { "Loopy": {
        "Code": "31",
        "Name": "DIST GUITAR 2" },
    "Standard": {
        "Code": "29",
        "Name": "Overdriven guitar" }
    },
    { "Loopy": {
        "Code": "32",
        "Name": "CLARINET" },
    "Standard": {
        "Code": "47",
        "Name": "Clarinet" }
    },
    { "Loopy": {
        "Code": "33",
        "Name": "OBOE" },
    "Standard": {
        "Code": "44",
        "Name": "Oboe" }
    },
    { "Loopy": {
        "Code": "34",
        "Name": "TRUMPET" },
    "Standard": {
        "Code": "38",
        "Name": "Trumpet" }
    },
    { "Loopy": {
        "Code": "35",
        "Name": "VIOLIN" },
    "Standard": {
        "Code": "28",
        "Name": "Violin" }
    },
    { "Loopy": {
        "Code": "36",
        "Name": "CELLO" },
    "Standard": {
        "Code": "2A",
        "Name": "Cello" }
    },
    { "Loopy": {
        "Code": "37",
        "Name": "CLARI LEAD" },
    "Standard": {
        "Code": "46",
        "Name": "Bassoon" }
    },
    { "Loopy": {
        "Code": "38",
        "Name": "HARMONICA" },
    "Standard": {
        "Code": "16",
        "Name": "Harmonica" }
    },
    { "Loopy": {
        "Code": "39",
        "Name": "TROMBONE" },
    "Standard": {
        "Code": "39",
        "Name": "Trombone" }
    },
    { "Loopy": {
        "Code": "3A",
        "Name": "BAGPIPE" },
    "Standard": {
        "Code": "6D",
        "Name": "Bagpipe" }
    },
    { "Loopy": {
        "Code": "3B",
        "Name": "CORNET" },
    "Standard": {
        "Code": "3C",
        "Name": "French horn" }
    },
    { "Loopy": {
        "Code": "3C",
        "Name": "SYNTH REED 2" },
    "Standard": {
        "Code": "42",
        "Name": "Tenor sax" }
    },
    { "Loopy": {
        "Code": "3D",
        "Name": "POP LEAD" },
    "Standard": {
        "Code": "57",
        "Name": "Synth brass and lead" }
    },
    { "Loopy": {
        "Code": "3E",
        "Name": "SYNTH LEAD 1" },
    "Standard": {
        "Code": "50",
        "Name": "Synth square wave" }
    },
    { "Loopy": {
        "Code": "3F",
        "Name": "SYNTH LEAD 2" },
    "Standard": {
        "Code": "51",
        "Name": "Synth saw wave" }
    },
    { "Loopy": {
        "Code": "40",
        "Name": "POWER LEAD" },
    "Standard": {
        "Code": "56",
        "Name": "Synth fifths saw" }
    },
    { "Loopy": {
        "Code": "41",
        "Name": "FLUTE" },
    "Standard": {
        "Code": "49",
        "Name": "Flute" }
    },
    { "Loopy": {
        "Code": "42",
        "Name": "WHISTLE" },
    "Standard": {
        "Code": "4E",
        "Name": "Whistle" }
    },
    { "Loopy": {
        "Code": "43",
        "Name": "RECORDER" },
    "Standard": {
        "Code": "4A",
        "Name": "Recorder" }
    },
    { "Loopy": {
        "Code": "44",
        "Name": "OCARINA" },
    "Standard": {
        "Code": "4F",
        "Name": "Ocarina" }
    },
    { "Loopy": {
        "Code": "45",
        "Name": "ACCORDION" },
    "Standard": {
        "Code": "15",
        "Name": "Accordion" }
    },
    { "Loopy": {
        "Code": "46",
        "Name": "JAZZ ORGAN 2" },
    "Standard": {
        "Code": "55",
        "Name": "Synth voice" }
    },
    { "Loopy": {
        "Code": "47",
        "Name": "JAZZ ORGAN 3" },
    "Standard": {
        "Code": "5D",
        "Name": "Metal pad" }
    },
    { "Loopy": {
        "Code": "48",
        "Name": "ELEC ORGAN" },
    "Standard": {
        "Code": "64",
        "Name": "Brightness" }
    },
    { "Loopy": {
        "Code": "49",
        "Name": "REED ORGAN" },
    "Standard": {
        "Code": "14",
        "Name": "Reed organ" }
    },
    { "Loopy": {
        "Code": "4A",
        "Name": "JUNK ORGAN" },
    "Standard": {
        "Code": "52",
        "Name": "Synth calliope" }
    },
    { "Loopy": {
        "Code": "4B",
        "Name": "STREET ORGAN" },
    "Standard": {
        "Code": "17",
        "Name": "Tango accordion" }
    },
    { "Loopy": {
        "Code": "4C",
        "Name": "PIPE ORGAN 1" },
    "Standard": {
        "Code": "13",
        "Name": "Church organ" }
    },
    { "Loopy": {
        "Code": "4D",
        "Name": "PIPE ORGAN 2" },
    "Standard": {
        "Code": "48",
        "Name": "Piccolo" }
    },
    { "Loopy": {
        "Code": "4E",
        "Name": "PIPE ORGAN 3" },
    "Standard": {
        "Code": "5C",
        "Name": "Bowed glass" }
    },
    { "Loopy": {
        "Code": "4F",
        "Name": "ROCK ORGAN" },
    "Standard": {
        "Code": "12",
        "Name": "Rock organ" }
    },
    { "Loopy": {
        "Code": "50",
        "Name": "WOOD BASS 1" },
    "Standard": {
        "Code": "20",
        "Name": "Acoustic bass" }
    },
    { "Loopy": {
        "Code": "51",
        "Name": "ELEC BASS" },
    "Standard": {
        "Code": "22",
        "Name": "Picked electric bass" }
    },
    { "Loopy": {
        "Code": "52",
        "Name": "SYNTH BASS 2" },
    "Standard": {
        "Code": "27",
        "Name": "Synth bass 2" }
    },
    { "Loopy": {
        "Code": "53",
        "Name": "ELEC BASS 2" },
    "Standard": {
        "Code": "24",
        "Name": "Slap bass 1" }
    },
    { "Loopy": {
        "Code": "54",
        "Name": "ELEC BASS 3" },
    "Standard": {
        "Code": "25",
        "Name": "Slap bass 2" }
    },
    { "Loopy": {
        "Code": "55",
        "Name": "BASS/PIANO" },
    "Standard": {
        "Code": "60",
        "Name": "Ice rain" }
    },
    { "Loopy": {
        "Code": "56",
        "Name": "BASS/ORGAN" },
    "Standard": {
        "Code": "53",
        "Name": "Synth chiff" }
    },
    { "Loopy": {
        "Code": "57",
        "Name": "BASS/BRASS" },
    "Standard": {
        "Code": "3D",
        "Name": "Brass ensemble" }
    },
    { "Loopy": {
        "Code": "58",
        "Name": "BASS/VIB" },
    "Standard": {
        "Code": "5F",
        "Name": "Sweep pad" }
    },
    { "Loopy": {
        "Code": "59",
        "Name": "BASS/GUITAR" },
    "Standard": {
        "Code": "23",
        "Name": "Fretless bass" }
    },
    { "Loopy": {
        "Code": "5A",
        "Name": "FANTASY 1" },
    "Standard": {
        "Code": "58",
        "Name": "Fantasia / new age" }
    },
    { "Loopy": {
        "Code": "5B",
        "Name": "FANTASY 2" },
    "Standard": {
        "Code": "59",
        "Name": "Warm pad" }
    },
    { "Loopy": {
        "Code": "5C",
        "Name": "SYNTH SOUND" },
    "Standard": {
        "Code": "62",
        "Name": "Crystal" }
    },
    { "Loopy": {
        "Code": "5D",
        "Name": "SYNTH ENS 1" },
    "Standard": {
        "Code": "32",
        "Name": "Synth strings 1" }
    },
    { "Loopy": {
        "Code": "5E",
        "Name": "SYNTH ENS 2" },
    "Standard": {
        "Code": "33",
        "Name": "Synth strings 2" }
    },
    { "Loopy": {
        "Code": "5F",
        "Name": "ALARM" },
    "Standard": {
        "Code": "7C",
        "Name": "Telephone ring" }
    },
    { "Loopy": {
        "Code": "60",
        "Name": "TWINKLE ECHO" },
    "Standard": {
        "Code": "66",
        "Name": "Echo drops / echoes" }
    },
    { "Loopy": {
        "Code": "61",
        "Name": "INSECT" },
    "Standard": {
        "Code": "7B",
        "Name": "Bird tweet" }
    },
    { "Loopy": {
        "Code": "62",
        "Name": "COMPUTER GAME" },
    "Standard": {
        "Code": "67",
        "Name": "Sci-fi" }
    },
    { "Loopy": {
        "Code": "63",
        "Name": "SPACE" },
    "Standard": {
        "Code": "5E",
        "Name": "Halo pad" }
    },
    { "Loopy": {
        "Code": "64",
        "Name": "STRINGS 2" },
    "Standard": {
        "Code": "2B",
        "Name": "Contrabass" }
    },
    { "Loopy": {
        "Code": "65",
        "Name": "STRINGS 3" },
    "Standard": {
        "Code": "6E",
        "Name": "Fiddle" }
    },
    { "Loopy": {
        "Code": "66",
        "Name": "CHOIR" },
    "Standard": {
        "Code": "34",
        "Name": "Choir aahs" }
    },
    { "Loopy": {
        "Code": "67",
        "Name": "BRASS 1" },
    "Standard": {
        "Code": "3A",
        "Name": "Tuba" }
    },
    { "Loopy": {
        "Code": "68",
        "Name": "BRASS 2" },
    "Standard": {
        "Code": "3B",
        "Name": "Muted trumpet" }
    },
    { "Loopy": {
        "Code": "69",
        "Name": "ENSEMBLE 1" },
    "Standard": {
        "Code": "30",
        "Name": "String ensemble 1" }
    },
    { "Loopy": {
        "Code": "6A",
        "Name": "ENSEMBLE 2" },
    "Standard": {
        "Code": "31",
        "Name": "String ensemble 2" }
    },
    { "Loopy": {
        "Code": "6B",
        "Name": "ENSEMBLE 3" },
    "Standard": {
        "Code": "35",
        "Name": "Voice oohs" }
    },
    { "Loopy": {
        "Code": "6C",
        "Name": "ENSEMBLE 4" },
    "Standard": {
        "Code": "36",
        "Name": "Synth choir / voices" }
    },
    { "Loopy": {
        "Code": "6D",
        "Name": "ENSEMBLE 5" },
    "Standard": {
        "Code": "37",
        "Name": "Orchestra hit" }
    }
]
