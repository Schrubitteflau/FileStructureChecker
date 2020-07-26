import { FSTypes } from "../src/lib";

declare interface t
{
    a: FSTypes.JSONFile<t2>;
    b: FSTypes.Folder;
}

declare interface t2
{
    a: string;
}