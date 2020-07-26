import * as ts from "typescript";

interface IGlobalContext
{
    program: ts.Program;
    checker: ts.TypeChecker;
}

class GlobalContextError extends Error {}

let isGlobalContextInitialized: boolean = false;
const globalContext: IGlobalContext = {} as IGlobalContext;

export function createGlobalContext(context: IGlobalContext)
{
    if (isGlobalContextInitialized)
    {
        throw new GlobalContextError("You can't recreate the global context");
    }
    Object.assign(globalContext, context);
    isGlobalContextInitialized = true;
}

export function getGlobalContext(): IGlobalContext
{
    if (!isGlobalContextInitialized)
    {
        throw new GlobalContextError("You must create the global context before use it");
    }
    return globalContext;
}