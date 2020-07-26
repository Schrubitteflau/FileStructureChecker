import { Tools } from "..";
import AbstractNodeVisitor from "./AbstractNodeVisitor";

import * as ts from "typescript";

class PropertySignatureNodeVisitor extends AbstractNodeVisitor<ts.PropertySignature>
{
    // node.name: ts.PropertyName => Idenfifier
    // node.type: ts.TypeNode => StringKeyword | BooleanKeyword | ... | TypeReference
    
    constructor(node: ts.PropertySignature, source: ts.SourceFile, typeChecker: ts.TypeChecker)
    {
        super(node, source, typeChecker);

        //console.log(this.node.type?.getText(this.source));
        //console.log(this.node.type);
        //console.log(this.node.type?.modifiers);

        

        const type = this.node.type!;

        const ttype = this.typeChecker.getTypeFromTypeNode(type);

        console.log(ttype.isClass());
        console.log(ttype.getDefault());
        console.log(ttype.getSymbol());

        // @ts-ignore
        console.log(Tools.tsSyntaxKindToString(this.node.type?.kind));
    }

    // https://github.com/Microsoft/TypeScript/issues/200988

    public get propertyName(): string
    {
        return this.node.name.getText(this.source);
    }
}

export default PropertySignatureNodeVisitor;