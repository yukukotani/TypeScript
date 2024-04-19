currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/home/username/project/src/a.ts] Inode:: 5
export const a = 10;

//// [/home/username/project/src/b.ts] Inode:: 6
export const b = 10;

//// [/home/username/project/tsconfig.json] Inode:: 7
{
  "compilerOptions": {
    "strictNullChecks": true
  },
  "include": [
    "src/**/*.ts"
  ]
}

//// [/a/lib/lib.d.ts] Inode:: 10
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


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/username/project/src/a.ts",
        "projectRootPath": "/home/username/project"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /home/username/project/src
Info seq  [hh:mm:ss:mss] For info: /home/username/project/src/a.ts :: Config file name: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/tsconfig.json 2000 undefined Project: /home/username/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/username/project/tsconfig.json",
        "reason": "Creating possible configured project for /home/username/project/src/a.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/username/project/tsconfig.json : {
 "rootNames": [
  "/home/username/project/src/a.ts",
  "/home/username/project/src/b.ts"
 ],
 "options": {
  "strictNullChecks": true,
  "configFilePath": "/home/username/project/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/username/project/src 1 undefined Config: /home/username/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/username/project/src 1 undefined Config: /home/username/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/src/b.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/src/package.json 2000 undefined Project: /home/username/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/package.json 2000 undefined Project: /home/username/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/username/project/node_modules/@types 1 undefined Project: /home/username/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/username/project/node_modules/@types 1 undefined Project: /home/username/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/username/project/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/username/project/src/a.ts SVC-1-0 "export const a = 10;"
	/home/username/project/src/b.ts Text-1 "export const b = 10;"


	../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/a.ts
	  Matched by include pattern 'src/**/*.ts' in 'tsconfig.json'
	src/b.ts
	  Matched by include pattern 'src/**/*.ts' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/username/project/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "50462d0a0c3763035f12d16b6fbfb9ba7b2fb44771df6b8dac10d9597d932057",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 2,
            "tsSize": 40,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "strictNullChecks": true
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": true,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/username/project/src/a.ts",
        "configFile": "/home/username/project/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/a.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/username/project/node_modules/@types: *new*
  {"pollingInterval":500}
/home/username/project/package.json: *new*
  {"pollingInterval":2000}
/home/username/project/src/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {"inode":10}
/home/username/project/src: *new*
  {"inode":4}
/home/username/project/src/b.ts: *new*
  {"inode":6}
/home/username/project/tsconfig.json: *new*
  {"inode":7}

Projects::
/home/username/project/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /home/username/project/tsconfig.json
/home/username/project/src/a.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /home/username/project/tsconfig.json *default*
/home/username/project/src/b.ts *new*
    version: Text-1
    containingProjects: 1
        /home/username/project/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/username/project/src/b.ts 2:: WatchInfo: /home/username/project/src/b.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/username/project/src/b.ts 2:: WatchInfo: /home/username/project/src/b.ts 500 undefined WatchType: Closed Script info
Before request
//// [/home/username/project/src/c.ts] Inode:: 11
export const b = 10;

//// [/home/username/project/src/b.ts] deleted

PolledWatches::
/home/username/project/node_modules/@types:
  {"pollingInterval":500}
/home/username/project/package.json:
  {"pollingInterval":2000}
/home/username/project/src/b.ts: *new*
  {"pollingInterval":500}
/home/username/project/src/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {"inode":10}
/home/username/project/src:
  {"inode":4}
/home/username/project/tsconfig.json:
  {"inode":7}

FsWatches *deleted*::
/home/username/project/src/b.ts:
  {"inode":6}

Timeout callback:: count: 3
1: /home/username/project/tsconfig.json *new*
2: *ensureProjectForOpenFiles* *new*
4: timerToUpdateChildWatches *new*

Projects::
/home/username/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /home/username/project/tsconfig.json
/home/username/project/src/a.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/username/project/tsconfig.json *default*
/home/username/project/src/b.ts *changed*
    version: Text-1
    pendingReloadFromDisk: true *changed*
    deferredDelete: true *changed*
    containingProjects: 0 *changed*
        /home/username/project/tsconfig.json *deleted*

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/username/project/src/c.ts",
        "projectRootPath": "/home/username/project",
        "fileContent": "export const b = 10;"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /home/username/project/src
Info seq  [hh:mm:ss:mss] For info: /home/username/project/src/c.ts :: Config file name: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/src/b.ts 500 undefined Project: /home/username/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/username/project/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/username/project/src/a.ts SVC-1-0 "export const a = 10;"


	../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/a.ts
	  Matched by include pattern 'src/**/*.ts' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Search path: /home/username/project
Info seq  [hh:mm:ss:mss] For info: /home/username/project/tsconfig.json :: No config files found.
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/username/project/src/c.ts",
        "configFile": "/home/username/project/tsconfig.json",
        "diagnostics": [
          {
            "text": "File '/home/username/project/src/b.ts' not found.\n  The file is in the program because:\n    Matched by include pattern 'src/**/*.ts' in '/home/username/project/tsconfig.json'",
            "code": 6053,
            "category": "error",
            "relatedInformation": [
              {
                "span": {
                  "start": {
                    "line": 6,
                    "offset": 5
                  },
                  "end": {
                    "line": 6,
                    "offset": 18
                  },
                  "file": "/home/username/project/tsconfig.json"
                },
                "message": "File is matched by include pattern specified here.",
                "category": "message",
                "code": 1408
              }
            ]
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/src/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/src/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/src/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/username/project/src/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/username/project/src/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/username/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/username/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/username/project/src/c.ts SVC-1-0 "export const b = 10;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	c.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/username/project/src/b.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/a.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/c.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/username/project/node_modules/@types:
  {"pollingInterval":500}
/home/username/project/package.json:
  {"pollingInterval":2000}
/home/username/project/src/b.ts:
  {"pollingInterval":500}
/home/username/project/src/jsconfig.json: *new*
  {"pollingInterval":2000}
/home/username/project/src/node_modules/@types: *new*
  {"pollingInterval":500}
/home/username/project/src/package.json:
  {"pollingInterval":2000}
/home/username/project/src/tsconfig.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {"inode":10}
/home/username/project/src:
  {"inode":4}
/home/username/project/tsconfig.json:
  {"inode":7}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/home/username/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /home/username/project/tsconfig.json
        /dev/null/inferredProject1* *new*
/home/username/project/src/a.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/username/project/tsconfig.json *default*
/home/username/project/src/b.ts *deleted*
    version: Text-1
    pendingReloadFromDisk: true
    deferredDelete: true
    containingProjects: 0
/home/username/project/src/c.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Before running Timeout callback:: count: 3
1: /home/username/project/tsconfig.json
2: *ensureProjectForOpenFiles*
4: timerToUpdateChildWatches

Info seq  [hh:mm:ss:mss] Running: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/a.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/c.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/a.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/c.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] got projects updated in background /home/username/project/src/a.ts,/home/username/project/src/c.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/username/project/src/a.ts",
          "/home/username/project/src/c.ts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] sysLog:: onTimerToUpdateChildWatches:: 1
Info seq  [hh:mm:ss:mss] sysLog:: invokingWatchers:: Elapsed:: *ms:: 0
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/username/project/src/b.ts 0:: WatchInfo: /home/username/project/src 1 undefined Config: /home/username/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/username/project/src/b.ts 0:: WatchInfo: /home/username/project/src 1 undefined Config: /home/username/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/username/project/src/c.ts 1:: WatchInfo: /home/username/project/src 1 undefined Config: /home/username/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /home/username/project/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/username/project/src/c.ts 1:: WatchInfo: /home/username/project/src 1 undefined Config: /home/username/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] sysLog:: Elapsed:: *ms:: onTimerToUpdateChildWatches:: 0 undefined
After running Timeout callback:: count: 2

Timeout callback:: count: 2
7: /home/username/project/tsconfig.json *new*
8: *ensureProjectForOpenFiles* *new*

Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/username/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2
    dirty: true *changed*

Before running Timeout callback:: count: 2
7: /home/username/project/tsconfig.json
8: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/username/project/src/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/username/project/src/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/username/project/src/b.ts 500 undefined Project: /home/username/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/username/project/tsconfig.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/username/project/src/a.ts SVC-1-0 "export const a = 10;"
	/home/username/project/src/c.ts SVC-1-0 "export const b = 10;"


	../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/a.ts
	  Matched by include pattern 'src/**/*.ts' in 'tsconfig.json'
	src/c.ts
	  Matched by include pattern 'src/**/*.ts' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/username/project/tsconfig.json",
        "configFile": "/home/username/project/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/a.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/c.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/username/project/src/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/username/project/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)



Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/a.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/c.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/username/project/src/a.ts,/home/username/project/src/c.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/username/project/src/a.ts",
          "/home/username/project/src/c.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/home/username/project/node_modules/@types:
  {"pollingInterval":500}
/home/username/project/package.json:
  {"pollingInterval":2000}
/home/username/project/src/node_modules/@types:
  {"pollingInterval":500}
/home/username/project/src/package.json:
  {"pollingInterval":2000}

PolledWatches *deleted*::
/home/username/project/src/b.ts:
  {"pollingInterval":500}
/home/username/project/src/jsconfig.json:
  {"pollingInterval":2000}
/home/username/project/src/tsconfig.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {"inode":10}
/home/username/project/src:
  {"inode":4}
/home/username/project/tsconfig.json:
  {"inode":7}

Projects::
/dev/null/inferredProject1* (Inferred) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 2 *changed*
    isOrphan: true *changed*
/home/username/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 3 *changed*
    dirty: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /home/username/project/tsconfig.json
        /dev/null/inferredProject1* *deleted*
/home/username/project/src/a.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/username/project/tsconfig.json *default*
/home/username/project/src/c.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 1 *changed*
        /home/username/project/tsconfig.json *default* *new*
        /dev/null/inferredProject1* *deleted*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/username/project/src/c.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/username/project/src/c.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/username/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/username/project/src/a.ts ProjectRootPath: /home/username/project
Info seq  [hh:mm:ss:mss] 		Projects: /home/username/project/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/username/project/node_modules/@types:
  {"pollingInterval":500}
/home/username/project/package.json:
  {"pollingInterval":2000}
/home/username/project/src/node_modules/@types:
  {"pollingInterval":500}
/home/username/project/src/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {"inode":10}
/home/username/project/src:
  {"inode":4}
/home/username/project/src/c.ts: *new*
  {"inode":11}
/home/username/project/tsconfig.json:
  {"inode":7}

Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 2
    projectProgramVersion: 2
    isOrphan: true
/home/username/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 3
    dirty: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /home/username/project/tsconfig.json
/home/username/project/src/a.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/username/project/tsconfig.json *default*
/home/username/project/src/c.ts *changed*
    open: false *changed*
    version: SVC-1-0
    pendingReloadFromDisk: true *changed*
    containingProjects: 1
        /home/username/project/tsconfig.json
