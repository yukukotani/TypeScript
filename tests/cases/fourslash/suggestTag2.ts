/// <reference path='fourslash.ts'/>

// @filename: foo.ts

//// /**
////  * 
////  * @param arg
////  * @suggest {"ooOOo"} arg
////  */
//// function foo(arg: string) {}

//// foo(/*0*/);
//// foo("/*1*/");


verify.baselineCompletions();