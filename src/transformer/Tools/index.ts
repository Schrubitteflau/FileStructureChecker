import * as ts from  "typescript";
import { join, resolve } from "path";

import { getGlobalContext } from "../GlobalContext";

export function isTypeConstraintFunction(node: ts.CallExpression): boolean
{
    const signature: ts.Signature | undefined = getGlobalContext().checker.getResolvedSignature(node);
    
    if (signature)
    {
        const declaration = signature.declaration;

        if (declaration)
        {
            const sourceFile: ts.SourceFile = declaration.getSourceFile();
            const pathTarget = join(__dirname, "..", "..", "index.d.ts");
    
            return (resolve(sourceFile.fileName) === resolve(pathTarget));
        }
    }

    return false;
}

export function tsSyntaxKindToString(kind: ts.SyntaxKind): string
{
    return (ts as any).SyntaxKind[kind];
}