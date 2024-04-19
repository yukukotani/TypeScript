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

//// [/user/someuser/project/js/site.js]


//// [/user/someuser/project/tsconfig.json]
{}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "configure",
      "arguments": {
        "preferences": {
          "lazyConfiguredProjectsFromExternalProject": true
        }
      },
      "seq": 1,
      "type": "request"
    }
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
      "command": "openExternalProjects",
      "arguments": {
        "projects": [
          {
            "projectFileName": "/user/someuser/project/WebApplication6.csproj",
            "rootFiles": [
              {
                "fileName": "/user/someuser/project/js/site.js"
              },
              {
                "fileName": "/user/someuser/project/tsconfig.json"
              }
            ],
            "options": {
              "allowJs": false
            },
            "typeAcquisition": {
              "include": []
            }
          }
        ]
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Creating configuration project /user/someuser/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/someuser/project/tsconfig.json 2000 undefined Project: /user/someuser/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Project '/user/someuser/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (0) InitialLoadPending

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

FsWatches::
/user/someuser/project/tsconfig.json: *new*
  {}

Projects::
/user/someuser/project/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "synchronizeProjectList",
      "arguments": {
        "knownProjects": []
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "info": {
            "projectName": "/user/someuser/project/tsconfig.json",
            "version": 0,
            "isInferred": false,
            "options": {},
            "languageServiceDisabled": false
          },
          "files": [],
          "projectErrors": []
        }
      ],
      "responseRequired": true
    }
After request

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/someuser/project/tsconfig.json 2:: WatchInfo: /user/someuser/project/tsconfig.json 2000 undefined Project: /user/someuser/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/someuser/project/tsconfig.json 2:: WatchInfo: /user/someuser/project/tsconfig.json 2000 undefined Project: /user/someuser/project/tsconfig.json WatchType: Config file
Before request
//// [/user/someuser/project/tsconfig.json] deleted

Projects::
/user/someuser/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
    isOrphan: true *changed*
    deferredClose: true *changed*

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "synchronizeProjectList",
      "arguments": {
        "knownProjects": [
          {
            "projectName": "/user/someuser/project/tsconfig.json",
            "version": 0,
            "isInferred": false,
            "options": {},
            "languageServiceDisabled": false
          }
        ]
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [],
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "openExternalProjects",
      "arguments": {
        "projects": [
          {
            "projectFileName": "/user/someuser/project/WebApplication6.csproj",
            "rootFiles": [
              {
                "fileName": "/user/someuser/project/js/site.js"
              }
            ],
            "options": {
              "allowJs": false
            },
            "typeAcquisition": {
              "include": []
            }
          }
        ]
      },
      "seq": 5,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/someuser/project/js/site.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/someuser/project/WebApplication6.csproj
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/someuser/project/node_modules/@types 1 undefined Project: /user/someuser/project/WebApplication6.csproj WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/someuser/project/node_modules/@types 1 undefined Project: /user/someuser/project/WebApplication6.csproj WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/someuser/project/WebApplication6.csproj projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/someuser/project/WebApplication6.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/someuser/project/js/site.js Text-1 ""


	../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	js/site.js
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
TI:: Creating typing installer

PolledWatches::
/user/someuser/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/someuser/project/js/site.js: *new*
  {}
/user/someuser/project/tsconfig.json:
  {}

Projects::
/user/someuser/project/WebApplication6.csproj (External) *new*
    projectStateVersion: 1
    projectProgramVersion: 0
/user/someuser/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
    isOrphan: true
    noOpenRef: true *changed*
    deferredClose: true

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /user/someuser/project/WebApplication6.csproj
/user/someuser/project/js/site.js *new*
    version: Text-1
    containingProjects: 1
        /user/someuser/project/WebApplication6.csproj

TI:: [hh:mm:ss:mss] Global cache location '/a/data', safe file path '/safeList.json', types map path /typesMap.json
TI:: [hh:mm:ss:mss] Processing cache location '/a/data'
TI:: [hh:mm:ss:mss] Trying to find '/a/data/package.json'...
TI:: [hh:mm:ss:mss] Finished processing cache location '/a/data'
TI:: [hh:mm:ss:mss] Npm config file: /a/data/package.json
TI:: [hh:mm:ss:mss] Npm config file: '/a/data/package.json' is missing, creating new one...
TI:: [hh:mm:ss:mss] Updating types-registry npm package...
TI:: [hh:mm:ss:mss] npm install --ignore-scripts types-registry@latest
TI:: [hh:mm:ss:mss] Updated types-registry npm package
TI:: typing installer creation complete
//// [/a/data/package.json]
{ "private": true }

//// [/a/data/node_modules/types-registry/index.json]
{
  "entries": {}
}


TI:: [hh:mm:ss:mss] Got install request
    {
      "projectName": "/user/someuser/project/WebApplication6.csproj",
      "fileNames": [
        "/a/lib/lib.d.ts",
        "/user/someuser/project/js/site.js"
      ],
      "compilerOptions": {
        "allowJs": false,
        "allowNonTsExtensions": true,
        "noEmitForJsFiles": true
      },
      "typeAcquisition": {
        "include": [],
        "exclude": [],
        "enable": true
      },
      "unresolvedImports": [],
      "projectRootPath": "/user/someuser/project",
      "kind": "discover"
    }
TI:: [hh:mm:ss:mss] Failed to load safelist from types map file '/typesMap.json'
TI:: [hh:mm:ss:mss] Explicitly included types: []
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Finished typings discovery:
    {
      "cachedTypingPaths": [],
      "newTypingNames": [],
      "filesToWatch": [
        "/user/someuser/project/js/bower_components",
        "/user/someuser/project/js/node_modules",
        "/user/someuser/project/bower_components",
        "/user/someuser/project/node_modules"
      ]
    }
TI:: [hh:mm:ss:mss] Sending response:
    {
      "kind": "action::watchTypingLocations",
      "projectName": "/user/someuser/project/WebApplication6.csproj",
      "files": [
        "/user/someuser/project/js/bower_components",
        "/user/someuser/project/js/node_modules",
        "/user/someuser/project/bower_components",
        "/user/someuser/project/node_modules"
      ]
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/someuser/project/js 1 undefined Project: /user/someuser/project/WebApplication6.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/someuser/project/js 1 undefined Project: /user/someuser/project/WebApplication6.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/someuser/project/bower_components 1 undefined Project: /user/someuser/project/WebApplication6.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/someuser/project/bower_components 1 undefined Project: /user/someuser/project/WebApplication6.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/someuser/project/node_modules 1 undefined Project: /user/someuser/project/WebApplication6.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/someuser/project/node_modules 1 undefined Project: /user/someuser/project/WebApplication6.csproj WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Sending response:
    {
      "projectName": "/user/someuser/project/WebApplication6.csproj",
      "typeAcquisition": {
        "include": [],
        "exclude": [],
        "enable": true
      },
      "compilerOptions": {
        "allowJs": false,
        "allowNonTsExtensions": true,
        "noEmitForJsFiles": true
      },
      "typings": [],
      "unresolvedImports": [],
      "kind": "action::set"
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "setTypings",
      "body": {
        "projectName": "/user/someuser/project/WebApplication6.csproj",
        "typeAcquisition": {
          "include": [],
          "exclude": [],
          "enable": true
        },
        "compilerOptions": {
          "allowJs": false,
          "allowNonTsExtensions": true,
          "noEmitForJsFiles": true
        },
        "typings": [],
        "unresolvedImports": [],
        "kind": "action::set"
      }
    }
TI:: [hh:mm:ss:mss] No new typings were requested as a result of typings discovery
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "02fdd4aa9075a6b94875e28d83f663f69759ec9eaeea150a9dd9e858b81359c5",
          "fileStats": {
            "js": 1,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 0,
            "tsSize": 0,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "allowJs": false
          },
          "typeAcquisition": {
            "enable": true,
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
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/user/someuser/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (0) InitialLoadPending

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/someuser/project/tsconfig.json 2000 undefined Project: /user/someuser/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Project '/user/someuser/project/WebApplication6.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

PolledWatches::
/user/someuser/project/bower_components: *new*
  {"pollingInterval":500}
/user/someuser/project/node_modules: *new*
  {"pollingInterval":500}
/user/someuser/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/someuser/project/js/site.js:
  {}

FsWatches *deleted*::
/user/someuser/project/tsconfig.json:
  {}

FsWatchesRecursive::
/user/someuser/project/js: *new*
  {}

Projects::
/user/someuser/project/WebApplication6.csproj (External) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1 *changed*
/user/someuser/project/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
    isClosed: true *changed*
    isOrphan: true
    noOpenRef: true
    deferredClose: true
