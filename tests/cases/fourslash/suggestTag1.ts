/// <reference path='fourslash.ts'/>

// @filename: foo.ts

//// interface Foo {
////     /**
////      * @suggest {"aaAAa"} bar
////      */
////     bar: string | number;
//// }

//// const f: Foo = {
////     bar: /*0*/
//// };

//// const g: Foo = {
////     bar: "/*1*/"
//// };

verify.baselineCompletions();