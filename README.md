# SAMI - Teste Front-end

## Visão Geral

O objetivo do teste é poder buscar, listar e detalhar super-heróis se comunicando com a API https://superheroapi.com/.

## Rodando o APP

Para fazer, instale as dependências do projeto:
```
npm install
```

Depois rode o projeto com:
```
npm start
```

O servidor deve iniciar automaticamente. Caso contrário, você pode acessar o link:
- [localhos:3000](http://localhost:3000)

Agora é so digitar o nome do seu super-herói favorito e apertar "Enter" com toda sua força para assistir o React e Redux fazer toda a mágica.

## Observações

* No descritivo do teste foi solicitado filtros por poderes, porém, a API https://superheroapi.com/ não possui tais informações. Ela lista informação de poderes baseadas em pontuações. Não se caracterizam dados para filtragem.
* O projeto foi configurado para trabalhar com Redux DevTools! Então caso não possua a extensão do chrome eu aconselho seriamente você a instalar para que possa acompanhar a atualização dos Estados em tempo real. Permitindo melhor depuração do código.
* É extremamente necessário que você instale uma extensão do chrome para dar 'bypass' no CORS. A api https://superheroapi.com/ não possui consiguração de CORS impossibilitando o funcionamento no APP. Se não der o bypass o APP não funcionará. Recomendo a extensão: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
* Eu poderia ter utilizado 'class based components' no teste, seria até mais cômodo para mim já que tenho proficiêcia com Angular e Typescript. Mas, optei por utiliar componentes funcionais e hooks já de acordo com a tendência do framework que está deixando os 'class based' de lado.
* O APP funciona bem em mobile também.
