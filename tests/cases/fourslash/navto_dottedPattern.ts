/// <reference path="fourslash.ts"/>

// @filename: foo.ts
//// interface Foo { [|bar: string;|] }
//// const bar = 1;

// @filename: someFile.ts
//// export const [|x = 1|];


const [bar, x] = test.ranges();

verify.navigateTo({
    pattern: "Foo.bar",
    expected: [{
        name: "bar",
        kind: "property",
        range: bar,
        matchKind: "exact",
        containerName: "Foo",
        containerKind: "interface",
    }],
});

verify.navigateTo({
    pattern: "someFile.x",
    expected: [{
        name: "x",
        kind: "const",
        kindModifiers: "export",
        range: x,
        matchKind: "exact",
    }]
});