import {Howler, Howl} from "howler"
/** Frankenstrument A musical instrument made from two other instruments. Plays the attack from one instrument and cross fades to the other. */
export default class Frankenstrument {
  
  /**
   * Creates a musical instrument, made from two other instruments, that can play the attack from one instrument and cross fade to the other.
   * @param {Object} attackData Data about the instrument used for the attack
   * @param {string[]} attackData.name Array with the first and last half of the instrument name
   * @param {number} attackData.fadeStart Time before the attack starts fading out
   * @param {Object[]} attackData.notes Collection of note data
   * @param {string} attackData.notes[].note Note name and octave for instance fs4
   * @param {string} attackData.notes[].path Path to the audio file
   *
   */
   
  constructor (attackData,sustainData)
}