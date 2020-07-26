import { Tools } from "..";
import AbstractNodeVisitor from "./AbstractNodeVisitor";
import PropertySignatureNodeVisitor from "./PropertySignatureNodeVisitor";

import * as ts from "typescript";

class InterfaceDeclarationNodeVisitor extends AbstractNodeVisitor<ts.InterfaceDeclaration>
{
    constructor(node: ts.InterfaceDeclaration, source: ts.SourceFile, typeChecker: ts.TypeChecker)
    {
        super(node, source, typeChecker);

        this.visit();
    }

    private visit(): void
    {
        this.node.forEachChild(child =>
        {
            if (child.kind === ts.SyntaxKind.PropertySignature)
            {
                let a = new PropertySignatureNodeVisitor(child as ts.PropertySignature, this.source, this.typeChecker);
            }
        });
    }
}

/*
declare interface IInterface
{
    prop1: string;
    prop2: Folder;
    prop3: bool;
}

Nodes :
    InterfaceDeclaration
        DeclareKeyword
        Identifier
        PropertySignature
        PropertySignature
        PropertySignature
*/

export default InterfaceDeclarationNodeVisitor;