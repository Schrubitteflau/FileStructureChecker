import { Tools } from "..";

import * as ts from "typescript";

abstract class AbstractNodeVisitor<T extends ts.Node>
{
    protected readonly node: T;
    protected readonly source: ts.SourceFile;
    protected readonly typeChecker: ts.TypeChecker;

    constructor(node: T, source: ts.SourceFile, typeChecker: ts.TypeChecker)
    {
        this.node = node;
        this.source = source;
        this.typeChecker = typeChecker;
    }
}

export default AbstractNodeVisitor;