currentDirectory:: /user/username/projects/myproject useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
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

//// [/user/username/projects/myproject/src/main.ts]
import { foo } from "bar"; foo();

//// [/user/username/projects/myproject/node_modules/bar/index.d.ts]
export { foo } from "./foo";

//// [/user/username/projects/myproject/node_modules/bar/foo.d.ts]
export function foo(): string;


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "configure",
      "arguments": {
        "watchOptions": {
          "excludeDirectories": [
            "node_modules"
          ]
        }
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Host watch options changed to {"excludeDirectories":["node_modules"]}, it will be take effect for next watches.
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 1,
      "success": true
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "openExternalProject",
      "arguments": {
        "projectFileName": "/user/username/projects/myproject/project.csproj",
        "rootFiles": [
          {
            "fileName": "/user/username/projects/myproject/src/main.ts"
          },
          {
            "fileName": "/user/username/projects/myproject/node_modules/bar/index.d.ts"
          },
          {
            "fileName": "/user/username/projects/myproject/node_modules/bar/foo.d.ts"
          }
        ],
        "options": {
          "excludeDirectories": [
            "node_modules"
          ]
        }
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/main.ts 500 {"excludeDirectories":["node_modules"]} WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeDirectories":["node_modules"]} WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/project.csproj
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 {"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.csproj WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 {"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.csproj WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.csproj WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 {"excludeDirectories":["node_modules"]} WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.csproj WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.csproj WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.csproj WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/project.csproj Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/node_modules/bar/foo.d.ts Text-1 "export function foo(): string;"
	/user/username/projects/myproject/node_modules/bar/index.d.ts Text-1 "export { foo } from \"./foo\";"
	/user/username/projects/myproject/src/main.ts Text-1 "import { foo } from \"bar\"; foo();"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/bar/foo.d.ts
	  Imported via "./foo" from file 'node_modules/bar/index.d.ts'
	  Imported via "./foo" from file 'node_modules/bar/index.d.ts'
	  Root file specified for compilation
	node_modules/bar/index.d.ts
	  Imported via "bar" from file 'src/main.ts'
	  Root file specified for compilation
	src/main.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "a1386af6dec49a618d31396c9f22ab627600130b5f6428b509e61d159dfc1853",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 33,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 3,
            "dtsSize": 392,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {},
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "compileOnSave": true,
          "configFileName": "other",
          "projectType": "external",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

PolledWatches::
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/src/main.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/src/main.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/src/main.ts 500 {"excludeDirectories":["node_modules"]} WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.csproj
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/src/main.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}
