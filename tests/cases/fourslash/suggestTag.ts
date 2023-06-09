/// <reference path='fourslash.ts'/>

// @filename: foo.ts
//// interface Foo {
////     /**
////      * @suggest {"aaAAa"}
////      */
////     bar: string | number;
//// }

//// const f: Foo = {
////     bar: /**/
//// };

verify.baselineCompletions();