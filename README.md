O propósito deste repositório é fazer testes de arquitetura simulando uma espécie de namespace com o `babel-plugin-module-resolver`, que funciona de maneira até mais simples que o `PSR-4, Autoloader` do PHP.

#### exemplo de .babelrc

```json
{
  "plugins": [
    "@babel/plugin-transform-modules-commonjs",
    ["module-resolver", {
      "alias": {
        "Root": "./src/",
        "Comercial": "./src/controller/Comercial"
      }
    }]
  ]
}
```