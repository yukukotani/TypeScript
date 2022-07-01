import * as Utils from "../../_namespaces/Utils";
import {
    createServerHost,
    createWatchedSystem,
    libFile,
    TestServerHost,
} from "../virtualFileSystemWithWatch";
import {
    loadProjectFromFiles,
} from "../tsc/helpers";
import {
    solutionBuildWithBaseline,
} from "../tscWatch/helpers";

function getRandomFileContent() {
    return `export const x = 10;`;
}
function getPkgPackageJsonContent(pkg: number) {
    return JSON.stringify({
        name: `pkg${pkg}`,
        version: "0.0.1",
        exports: {
            import: "./import.js",
            require: "./require.js"
        }
    });
}
export function getPkgImportContent(type: "Import" | "Require", pkg: number) {
    return `export interface ${type}Interface${pkg} {}`;
}
export function getPkgTypeRefContent(type: "Import" | "Require", pkg: number) {
    return Utils.dedent`
            export {};
            declare global {
                interface ${type}Interface${pkg} {}
            }
        `;
}
export function getFsMapWithNode16(): { [path: string]: string; } {
    return {
        "/src/project/tsconfig.json": JSON.stringify({
            compilerOptions: {
                moduleResolution: "node16",
                composite: true,
                cacheResolutions: true,
                traceResolution: true,
            },
            include: ["*.ts"],
            exclude: ["*.d.ts"]
        }),
        "/src/project/fileWithImports.ts": Utils.dedent`
                import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };
                import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };
            `,
        "/src/project/randomFileForImport.ts": getRandomFileContent(),
        "/src/project/node_modules/pkg0/package.json": getPkgPackageJsonContent(0),
        "/src/project/node_modules/pkg0/import.d.ts": getPkgImportContent("Import", 0),
        "/src/project/node_modules/pkg0/require.d.ts": getPkgImportContent("Require", 0),
        "/src/project/node_modules/pkg1/package.json": getPkgPackageJsonContent(1),
        "/src/project/node_modules/pkg1/import.d.ts": getPkgImportContent("Import", 1),
        "/src/project/fileWithTypeRefs.ts": Utils.dedent`
                /// <reference types="pkg2" resolution-mode="import"/>
                /// <reference types="pkg3" resolution-mode="require"/>
                interface LocalInterface extends ImportInterface2, RequireInterface3 {}
                export {}
            `,
        "/src/project/randomFileForTypeRef.ts": getRandomFileContent(),
        "/src/project/node_modules/pkg2/package.json": getPkgPackageJsonContent(2),
        "/src/project/node_modules/pkg2/import.d.ts": getPkgTypeRefContent("Import", 2),
        "/src/project/node_modules/pkg2/require.d.ts": getPkgTypeRefContent("Require", 2),
        "/src/project/node_modules/pkg3/package.json": getPkgPackageJsonContent(3),
        "/src/project/node_modules/pkg3/import.d.ts": getPkgTypeRefContent("Import", 3),
        "/src/project/node_modules/@types/pkg4/index.d.ts": getRandomFileContent(),
    };
}

export function getFsWithNode16() {
    return loadProjectFromFiles(getFsMapWithNode16());
}

export function getWatchSystemWithNode16() {
    const system = createWatchedSystem(getFsMapWithNode16(), { currentDirectory: "/src/project" });
    system.ensureFileOrFolder(libFile);
    return system;
}

export function getServerHostWithNode16() {
    const system = createServerHost(getFsMapWithNode16(), { currentDirectory: "/src/project" });
    system.writeFile(libFile.path, libFile.content);
    return system;
}

export function getWatchSystemWithNode16WithBuild() {
    return getSystemWithBuild(getWatchSystemWithNode16);
}

export function getServerHostWithNode16WithBuild() {
    return getSystemWithBuild(getServerHostWithNode16);
}

function getSystemWithBuild(createSystem: () => TestServerHost) {
    const system = createSystem();
    solutionBuildWithBaseline(system, ["/src/project"]);
    return system;
}

export function getFsMapWithOut(): { [path: string]: string; } {
    return {
        "/src/project/tsconfig.json": JSON.stringify({
            compilerOptions: {
                module: "amd",
                composite: true,
                cacheResolutions: true,
                traceResolution: true,
                out: "./out.js"
            },
            include: ["*.ts"],
            exclude: ["*.d.ts"]
        }),
        "/src/project/fileWithImports.ts": Utils.dedent`
                import type { ImportInterface0 } from "pkg0";
                import type { RequireInterface1 } from "pkg1";
            `,
        "/src/project/randomFileForImport.ts": getRandomFileContent(),
        "/src/project/pkg0.d.ts": getPkgImportContent("Import", 0),
        "/src/project/fileWithTypeRefs.ts": Utils.dedent`
                /// <reference types="pkg2"/>
                /// <reference types="pkg3"/>
                interface LocalInterface extends ImportInterface2, RequireInterface3 {}
                export {}
            `,
        "/src/project/randomFileForTypeRef.ts": getRandomFileContent(),
        "/src/project/node_modules/pkg2/index.d.ts": getPkgTypeRefContent("Import", 2),
        "/src/project/node_modules/@types/pkg4/index.d.ts": getRandomFileContent(),
    };
}

export function getFsWithOut() {
    return loadProjectFromFiles(getFsMapWithOut());
}

export function getWatchSystemWithOut() {
    const system = createWatchedSystem(getFsMapWithOut(), { currentDirectory: "/src/project" });
    system.ensureFileOrFolder(libFile);
    return system;
}

export function getServerHostWithOut() {
    const system = createServerHost(getFsMapWithOut(), { currentDirectory: "/src/project" });
    system.ensureFileOrFolder(libFile);
    return system;
}

export function getWatchSystemWithOutWithBuild() {
    return getSystemWithBuild(getWatchSystemWithOut);
}

export function getServerHostWithOutWithBuild() {
    return getSystemWithBuild(getServerHostWithOut);
}