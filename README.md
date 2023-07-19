<h1 align="center">
   Conhecendo EXPO ROUTER
</h1>

Iremos criar uma projeto expo utilizando as seguintes ferramentas e versão.

<h1 align="center">
    <a href="https://imgur.com/UOG4Ldz"><img src="https://i.imgur.com/UOG4Ldz.png" title="source: imgur.com" /></a>
    <br />
</h1>

Expo 49
React Native 0.72.3

# Criar o projeto
npx create-expo-app@latest --template black-typescript@sdk-49

# Biblioteca externa

Native base
https://nativebase.io/

expo router
npx expo install expo-router react-native-safe-area-context react-native-screens 
expo-linking expo-constants expo-status-bar react-native-gesture-handler

# Configurações

trocar o nome que vem por padrão
package.json -> "main": "expo-router/entry"

adicionar essas informações no app.json
schema  : "mesmo nome da aplicação"
web     : "bundler": "metro"

adicionar o plugins do babel 
babel.config.js -> plugins: ['expo-router/babel'],

# Licença

Este projeto está sob a licença CC0-1.0. Caso gostaria de ler, por favor acessar a licença aqui neste link [LICENSE](https://github.com/SilvaneiMartins/fluxo-login-expo-router/blob/master/LICENSE) para maiores informações.

# Desenvolvedor

<a href="https://github.com/SilvaneiMartins">
    <img
        style="border-radius:50%"
        src="https://github.com/SilvaneiMartins.png"
        width="100px;"
        alt="Silvanei Martins"
    />
    <br />
    <sub>
        <b>Silvanei de Almeida Martins</b>
    </sub>
</a>
     <a href="https://github.com/SilvaneiMartins" title="Silvanei martins" >
 </a>
<br />
🚀 Feito com ❤️ por Silvanei Martins
