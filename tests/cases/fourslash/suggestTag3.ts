/// <reference path='fourslash.ts'/>

// @filename: foo.ts

//// /**
////  * @suggest {"eeeeh"} x
////  */
//// let x: string = /*0*/;
//// /**
////  * @suggest {"eeeeh"} y
////  */
//// let y: string = "/*1*/"


verify.baselineCompletions();