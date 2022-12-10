Input::
//// [/src/project/tsconfig.json]
{"compilerOptions":{"composite":true,"cacheResolutions":true,"traceResolution":true},"files":["fileWithImports.ts","randomFileForImport.ts","a/fileWithImports.ts","b/ba/fileWithImports.ts","b/randomFileForImport.ts","c/ca/fileWithImports.ts","c/ca/caa/randomFileForImport.ts","c/ca/caa/caaa/fileWithImports.ts","c/cb/fileWithImports.ts","d/da/daa/daaa/x/y/z/randomFileForImport.ts","d/da/daa/daaa/fileWithImports.ts","d/da/daa/fileWithImports.ts","d/da/fileWithImports.ts","e/ea/fileWithImports.ts","e/ea/eaa/fileWithImports.ts","e/ea/eaa/eaaa/fileWithImports.ts","e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts","f/fa/faa/x/y/z/randomFileForImport.ts","f/fa/faa/faaa/fileWithImports.ts"]}

//// [/src/project/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/randomFileForImport.ts]
export const x = 10;

//// [/src/project/a/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/b/ba/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/b/randomFileForImport.ts]
export const x = 10;

//// [/src/project/c/ca/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/c/ca/caa/randomFileForImport.ts]
export const x = 10;

//// [/src/project/c/ca/caa/caaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/c/cb/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts]
import type { ImportInterface0 } from "pkg0";
export const x = 10;

//// [/src/project/d/da/daa/daaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/d/da/daa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/d/da/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/e/ea/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/e/ea/eaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/e/ea/eaa/eaaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts]
export const x = 10;

//// [/src/project/f/fa/faa/faaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
import type { ImportInterface1 } from "pkg1";


//// [/src/project/f/fa/faa/x/y/z/randomFileForImport.ts]
export const x = 10;

//// [/src/project/node_modules/pkg0/index.d.ts]
export interface ImportInterface0 {}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../a/lib/lib.d.ts","./node_modules/pkg0/index.d.ts","./filewithimports.ts","./randomfileforimport.ts","./a/filewithimports.ts","./b/ba/filewithimports.ts","./b/randomfileforimport.ts","./c/ca/filewithimports.ts","./c/ca/caa/randomfileforimport.ts","./c/ca/caa/caaa/filewithimports.ts","./c/cb/filewithimports.ts","./d/da/daa/daaa/x/y/z/randomfileforimport.ts","./d/da/daa/daaa/filewithimports.ts","./d/da/daa/filewithimports.ts","./d/da/filewithimports.ts","./e/ea/filewithimports.ts","./e/ea/eaa/filewithimports.ts","./e/ea/eaa/eaaa/filewithimports.ts","./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts","./f/fa/faa/x/y/z/randomfileforimport.ts","./f/fa/faa/faaa/filewithimports.ts","./a","./b/ba","./c/ca/caa/caaa","./c/cb","./d/da/daa/daaa","./e/ea/eaa/eaaa","./f/fa/faa/faaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"769951468-export interface ImportInterface0 {}","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","-10726455937-export const x = 10;","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","-10726455937-export const x = 10;","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","-10726455937-export const x = 10;","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","-10726455937-export const x = 10;","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","-10726455937-export const x = 10;","-10726455937-export const x = 10;","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2]],"referencedMap":[[5,1],[6,1],[10,1],[8,1],[11,1],[13,1],[14,1],[15,1],[18,1],[17,1],[16,1],[21,1],[3,1]],"exportedModulesMap":[[5,1],[6,1],[10,1],[8,1],[11,1],[13,1],[14,1],[15,1],[18,1],[17,1],[16,1],[21,1],[3,1]],"semanticDiagnosticsPerFile":[1,[5,[{"file":"./a/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[6,[{"file":"./b/ba/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],7,[10,[{"file":"./c/ca/caa/caaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],9,[8,[{"file":"./c/ca/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[11,[{"file":"./c/cb/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[13,[{"file":"./d/da/daa/daaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],12,[14,[{"file":"./d/da/daa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[15,[{"file":"./d/da/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[18,[{"file":"./e/ea/eaa/eaaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],19,[17,[{"file":"./e/ea/eaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[16,[{"file":"./e/ea/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[21,[{"file":"./f/fa/faa/faaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],20,[3,[{"file":"./filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],2,4],"affectedFilesPendingEmit":[5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,4],"emitSignatures":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"cacheResolutions":{"resolutions":[{"resolvedModule":2}],"names":["pkg0"],"resolutionEntries":[[1,1]],"modules":[[22,[1]],[23,[1]],[24,[1]],[25,[1]],[26,[1]],[27,[1]],[28,[1]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../a/lib/lib.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./f/fa/faa/x/y/z/randomfileforimport.ts",
      "./f/fa/faa/faaa/filewithimports.ts",
      "./a",
      "./b/ba",
      "./c/ca/caa/caaa",
      "./c/cb",
      "./d/da/daa/daaa",
      "./e/ea/eaa/eaaa",
      "./f/fa/faa/faaa"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}"
      },
      "./filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./a/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./b/ba/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./b/randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./c/ca/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./c/ca/caa/randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./c/ca/caa/caaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./c/cb/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./d/da/daa/daaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./d/da/daa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./d/da/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./e/ea/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./e/ea/eaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./e/ea/eaa/eaaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./f/fa/faa/x/y/z/randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./f/fa/faa/faaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./f/fa/faa/faaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./f/fa/faa/faaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../a/lib/lib.d.ts",
      [
        "./a/filewithimports.ts",
        [
          {
            "file": "./a/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./b/ba/filewithimports.ts",
        [
          {
            "file": "./b/ba/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./b/randomfileforimport.ts",
      [
        "./c/ca/caa/caaa/filewithimports.ts",
        [
          {
            "file": "./c/ca/caa/caaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./c/ca/caa/randomfileforimport.ts",
      [
        "./c/ca/filewithimports.ts",
        [
          {
            "file": "./c/ca/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./c/cb/filewithimports.ts",
        [
          {
            "file": "./c/cb/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./d/da/daa/daaa/filewithimports.ts",
        [
          {
            "file": "./d/da/daa/daaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      [
        "./d/da/daa/filewithimports.ts",
        [
          {
            "file": "./d/da/daa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./d/da/filewithimports.ts",
        [
          {
            "file": "./d/da/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./e/ea/eaa/eaaa/filewithimports.ts",
        [
          {
            "file": "./e/ea/eaa/eaaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      [
        "./e/ea/eaa/filewithimports.ts",
        [
          {
            "file": "./e/ea/eaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./e/ea/filewithimports.ts",
        [
          {
            "file": "./e/ea/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./f/fa/faa/faaa/filewithimports.ts",
        [
          {
            "file": "./f/fa/faa/faaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./f/fa/faa/x/y/z/randomfileforimport.ts",
      [
        "./filewithimports.ts",
        [
          {
            "file": "./filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./node_modules/pkg0/index.d.ts",
      "./randomfileforimport.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./a/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./b/ba/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./b/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./c/ca/caa/caaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./c/ca/caa/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./c/ca/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./c/cb/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./d/da/daa/daaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./d/da/daa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./d/da/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./e/ea/eaa/eaaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./e/ea/eaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./e/ea/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./f/fa/faa/faaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./f/fa/faa/x/y/z/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./randomfileforimport.ts",
        "Js | Dts"
      ]
    ],
    "emitSignatures": [
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./f/fa/faa/x/y/z/randomfileforimport.ts",
      "./f/fa/faa/faaa/filewithimports.ts"
    ],
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": 2
          },
          "resolutionId": 1,
          "resolvedModule": "./node_modules/pkg0/index.d.ts"
        }
      ],
      "names": [
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": "./node_modules/pkg0/index.d.ts"
          }
        }
      ],
      "modules": [
        {
          "dir": "./a",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./b/ba",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./c/ca/caa/caaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./c/cb",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./d/da/daa/daaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./e/ea/eaa/eaaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./f/fa/faa/faaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 5912
}


/a/lib/tsc.js -b -w --explainFiles
Output::
======== Resolving module 'pkg0' from '/src/project/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
File '/src/project/node_modules/pkg0/package.json' does not exist.
File '/src/project/node_modules/pkg0.ts' does not exist.
File '/src/project/node_modules/pkg0.tsx' does not exist.
File '/src/project/node_modules/pkg0.d.ts' does not exist.
File '/src/project/node_modules/pkg0/index.ts' does not exist.
File '/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/src/project/node_modules/pkg0/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg0/index.d.ts', result '/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
File '/src/project/node_modules/pkg1.ts' does not exist.
File '/src/project/node_modules/pkg1.tsx' does not exist.
File '/src/project/node_modules/pkg1.d.ts' does not exist.
Directory '/src/project/node_modules/@types' does not exist, skipping all lookups in it.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
Loading module 'pkg1' from 'node_modules' folder, target file types: JavaScript.
File '/src/project/node_modules/pkg1.js' does not exist.
File '/src/project/node_modules/pkg1.jsx' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/a/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/a/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/a/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/a/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/b/ba/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/b/ba/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/b/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/b/ba/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/b/ba/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/b/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/c/ca/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/ca/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/c/ca/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/ca/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/ca/caa/caaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/ca/caa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project/c/ca'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/c/ca/caa/caaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/ca/caa/caaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/ca/caa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project/c/ca'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/c/cb/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/cb/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project/c'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/c/cb/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/cb/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project/c'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/d/da/daa/daaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/d/da/daa/daaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/d/da/daa/daaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Resolution for module 'pkg0' was found in cache from location '/src/project/d/da/daa'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/d/da/daa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Resolution for module 'pkg1' was found in cache from location '/src/project/d/da/daa'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/d/da/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Resolution for module 'pkg0' was found in cache from location '/src/project/d/da'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/d/da/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Resolution for module 'pkg1' was found in cache from location '/src/project/d/da'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/e/ea/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/e/ea/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/eaa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project/e/ea'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/e/ea/eaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/eaa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project/e/ea'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/eaa/eaaa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project/e/ea/eaa'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/eaa/eaaa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project/e/ea/eaa'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/f/fa/faa/faaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/f/fa/faa/faaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/f/fa/faa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/f/fa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/f/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg1' from '/src/project/f/fa/faa/faaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/f/fa/faa/faaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/f/fa/faa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/f/fa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/f/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
[96mfileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96ma/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mb/ba/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mc/ca/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mc/ca/caa/caaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mc/cb/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96md/da/daa/daaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96md/da/daa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96md/da/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96me/ea/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96me/ea/eaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96me/ea/eaa/eaaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mf/fa/faa/faaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m


>> Screen clear
[[90m12:02:04 AM[0m] Starting compilation in watch mode...

Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
File '/src/project/node_modules/pkg1.ts' does not exist.
File '/src/project/node_modules/pkg1.tsx' does not exist.
File '/src/project/node_modules/pkg1.d.ts' does not exist.
Directory '/src/project/node_modules/@types' does not exist, skipping all lookups in it.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
Loading module 'pkg1' from 'node_modules' folder, target file types: JavaScript.
File '/src/project/node_modules/pkg1.js' does not exist.
File '/src/project/node_modules/pkg1.jsx' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/a/fileWithImports.ts' found in cache from location '/src/project/a', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/a/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/a/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/b/ba/fileWithImports.ts' found in cache from location '/src/project/b/ba', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/b/ba/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/b/ba/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/b/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/c/ca/fileWithImports.ts' found in cache from location '/src/project/c/ca', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/c/ca/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/ca/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts' found in cache from location '/src/project/c/ca/caa/caaa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/c/ca/caa/caaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/ca/caa/caaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/ca/caa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project/c/ca'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/c/cb/fileWithImports.ts' found in cache from location '/src/project/c/cb', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/c/cb/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/cb/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project/c'.
======== Module name 'pkg1' was not resolved. ========
======== Resolving module 'pkg0' from '/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/d/da/daa/daaa/x/y/z/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/daaa/x/y/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/daaa/x/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project/d/da/daa/daaa'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts' found in cache from location '/src/project/d/da/daa/daaa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/d/da/daa/daaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/d/da/daa/daaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts' found in cache from location '/src/project/d/da/daa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/d/da/daa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Resolution for module 'pkg1' was found in cache from location '/src/project/d/da/daa'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/d/da/fileWithImports.ts' found in cache from location '/src/project/d/da', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/d/da/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Resolution for module 'pkg1' was found in cache from location '/src/project/d/da'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/e/ea/fileWithImports.ts' found in cache from location '/src/project/e/ea', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/e/ea/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts' found in cache from location '/src/project/e/ea/eaa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/e/ea/eaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/eaa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project/e/ea'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts' found in cache from location '/src/project/e/ea/eaa/eaaa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/eaa/eaaa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project/e/ea/eaa'.
======== Module name 'pkg1' was not resolved. ========
Reusing resolution of module 'pkg0' from '/src/project/f/fa/faa/faaa/fileWithImports.ts' found in cache from location '/src/project/f/fa/faa/faaa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg1' from '/src/project/f/fa/faa/faaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/f/fa/faa/faaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/f/fa/faa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/f/fa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/f/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg1' was found in cache from location '/src/project'.
======== Module name 'pkg1' was not resolved. ========
[96mfileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96ma/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mb/ba/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mc/ca/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mc/ca/caa/caaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mc/cb/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96md/da/daa/daaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96md/da/daa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96md/da/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96me/ea/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96me/ea/eaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96me/ea/eaa/eaaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

[96mf/fa/faa/faaa/fileWithImports.ts[0m:[93m2[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { ImportInterface1 } from "pkg1";
[7m [0m [91m                                      ~~~~~~[0m

../../a/lib/lib.d.ts
  Default library for target 'es5'
node_modules/pkg0/index.d.ts
  Imported via "pkg0" from file 'fileWithImports.ts'
  Imported via "pkg0" from file 'a/fileWithImports.ts'
  Imported via "pkg0" from file 'b/ba/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/caa/caaa/fileWithImports.ts'
  Imported via "pkg0" from file 'c/cb/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/x/y/z/randomFileForImport.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/eaaa/fileWithImports.ts'
  Imported via "pkg0" from file 'f/fa/faa/faaa/fileWithImports.ts'
fileWithImports.ts
  Part of 'files' list in tsconfig.json
randomFileForImport.ts
  Part of 'files' list in tsconfig.json
a/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/ba/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/caaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/cb/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
f/fa/faa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
f/fa/faa/faaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
[[90m12:02:12 AM[0m] Found 13 errors. Watching for file changes.



Program root files: ["/src/project/fileWithImports.ts","/src/project/randomFileForImport.ts","/src/project/a/fileWithImports.ts","/src/project/b/ba/fileWithImports.ts","/src/project/b/randomFileForImport.ts","/src/project/c/ca/fileWithImports.ts","/src/project/c/ca/caa/randomFileForImport.ts","/src/project/c/ca/caa/caaa/fileWithImports.ts","/src/project/c/cb/fileWithImports.ts","/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts","/src/project/d/da/daa/daaa/fileWithImports.ts","/src/project/d/da/daa/fileWithImports.ts","/src/project/d/da/fileWithImports.ts","/src/project/e/ea/fileWithImports.ts","/src/project/e/ea/eaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts","/src/project/f/fa/faa/x/y/z/randomFileForImport.ts","/src/project/f/fa/faa/faaa/fileWithImports.ts"]
Program options: {"composite":true,"cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModuleCache
Program files::
/a/lib/lib.d.ts
/src/project/node_modules/pkg0/index.d.ts
/src/project/fileWithImports.ts
/src/project/randomFileForImport.ts
/src/project/a/fileWithImports.ts
/src/project/b/ba/fileWithImports.ts
/src/project/b/randomFileForImport.ts
/src/project/c/ca/fileWithImports.ts
/src/project/c/ca/caa/randomFileForImport.ts
/src/project/c/ca/caa/caaa/fileWithImports.ts
/src/project/c/cb/fileWithImports.ts
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
/src/project/d/da/daa/daaa/fileWithImports.ts
/src/project/d/da/daa/fileWithImports.ts
/src/project/d/da/fileWithImports.ts
/src/project/e/ea/fileWithImports.ts
/src/project/e/ea/eaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
/src/project/f/fa/faa/x/y/z/randomFileForImport.ts
/src/project/f/fa/faa/faaa/fileWithImports.ts

Semantic diagnostics in builder refreshed for::
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts

Shape signatures in builder refreshed for::
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts (computed .d.ts)

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/a/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/b/ba/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/c/ca/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/c/ca/caa/caaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/c/cb/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}

File: /src/project/d/da/daa/daaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/d/da/daa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/d/da/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/e/ea/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/e/ea/eaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/e/ea/eaa/eaaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

File: /src/project/f/fa/faa/faaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "isExternalLibraryImport": true,
    "extension": ".d.ts"
  }
}
pkg1: {
  "failedLookupLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.ts",
    "/src/project/node_modules/pkg1.tsx",
    "/src/project/node_modules/pkg1.d.ts",
    "/src/project/node_modules/pkg1/index.ts",
    "/src/project/node_modules/pkg1/index.tsx",
    "/src/project/node_modules/pkg1/index.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1.js",
    "/src/project/node_modules/pkg1.jsx",
    "/src/project/node_modules/pkg1/index.js",
    "/src/project/node_modules/pkg1/index.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx",
    "/src/project/a/node_modules/pkg1/package.json",
    "/src/project/a/node_modules/pkg1.ts",
    "/src/project/a/node_modules/pkg1.tsx",
    "/src/project/a/node_modules/pkg1.d.ts",
    "/src/project/a/node_modules/pkg1/index.ts",
    "/src/project/a/node_modules/pkg1/index.tsx",
    "/src/project/a/node_modules/pkg1/index.d.ts",
    "/src/project/a/node_modules/@types/pkg1/package.json",
    "/src/project/a/node_modules/@types/pkg1.d.ts",
    "/src/project/a/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/pkg1/package.json",
    "/src/project/b/ba/node_modules/pkg1.ts",
    "/src/project/b/ba/node_modules/pkg1.tsx",
    "/src/project/b/ba/node_modules/pkg1.d.ts",
    "/src/project/b/ba/node_modules/pkg1/index.ts",
    "/src/project/b/ba/node_modules/pkg1/index.tsx",
    "/src/project/b/ba/node_modules/pkg1/index.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/package.json",
    "/src/project/b/ba/node_modules/@types/pkg1.d.ts",
    "/src/project/b/ba/node_modules/@types/pkg1/index.d.ts",
    "/src/project/b/node_modules/pkg1/package.json",
    "/src/project/b/node_modules/pkg1.ts",
    "/src/project/b/node_modules/pkg1.tsx",
    "/src/project/b/node_modules/pkg1.d.ts",
    "/src/project/b/node_modules/pkg1/index.ts",
    "/src/project/b/node_modules/pkg1/index.tsx",
    "/src/project/b/node_modules/pkg1/index.d.ts",
    "/src/project/b/node_modules/@types/pkg1/package.json",
    "/src/project/b/node_modules/@types/pkg1.d.ts",
    "/src/project/b/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/pkg1/package.json",
    "/src/project/c/ca/node_modules/pkg1.ts",
    "/src/project/c/ca/node_modules/pkg1.tsx",
    "/src/project/c/ca/node_modules/pkg1.d.ts",
    "/src/project/c/ca/node_modules/pkg1/index.ts",
    "/src/project/c/ca/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/node_modules/pkg1/package.json",
    "/src/project/c/node_modules/pkg1.ts",
    "/src/project/c/node_modules/pkg1.tsx",
    "/src/project/c/node_modules/pkg1.d.ts",
    "/src/project/c/node_modules/pkg1/index.ts",
    "/src/project/c/node_modules/pkg1/index.tsx",
    "/src/project/c/node_modules/pkg1/index.d.ts",
    "/src/project/c/node_modules/@types/pkg1/package.json",
    "/src/project/c/node_modules/@types/pkg1.d.ts",
    "/src/project/c/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/caaa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/caaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/pkg1.ts",
    "/src/project/c/ca/caa/node_modules/pkg1.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.ts",
    "/src/project/c/ca/caa/node_modules/pkg1/index.tsx",
    "/src/project/c/ca/caa/node_modules/pkg1/index.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/package.json",
    "/src/project/c/ca/caa/node_modules/@types/pkg1.d.ts",
    "/src/project/c/ca/caa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/pkg1/package.json",
    "/src/project/c/cb/node_modules/pkg1.ts",
    "/src/project/c/cb/node_modules/pkg1.tsx",
    "/src/project/c/cb/node_modules/pkg1.d.ts",
    "/src/project/c/cb/node_modules/pkg1/index.ts",
    "/src/project/c/cb/node_modules/pkg1/index.tsx",
    "/src/project/c/cb/node_modules/pkg1/index.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/package.json",
    "/src/project/c/cb/node_modules/@types/pkg1.d.ts",
    "/src/project/c/cb/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/daaa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/daaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/pkg1.ts",
    "/src/project/d/da/daa/node_modules/pkg1.tsx",
    "/src/project/d/da/daa/node_modules/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.ts",
    "/src/project/d/da/daa/node_modules/pkg1/index.tsx",
    "/src/project/d/da/daa/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/daa/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/daa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/pkg1/package.json",
    "/src/project/d/da/node_modules/pkg1.ts",
    "/src/project/d/da/node_modules/pkg1.tsx",
    "/src/project/d/da/node_modules/pkg1.d.ts",
    "/src/project/d/da/node_modules/pkg1/index.ts",
    "/src/project/d/da/node_modules/pkg1/index.tsx",
    "/src/project/d/da/node_modules/pkg1/index.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/package.json",
    "/src/project/d/da/node_modules/@types/pkg1.d.ts",
    "/src/project/d/da/node_modules/@types/pkg1/index.d.ts",
    "/src/project/d/node_modules/pkg1/package.json",
    "/src/project/d/node_modules/pkg1.ts",
    "/src/project/d/node_modules/pkg1.tsx",
    "/src/project/d/node_modules/pkg1.d.ts",
    "/src/project/d/node_modules/pkg1/index.ts",
    "/src/project/d/node_modules/pkg1/index.tsx",
    "/src/project/d/node_modules/pkg1/index.d.ts",
    "/src/project/d/node_modules/@types/pkg1/package.json",
    "/src/project/d/node_modules/@types/pkg1.d.ts",
    "/src/project/d/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/pkg1/package.json",
    "/src/project/e/ea/node_modules/pkg1.ts",
    "/src/project/e/ea/node_modules/pkg1.tsx",
    "/src/project/e/ea/node_modules/pkg1.d.ts",
    "/src/project/e/ea/node_modules/pkg1/index.ts",
    "/src/project/e/ea/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/node_modules/pkg1/package.json",
    "/src/project/e/node_modules/pkg1.ts",
    "/src/project/e/node_modules/pkg1.tsx",
    "/src/project/e/node_modules/pkg1.d.ts",
    "/src/project/e/node_modules/pkg1/index.ts",
    "/src/project/e/node_modules/pkg1/index.tsx",
    "/src/project/e/node_modules/pkg1/index.d.ts",
    "/src/project/e/node_modules/@types/pkg1/package.json",
    "/src/project/e/node_modules/@types/pkg1.d.ts",
    "/src/project/e/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.tsx",
    "/src/project/e/ea/eaa/eaaa/node_modules/pkg1/index.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/package.json",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1.d.ts",
    "/src/project/e/ea/eaa/eaaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/faaa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/faaa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/pkg1.ts",
    "/src/project/f/fa/faa/node_modules/pkg1.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/faa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/faa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/faa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/faa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/pkg1/package.json",
    "/src/project/f/fa/node_modules/pkg1.ts",
    "/src/project/f/fa/node_modules/pkg1.tsx",
    "/src/project/f/fa/node_modules/pkg1.d.ts",
    "/src/project/f/fa/node_modules/pkg1/index.ts",
    "/src/project/f/fa/node_modules/pkg1/index.tsx",
    "/src/project/f/fa/node_modules/pkg1/index.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/package.json",
    "/src/project/f/fa/node_modules/@types/pkg1.d.ts",
    "/src/project/f/fa/node_modules/@types/pkg1/index.d.ts",
    "/src/project/f/node_modules/pkg1/package.json",
    "/src/project/f/node_modules/pkg1.ts",
    "/src/project/f/node_modules/pkg1.tsx",
    "/src/project/f/node_modules/pkg1.d.ts",
    "/src/project/f/node_modules/pkg1/index.ts",
    "/src/project/f/node_modules/pkg1/index.tsx",
    "/src/project/f/node_modules/pkg1/index.d.ts",
    "/src/project/f/node_modules/@types/pkg1/package.json",
    "/src/project/f/node_modules/@types/pkg1.d.ts",
    "/src/project/f/node_modules/@types/pkg1/index.d.ts"
  ]
}

PolledWatches::
/src/project/node_modules/pkg1/package.json:
  {"pollingInterval":2000}

FsWatches::
/src/project/tsconfig.json:
  {}
/src/project/filewithimports.ts:
  {}
/src/project/randomfileforimport.ts:
  {}
/src/project/a/filewithimports.ts:
  {}
/src/project/b/ba/filewithimports.ts:
  {}
/src/project/b/randomfileforimport.ts:
  {}
/src/project/c/ca/filewithimports.ts:
  {}
/src/project/c/ca/caa/randomfileforimport.ts:
  {}
/src/project/c/ca/caa/caaa/filewithimports.ts:
  {}
/src/project/c/cb/filewithimports.ts:
  {}
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts:
  {}
/src/project/d/da/daa/daaa/filewithimports.ts:
  {}
/src/project/d/da/daa/filewithimports.ts:
  {}
/src/project/d/da/filewithimports.ts:
  {}
/src/project/e/ea/filewithimports.ts:
  {}
/src/project/e/ea/eaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts:
  {}
/src/project/f/fa/faa/x/y/z/randomfileforimport.ts:
  {}
/src/project/f/fa/faa/faaa/filewithimports.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../a/lib/lib.d.ts","./node_modules/pkg0/index.d.ts","./filewithimports.ts","./randomfileforimport.ts","./a/filewithimports.ts","./b/ba/filewithimports.ts","./b/randomfileforimport.ts","./c/ca/filewithimports.ts","./c/ca/caa/randomfileforimport.ts","./c/ca/caa/caaa/filewithimports.ts","./c/cb/filewithimports.ts","./d/da/daa/daaa/x/y/z/randomfileforimport.ts","./d/da/daa/daaa/filewithimports.ts","./d/da/daa/filewithimports.ts","./d/da/filewithimports.ts","./e/ea/filewithimports.ts","./e/ea/eaa/filewithimports.ts","./e/ea/eaa/eaaa/filewithimports.ts","./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts","./f/fa/faa/x/y/z/randomfileforimport.ts","./f/fa/faa/faaa/filewithimports.ts","./a","./b/ba","./c/ca/caa/caaa","./c/cb","./d/da/daa/daaa/x/y/z","./e/ea/eaa/eaaa","./f/fa/faa/faaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"769951468-export interface ImportInterface0 {}","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","-10726455937-export const x = 10;","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","-10726455937-export const x = 10;","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","-10726455937-export const x = 10;","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n","-10726455937-export const x = 10;","-10726455937-export const x = 10;","9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2]],"referencedMap":[[5,1],[6,1],[10,1],[8,1],[11,1],[13,1],[12,1],[14,1],[15,1],[18,1],[17,1],[16,1],[21,1],[3,1]],"exportedModulesMap":[[5,1],[6,1],[10,1],[8,1],[11,1],[13,1],[14,1],[15,1],[18,1],[17,1],[16,1],[21,1],[3,1]],"semanticDiagnosticsPerFile":[1,[5,[{"file":"./a/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[6,[{"file":"./b/ba/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],7,[10,[{"file":"./c/ca/caa/caaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],9,[8,[{"file":"./c/ca/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[11,[{"file":"./c/cb/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[13,[{"file":"./d/da/daa/daaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],12,[14,[{"file":"./d/da/daa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[15,[{"file":"./d/da/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[18,[{"file":"./e/ea/eaa/eaaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],19,[17,[{"file":"./e/ea/eaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[16,[{"file":"./e/ea/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[21,[{"file":"./f/fa/faa/faaa/filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],20,[3,[{"file":"./filewithimports.ts","start":84,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],2,4],"affectedFilesPendingEmit":[5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,4],"emitSignatures":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"cacheResolutions":{"resolutions":[{"resolvedModule":2}],"names":["pkg0"],"resolutionEntries":[[1,1]],"modules":[[22,[1]],[23,[1]],[24,[1]],[25,[1]],[26,[1]],[27,[1]],[28,[1]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../a/lib/lib.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./f/fa/faa/x/y/z/randomfileforimport.ts",
      "./f/fa/faa/faaa/filewithimports.ts",
      "./a",
      "./b/ba",
      "./c/ca/caa/caaa",
      "./c/cb",
      "./d/da/daa/daaa/x/y/z",
      "./e/ea/eaa/eaaa",
      "./f/fa/faa/faaa"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}"
      },
      "./filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./a/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./b/ba/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./b/randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./c/ca/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./c/ca/caa/randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./c/ca/caa/caaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./c/cb/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./d/da/daa/daaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./d/da/daa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./d/da/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./e/ea/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./e/ea/eaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./e/ea/eaa/eaaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      },
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./f/fa/faa/x/y/z/randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;"
      },
      "./f/fa/faa/faaa/filewithimports.ts": {
        "version": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n",
        "signature": "9626982695-import type { ImportInterface0 } from \"pkg0\";\nimport type { ImportInterface1 } from \"pkg1\";\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./f/fa/faa/faaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./f/fa/faa/faaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../a/lib/lib.d.ts",
      [
        "./a/filewithimports.ts",
        [
          {
            "file": "./a/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./b/ba/filewithimports.ts",
        [
          {
            "file": "./b/ba/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./b/randomfileforimport.ts",
      [
        "./c/ca/caa/caaa/filewithimports.ts",
        [
          {
            "file": "./c/ca/caa/caaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./c/ca/caa/randomfileforimport.ts",
      [
        "./c/ca/filewithimports.ts",
        [
          {
            "file": "./c/ca/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./c/cb/filewithimports.ts",
        [
          {
            "file": "./c/cb/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./d/da/daa/daaa/filewithimports.ts",
        [
          {
            "file": "./d/da/daa/daaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      [
        "./d/da/daa/filewithimports.ts",
        [
          {
            "file": "./d/da/daa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./d/da/filewithimports.ts",
        [
          {
            "file": "./d/da/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./e/ea/eaa/eaaa/filewithimports.ts",
        [
          {
            "file": "./e/ea/eaa/eaaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      [
        "./e/ea/eaa/filewithimports.ts",
        [
          {
            "file": "./e/ea/eaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./e/ea/filewithimports.ts",
        [
          {
            "file": "./e/ea/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./f/fa/faa/faaa/filewithimports.ts",
        [
          {
            "file": "./f/fa/faa/faaa/filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./f/fa/faa/x/y/z/randomfileforimport.ts",
      [
        "./filewithimports.ts",
        [
          {
            "file": "./filewithimports.ts",
            "start": 84,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./node_modules/pkg0/index.d.ts",
      "./randomfileforimport.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./a/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./b/ba/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./b/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./c/ca/caa/caaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./c/ca/caa/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./c/ca/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./c/cb/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./d/da/daa/daaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./d/da/daa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./d/da/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./e/ea/eaa/eaaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./e/ea/eaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./e/ea/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./f/fa/faa/faaa/filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./f/fa/faa/x/y/z/randomfileforimport.ts",
        "Js | Dts"
      ],
      [
        "./filewithimports.ts",
        "Js | Dts"
      ],
      [
        "./randomfileforimport.ts",
        "Js | Dts"
      ]
    ],
    "emitSignatures": [
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./f/fa/faa/x/y/z/randomfileforimport.ts",
      "./f/fa/faa/faaa/filewithimports.ts"
    ],
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": 2
          },
          "resolutionId": 1,
          "resolvedModule": "./node_modules/pkg0/index.d.ts"
        }
      ],
      "names": [
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": "./node_modules/pkg0/index.d.ts"
          }
        }
      ],
      "modules": [
        {
          "dir": "./a",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./b/ba",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./c/ca/caa/caaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./c/cb",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./d/da/daa/daaa/x/y/z",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./e/ea/eaa/eaaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        },
        {
          "dir": "./f/fa/faa/faaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": "./node_modules/pkg0/index.d.ts"
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 6042
}

