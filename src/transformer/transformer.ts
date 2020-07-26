import * as ts from "typescript";

import { createGlobalContext, getGlobalContext } from "./GlobalContext";
import * as Tools from "./Tools";

// Un transformeur peut accéder à l'AST (Abstract Syntax Tree) afin d'accéder et éventuellement
// de le modifier lors de la compilation.
// Ce transformeur est une fonction qui retourne un ts.TransformerFactory<T> :
// type TransformerFactory<T extends Node> = (context: TransformationContext) => Transformer<T>;
// Un TransformerFactory<T> correspond donc à une fonction qui sert à initialiser et retourner un
// ts.Transformer<T> :
// type Transformer<T extends Node> = (node: T) => T;
// Un Transformer<T> est une fonction qui transforme un ts.Node
// Le type Visitor sera rencontré lors du parcours des ts.Node :
// type Visitor = (node: Node) => VisitResult<Node>;
// type VisitResult<T extends Node> = T | T[] | undefined;
// Une fonction de type Visitor est donc une fonction qui prend un noeud en paramètre, et qui
// retourne 0, 1 ou plusieurs noeuds qui vont se substituer à celui en paramètre dans l'AST.
// Pour faire simple, un transformeur est une fonction qui accepte un Node et qui retourne un Node.

export default function transformer<T extends ts.SourceFile>(program: ts.Program): ts.TransformerFactory<T>
{
    createGlobalContext({
        program,
        checker: program.getTypeChecker()
    });

    const factory: ts.TransformerFactory<T> = function (context: ts.TransformationContext)
    {
        const visit: ts.Visitor = function (node: ts.Node)
        {
            // Si le noeud correspond à l'appel d'une fonction de vérification de type définie par la bibliothèque
            if (ts.isCallExpression(node) && Tools.isTypeConstraintFunction(node))
            {
                return ts.createArrowFunction
                (
                    undefined,
                    undefined,
                    [
                        ts.createParameter
                        (
                            undefined,
                            undefined,
                            undefined,
                            "test",
                            undefined,
                            ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
                        )
                    ],
                    undefined,
                    undefined,
                    ts.createBlock
                    (
                        [
                            ts.createReturn(ts.createTrue())
                        ]
                    )
                );
            }

            return ts.visitEachChild(node, child => visit(child), context);
        };

        const transformer: ts.Transformer<T> = function (node)
        {
            return ts.visitNode(node, visit);
        }

        return transformer;
    };

    return factory;
}