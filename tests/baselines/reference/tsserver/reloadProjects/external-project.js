currentDirectory:: / useCaseSensitiveFileNames: false
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

//// [/user/username/projects/myproject/file1.ts]
import { foo } from "module1";
                foo();
                import { bar } from "./file2";
                bar();

//// [/user/username/projects/myproject/file2.ts]
export function bar(){}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "configure",
      "arguments": {
        "watchOptions": {
          "excludeFiles": [
            "/user/username/projects/myproject/file2.ts"
          ]
        }
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Host watch options changed to {"excludeFiles":["/user/username/projects/myproject/file2.ts"]}, it will be take effect for next watches.
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
        "projectFileName": "/user/username/projects/myproject/project.sln",
        "options": {
          "excludeDirectories": [
            "node_modules"
          ]
        },
        "rootFiles": [
          {
            "fileName": "/user/username/projects/myproject/file1.ts"
          },
          {
            "fileName": "/user/username/projects/myproject/file2.ts"
          }
        ]
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/file1.ts 500 {"excludeFiles":["/user/username/projects/myproject/file2.ts"]} WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/file2.ts 500 {"excludeFiles":["/user/username/projects/myproject/file2.ts"]} WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 {"excludeFiles":["/user/username/projects/myproject/file2.ts"]} WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/project.sln projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/file2.ts Text-1 "export function bar(){}"
	/user/username/projects/myproject/file1.ts Text-1 "import { foo } from \"module1\";\n                foo();\n                import { bar } from \"./file2\";\n                bar();"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	file2.ts
	  Imported via "./file2" from file 'file1.ts'
	  Root file specified for compilation
	file1.ts
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
          "projectId": "422767fdb96356feed25944eccb236fc93683d686622fc6e577006b0f600fd8e",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 2,
            "tsSize": 146,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
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
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

PolledWatches::
/user/username/projects/myproject/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/file1.ts: *new*
  {}

Projects::
/user/username/projects/myproject/project.sln (External) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln
/user/username/projects/myproject/file1.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln
/user/username/projects/myproject/file2.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/file1.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/file1.ts 500 {"excludeFiles":["/user/username/projects/myproject/file2.ts"]} WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/file1.ts:
  {}

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln
/user/username/projects/myproject/file1.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln *default*
/user/username/projects/myproject/file2.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln

Before request
//// [/user/username/projects/myproject/node_modules/module1/index.d.ts]
export function foo(): string;


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "reloadProjects",
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] reload projects.
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/project.sln, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"]} WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"]} WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/module1/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/project.sln projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/node_modules/module1/index.d.ts Text-1 "export function foo(): string;"
	/user/username/projects/myproject/file2.ts Text-1 "export function bar(){}"
	/user/username/projects/myproject/file1.ts Text-1 "import { foo } from \"module1\";\n                foo();\n                import { bar } from \"./file2\";\n                bar();"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/module1/index.d.ts
	  Imported via "module1" from file 'file1.ts'
	file2.ts
	  Imported via "./file2" from file 'file1.ts'
	  Root file specified for compilation
	file1.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] After reloading projects..
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/module1/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000} *new*
/user/username/projects/node_modules/@types:
  {"pollingInterval":500} *new*
/user/username/projects/package.json:
  {"pollingInterval":2000} *new*

PolledWatches *deleted*::
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/node_modules: *new*
  {}

Timeout callback:: count: 0

Projects::
/user/username/projects/myproject/project.sln (External) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 2 *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln
/user/username/projects/myproject/file1.ts (Open)
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln *default*
/user/username/projects/myproject/file2.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln
/user/username/projects/myproject/node_modules/module1/index.d.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln

Before request
//// [/user/username/projects/myproject/file2.ts]
export function bar(){}
            bar();


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "reloadProjects",
      "seq": 5,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] reload projects.
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/project.sln, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/project.sln, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/module1/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/module1/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/project.sln projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/node_modules/module1/index.d.ts Text-1 "export function foo(): string;"
	/user/username/projects/myproject/file2.ts Text-2 "export function bar(){}\n            bar();"
	/user/username/projects/myproject/file1.ts Text-1 "import { foo } from \"module1\";\n                foo();\n                import { bar } from \"./file2\";\n                bar();"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/module1/index.d.ts
	  Imported via "module1" from file 'file1.ts'
	file2.ts
	  Imported via "./file2" from file 'file1.ts'
	  Root file specified for compilation
	file1.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] After reloading projects..
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/module1/package.json:
  {"pollingInterval":2000} *new*
/user/username/projects/myproject/node_modules/package.json:
  {"pollingInterval":2000} *new*
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000} *new*
/user/username/projects/node_modules/@types:
  {"pollingInterval":500} *new*
/user/username/projects/package.json:
  {"pollingInterval":2000} *new*

PolledWatches *deleted*::
/user/username/projects/myproject/node_modules/module1/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/node_modules:
  {}

Timeout callback:: count: 0

Projects::
/user/username/projects/myproject/project.sln (External) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 3 *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln
/user/username/projects/myproject/file1.ts (Open)
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln *default*
/user/username/projects/myproject/file2.ts *changed*
    version: Text-2 *changed*
    containingProjects: 1
        /user/username/projects/myproject/project.sln
/user/username/projects/myproject/node_modules/module1/index.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln

Before request
//// [/user/username/projects/myproject/file2.ts] deleted

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "reloadProjects",
      "seq": 6,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] reload projects.
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/project.sln, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/project.sln, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/module1/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/file2 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/file2 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 0 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 0 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/module1/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/file2.ts 500 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Missing file
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeFiles":["/user/username/projects/myproject/file2.ts"],"excludeDirectories":["/user/username/projects/myproject/node_modules"]} Project: /user/username/projects/myproject/project.sln WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/project.sln projectStateVersion: 4 projectProgramVersion: 3 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/node_modules/module1/index.d.ts Text-1 "export function foo(): string;"
	/user/username/projects/myproject/file1.ts Text-1 "import { foo } from \"module1\";\n                foo();\n                import { bar } from \"./file2\";\n                bar();"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/module1/index.d.ts
	  Imported via "module1" from file 'file1.ts'
	file1.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] ExcludeWatcher:: Close:: WatchInfo: /user/username/projects/myproject/file2.ts 500 {"excludeFiles":["/user/username/projects/myproject/file2.ts"]} WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] After reloading projects..
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/project.sln' (External)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/project.sln
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/file2: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/module1/package.json:
  {"pollingInterval":2000} *new*
/user/username/projects/myproject/node_modules/package.json:
  {"pollingInterval":2000} *new*
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000} *new*
/user/username/projects/node_modules/@types:
  {"pollingInterval":500} *new*
/user/username/projects/package.json:
  {"pollingInterval":2000} *new*

PolledWatches *deleted*::
/user/username/projects/myproject/node_modules/module1/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/node_modules:
  {}

Timeout callback:: count: 0

Projects::
/user/username/projects/myproject/project.sln (External) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 4 *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln
/user/username/projects/myproject/file1.ts (Open)
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln *default*
/user/username/projects/myproject/file2.ts *deleted*
    version: Text-2
    pendingReloadFromDisk: true *changed*
    deferredDelete: true *changed*
    containingProjects: 0 *changed*
        /user/username/projects/myproject/project.sln *deleted*
/user/username/projects/myproject/node_modules/module1/index.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/project.sln
