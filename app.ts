import * as Tools from "./src/transformer/Tools";

import { test } from "./src";

test();

/*import { join } from "path";
import * as ts from "typescript";

import { VisitNode } from "./lib";

const path = join(__dirname, "..", "types", "type.d.ts");

const program = ts.createProgram([ path ], {});
const source = program.getSourceFile(path);
const typeChecker = program.getTypeChecker();

if (source)
{
    source.forEachChild(s =>
    {
        if (s.kind === ts.SyntaxKind.InterfaceDeclaration)
        {
            let a = new VisitNode.InterfaceDeclarationNodeVisitor(s as ts.InterfaceDeclaration, source, typeChecker);
        }
    });
}
else
{
    console.log("No source");
}*/

/*import * as ts from "typescript";
import { join } from "path";

import { testType } from "./lib/test";

testType<string>();*/


/*const path = join(__dirname, "..", "types", "test.ts");
const program = ts.createProgram([ path ], {});
const source = program.getSourceFile(path);
const typeChecker = program.getTypeChecker();



if (!source)
{
    throw "aie";
}

const symbols = typeChecker.getSymbolsInScope(source, ts.SymbolFlags.Type);

for (const symbol of symbols)
{
    if (symbol.escapedName === "test")
    {
        console.log(symbol);
    }
}*/