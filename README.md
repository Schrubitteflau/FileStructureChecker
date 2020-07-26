# FileStructureChecker

Le but était à l'origine de fournir un set de fonctions pour effectuer des vérifications sur la structure d'un dossier.

Quelque chose comme ça :

```ts

interface ICustomFile = {
    name: string,
    bar: [
        { foo: string[] }
    ]
}

interface ICustomFolder extends FSTypes.Folder = {
    file1: FSTypes.TextFile,
    file2: FSTypes.JSONFile<ICustomFile>
}

interface ICustomTree = {
    myFolder: ICustomFolder,
    myFile: FSTypes.AudioFile
}

isTreeValid<ICustomTree>("/path/to/check");
```

# TypeScript compiler API

Puisque la notion de type disparaît après la transpilation, il faut effectuer l'analyse des types au moment de la transpilation.

Je me suis donc initié à l'API Compiler de TypeScript, qui permet notamment de manipuler l'AST (Abstract Syntax Tree).

J'ai appris diverses choses comme l'utilisation basique d'un "transformer", mais aussi comment parcourir les noeuds lors de la création d'un programme TypeScript.

Le manque de motivation concernant cette API m'a découragé, mais j'ai appris beaucoup de choses concernant l'utilisation de celle-ci et le processus de transpilation en général.

J'ai également découvert cette bibliothèque : https://github.com/woutervh-/typescript-is, donc je me servirai probablement lors de futurs projets.

# Conclusion

Au final, ce repository est plus un environnement de test qu'un vrai projet, environnement dans lequel j'ai réuni toutes mes recherches à propos de cette API.

# Annexe

Pour utiliser le transformeur, utiliser la commande ```npx ttsc```, qui va appeler TTypeScript qui est un wrapper au transpileur classique de TypeScript, il permet de prendre en compte simplement les options telles que le transformeur défini au niveau de la clé "plugins" de *tsconfig.json*, sans passer par de la programmation.