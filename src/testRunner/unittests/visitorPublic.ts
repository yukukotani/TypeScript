import * as ts from "../_namespaces/ts";
import { Node, nullTransformationContext, visitEachChild } from "../_namespaces/ts";

describe("unittests:: visitorPublic", () => {
    function visitsCorrectly(name: string, source: { file: string, text: string }) {
        it(name, () => {
            const file = ts.createSourceFile(source.file, source.text, ts.ScriptTarget.ESNext);
            function visitor(node: Node): Node | readonly Node[] | undefined {
                return visitEachChild(node, visitor, nullTransformationContext);
            }
            ts.visitNode(file, visitor);
        });
    }

    const sources = [
    {
        file: "parserIndexSignature3.ts",
        text: `
            interface I {
            [a?]
            }`
    },
    {
        file: "decoratorOnFunctionDeclaration.ts",
        text: `
            declare function dec<T>(target: T): T;

            @dec
            function F() {
            }`
    }];

    visitsCorrectly("index signature without type", sources[0]);
    visitsCorrectly("function declaration with decorator", sources[1]);
});
