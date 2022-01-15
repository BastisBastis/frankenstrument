import Frankenstrument from "./frankenstrument"

import saxA3 from "../assets/instruments/saxophone/saxophone_A3_15_forte_normal.mp3"
import saxAs3 from "../assets/instruments/saxophone/saxophone_As3_15_forte_normal.mp3"
import saxB3 from "../assets/instruments/saxophone/saxophone_B3_15_forte_normal.mp3"
import saxC4 from "../assets/instruments/saxophone/saxophone_C4_15_forte_normal.mp3"
import saxCs4 from "../assets/instruments/saxophone/saxophone_Cs4_15_forte_normal.mp3"
import saxD4 from "../assets/instruments/saxophone/saxophone_D4_15_forte_normal.mp3"

import trbA3 from "../assets/instruments/trombone/trombone_A3_15_forte_normal.mp3"
import trbAs3 from "../assets/instruments/trombone/trombone_As3_15_forte_normal.mp3"
import trbB3 from "../assets/instruments/trombone/trombone_B3_15_forte_normal.mp3"
import trbC4 from "../assets/instruments/trombone/trombone_C4_15_forte_normal.mp3"
import trbCs4 from "../assets/instruments/trombone/trombone_Cs4_15_forte_normal.mp3"
import trbD4 from "../assets/instruments/trombone/trombone_D4_15_forte_normal.mp3"

const inst = new Frankenstrument({
    name:[
      "Saxo",
      "fon"
    ],
    fadeStartTime:0.1,
    notes:[
      {note:"a3", path:saxA3},
      {note:"as3", path:saxAs3},
      {note:"b3", path:saxB3},
      {note:"c4", path:saxC4},
      {note:"cs4", path:saxCs4},
      {note:"d4", path:saxD4},
    ]
  }, {
    name:[
      "Trom",
      "bon"
    ],
    fadeStartTime:0.1,
    notes:[
      {note:"a3", path:trbA3},
      {note:"as3", path:trbAs3},
      {note:"b3", path:trbB3},
      {note:"c4", path:trbC4},
      {note:"cs4", path:trbCs4},
      {note:"d4", path:trbD4},
    ]
  })

  console.log(inst.name)


  /*
  class (inst1={
  title=[
    "Saxo",
    "phone"
  ]
  fadeOutTime, //Time when the attack starts to fade out
  fadeInTime, 
  notes=[
    { example:
      note:"a4",
      src:"path/to/audio"
    }
  ]
})

public Methods:
playNote("a4")
playMidi(midiData)
stop()
get name()*/