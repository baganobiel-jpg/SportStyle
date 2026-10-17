# SportStyle — Relatório de correções

## Como abrir
Descompacte e abra `index.html` (a estrutura de pastas `css/` e `js/` precisa ser mantida). Para o login com senha criptografada funcionar em 100% dos navegadores, prefira abrir via servidor local (ex.: extensão *Live Server* do VS Code); abrindo direto o arquivo também funciona.

## Código — o que foi corrigido

- **Preços no formato brasileiro** (`R$ 1.299,90`) em todo o site; antes aparecia `R$ 1299.90`.
- **Botão "Adicionar" dos cards** mandava tênis/roupas com tamanho "Único". Agora produtos com mais de um tamanho/cor levam para a página do produto ("Escolher opções"); só os de tamanho único (bonés) adicionam direto.
- **Carrinho**: itens idênticos agora somam quantidade (antes duplicavam linhas); guarda só id/tamanho/cor/qtd e busca o preço no catálogo (não fica com preço velho); limite de 10 por item; migra carrinhos antigos; sincroniza entre abas; mostra total por item; **frete** (R$ 24,90, grátis acima de R$ 399,90) com barra de progresso; cupom também aplica com Enter.
- **Checkout**: exige login (redireciona para `login.html` e volta ao carrinho); esvazia a lista na tela depois da compra (antes os itens continuavam visíveis atrás do modal); fecha com Esc.
- **Login/cadastro**: senha agora é salva como hash SHA-256 (antes em texto puro); contas antigas migram sozinhas no primeiro login; e-mail case-insensitive; confirmação de senha; mínimo 6 caracteres; redirecionamento seguro pós-login; menu do usuário fecha ao clicar fora/Esc.
- **Busca**: ignora acentos ("calca" acha "Calça"), procura em nome + marca + categoria + cor, vários termos juntos; busca do topo filtra na hora quando já está no catálogo; filtros ficam na URL (link compartilhável); botão "Limpar filtros"; paginação "Ver mais" (24 por vez); título do banner muda conforme a categoria/marca.
- **Página do produto**: breadcrumb com a categoria e o nome do produto, parcelamento, `label`s corrigidos (apontavam para ids inexistentes), relacionados priorizam a mesma marca, tratamento de produto inexistente.
- **Home**: estatísticas agora são calculadas do catálogo (dizia "+60 produtos", são 154; "15+ marcas", são 14); newsletter funciona (valida e-mail); destaques escolhidos por ID (antes por posição na lista, frágil); texto repetido no hero ("seleção selecionados") corrigido; slideshow pausa no hover/aba oculta e respeita "reduzir movimento".
- **Navegação**: menu consistente em todas as páginas (o carrinho dizia "Masculino"), link ativo destacado, rodapé com links, favicon, meta description, "pular para o conteúdo".
- **Imagem de reserva** ("SPORTSTYLE") quando uma foto externa não carrega.
- **Performance**: cards montados em uma única operação (antes `innerHTML +=` em loop, lento com 154 produtos).
- **CSS**: sobras de cor laranja trocadas pelo vermelho do tema; seletor que desalinhava os títulos das seções; mobile com 2 colunas de produtos; esteira de marcas ficava maior no celular que no desktop; sem rolagem lateral em 375px (testado).

## Catálogo — o que foi corrigido

- Removido produto duplicado exato (*Puma Suede Classic*, igual ao outro).
- *Nike Air Max 95* tinha nome idêntico a outro → renomeado para *Air Max 95 Multicolor*.
- **Camisas de Time**: as 9 camisas que eu havia movido para lá por engano (eram camisetas Nike comuns) voltaram para **Camisas**, com marca Nike e nomes novos baseados na cor (ex.: *Camiseta Nike Amarela*, *Camiseta Nike Azul Royal*). Descrições também foram trocadas por textos genéricos.
- **8 camisas de time novas** na aba Camisas de Time, cada uma com sua marca: Flamengo I 21/22 (Adidas), França (Nike), Portugal (Nike), Corinthians (Nike), Argentina (Adidas), São Paulo (New Balance), Chelsea (Nike) e Manchester City (Puma). A aba tem agora 11 camisas (3 antigas do Brasil + 8 novas), e a marca New Balance aparece nos filtros.
- Conjunto Nike Tech Fleece usava foto de camiseta Denim Tears → usa a foto da Tech Fleece.
- Typo em descrição do boné Adidas.

## Preços — redução geral, nenhum acima de R$ 499,90

Regra aplicada a **todos** os produtos (a ordem de "mais barato → mais caro" entre eles foi mantida):

- até R$ 300: desconto de 15%;
- acima de R$ 300: o preço é comprimido de forma proporcional, de modo que o mais caro do site (Air Jordan 1 Low, antes R$ 999,90) fica em R$ 499,90;
- todos os valores terminam em ,90.

Exemplos: Air Force 1 White R$ 599,90 → R$ 359,90 · Dunk Low Panda R$ 799,90 → R$ 429,90 · Asics Gel NYC R$ 799,90 → R$ 429,90 · Camisas de time R$ 199,90 → R$ 169,90.

Como os preços caíram, o **frete grátis** passou de R$ 399,90 para **R$ 299,90** e as faixas do filtro de preço agora são: até R$ 100 · R$ 100–200 · R$ 200–350 · R$ 350–500. Para mudar o frete grátis, altere `FRETE_GRATIS_ACIMA` em `js/carrinho.js`.

Tabela completa (ID · produto · preço do seu arquivo original · preço atual; produtos novos não têm "antes"):

| ID | Produto | Antes | Agora |
|---|---|---|---|
| 1 | Camisa Brasil Amarela 2026 | R$ 199,90 | R$ 169,90 |
| 2 | Camisa Brasil Azul 2026 | R$ 199,90 | R$ 169,90 |
| 3 | Camiseta NK Total 90 | R$ 149,90 | R$ 129,90 |
| 4 | Camiseta Puma Run 75 | R$ 139,90 | R$ 119,90 |
| 5 | Camiseta NK Middle | R$ 129,90 | R$ 109,90 |
| 6 | Camiseta NK Sportswear | R$ 139,90 | R$ 119,90 |
| 7 | Camiseta Denim Tears | R$ 169,90 | R$ 189,90 |
| 8 | Retrô Seleção Brasil 2002 | R$ 179,90 | R$ 149,90 |
| 9 | Camisa Polo Lacoste Classic | R$ 289,90 | R$ 249,90 |
| 10 | Camisa Polo Lacoste Sport | R$ 299,90 | R$ 249,90 |
| 11 | Camisa Lacoste Slim Fit | R$ 279,90 | R$ 249,90 |
| 12 | Camisa Syna World Signature | R$ 249,90 | R$ 209,90 |
| 13 | Camisa Syna World Track | R$ 239,90 | R$ 209,90 |
| 14 | Camisa Syna World Logo | R$ 259,90 | R$ 209,90 |
| 15 | Camisa Syna World Premium | R$ 269,90 | R$ 209,90 |
| 16 | Camiseta Denim Tears Cotton | R$ 219,90 | R$ 189,90 |
| 17 | Camiseta Denim Tears Black | R$ 209,90 | R$ 189,90 |
| 160 | Camisa Flamengo I 21/22 Adidas | — | R$ 169,90 |
| 161 | Camisa França Nike | — | R$ 169,90 |
| 162 | Camisa Portugal Nike | — | R$ 169,90 |
| 163 | Camisa Corinthians Nike | — | R$ 169,90 |
| 164 | Camisa Argentina Adidas | — | R$ 169,90 |
| 165 | Camisa São Paulo New Balance | — | R$ 169,90 |
| 166 | Camisa Chelsea Nike | — | R$ 169,90 |
| 167 | Camisa Manchester City Puma | — | R$ 169,90 |
| 86 | Camiseta Nike Amarela | R$ 219,90 | R$ 119,90 |
| 87 | Camiseta Nike Verde | R$ 199,90 | R$ 119,90 |
| 88 | Camiseta Nike Azul Royal | R$ 199,90 | R$ 119,90 |
| 89 | Camiseta Nike SB Skate | R$ 149,90 | R$ 129,90 |
| 90 | Camiseta Nike Essential | R$ 129,90 | R$ 109,90 |
| 91 | Camiseta Nike Vermelha e Preta | R$ 199,90 | R$ 119,90 |
| 92 | Camiseta Nike Tie Dye | R$ 159,90 | R$ 139,90 |
| 93 | Camiseta Nike Preta | R$ 189,90 | R$ 119,90 |
| 94 | Camiseta NK Club Branca | R$ 119,90 | R$ 99,90 |
| 95 | Camiseta NK Club Preta | R$ 119,90 | R$ 99,90 |
| 96 | Camiseta NK Sportswear Classic | R$ 139,90 | R$ 119,90 |
| 97 | Camiseta Nike Celeste e Branca | R$ 199,90 | R$ 119,90 |
| 98 | Camiseta Nike Branca | R$ 189,90 | R$ 119,90 |
| 99 | Camiseta Nike Amarela Dri-FIT | R$ 199,90 | R$ 119,90 |
| 100 | Camiseta Nike Azul Celeste | R$ 199,90 | R$ 119,90 |
| 120 | Camiseta Adidas 3-Stripes Branca | R$ 129,90 | R$ 109,90 |
| 121 | Camiseta Adidas Originals Gráfica | R$ 149,90 | R$ 129,90 |
| 122 | Camiseta Adidas JV Soft Branca | R$ 139,90 | R$ 119,90 |
| 123 | Camiseta Adidas 3-Stripes Cinza | R$ 129,90 | R$ 109,90 |
| 140 | Camiseta Puma Essential Logo | R$ 119,90 | R$ 99,90 |
| 141 | Camiseta Puma Logo Lab Preta | R$ 129,90 | R$ 109,90 |
| 142 | Camiseta Puma Esportiva | R$ 109,90 | R$ 89,90 |
| 143 | Camiseta Puma Logo Tee Azul | R$ 119,90 | R$ 99,90 |
| 144 | Camiseta Puma Classics | R$ 129,90 | R$ 109,90 |
| 145 | Camiseta Puma Original Branca | R$ 139,90 | R$ 119,90 |
| 500 | Conjunto Nike Tech Fleece Preto | R$ 549,90 | R$ 379,90 |
| 20 | Calça Jeans Tommy | R$ 249,90 | R$ 209,90 |
| 21 | Calça Baggy Trip Cargo | R$ 279,90 | R$ 199,90 |
| 22 | Calça NK Sportswear | R$ 229,90 | R$ 199,90 |
| 23 | Calça Jeans Diesel | R$ 269,90 | R$ 249,90 |
| 24 | Calça Syna World Trackpant | R$ 319,90 | R$ 259,90 |
| 25 | Calça Syna World Wide Leg | R$ 329,90 | R$ 259,90 |
| 26 | Calça Syna World Cargo | R$ 339,90 | R$ 259,90 |
| 27 | Calça Syna World Jogger | R$ 299,90 | R$ 259,90 |
| 28 | Bermuda Corteiz Cargo | R$ 259,90 | R$ 229,90 |
| 29 | Bermuda Corteiz Alcatraz | R$ 269,90 | R$ 229,90 |
| 35 | Bermuda Denim Tears | R$ 289,90 | R$ 239,90 |
| 36 | Bermuda Denim Tears Cotton | R$ 279,90 | R$ 239,90 |
| 101 | Bermuda Nike Dri-FIT Preta | R$ 159,90 | R$ 139,90 |
| 102 | Bermuda Nike Club Cinza | R$ 149,90 | R$ 129,90 |
| 103 | Bermuda Nike SB Laranja | R$ 139,90 | R$ 119,90 |
| 104 | Bermuda Nike SB Verde | R$ 139,90 | R$ 119,90 |
| 105 | Bermuda Nike Sportswear Premium | R$ 169,90 | R$ 139,90 |
| 106 | Bermuda Nike Color Preto | R$ 129,90 | R$ 109,90 |
| 107 | Bermuda Nike STS Branca | R$ 129,90 | R$ 109,90 |
| 108 | Bermuda Nike Dri-FIT Azul | R$ 159,90 | R$ 139,90 |
| 109 | Bermuda Nike Heritage | R$ 149,90 | R$ 129,90 |
| 110 | Bermuda Nike Tech Woven | R$ 189,90 | R$ 159,90 |
| 111 | Bermuda Nike SB Grafite | R$ 139,90 | R$ 119,90 |
| 124 | Calça Adidas Moletom 3-Stripes | R$ 219,90 | R$ 189,90 |
| 125 | Bermuda Adidas OG Verde | R$ 169,90 | R$ 139,90 |
| 126 | Calça Adidas Digaspi Track | R$ 199,90 | R$ 169,90 |
| 146 | Calça Puma ESS Slim Moletom | R$ 199,90 | R$ 169,90 |
| 147 | Calça Puma Track Preta | R$ 219,90 | R$ 189,90 |
| 148 | Bermuda Puma Woven 5" Verde | R$ 149,90 | R$ 129,90 |
| 30 | Nike Air Force 1 White | R$ 599,90 | R$ 359,90 |
| 31 | Nike Air Max 95 | R$ 749,90 | R$ 409,90 |
| 32 | Adidas ADI2000 | R$ 699,90 | R$ 359,90 |
| 33 | Puma Suede Classic | R$ 449,90 | R$ 309,90 |
| 34 | Asics Gel NYC | R$ 799,90 | R$ 429,90 |
| 37 | Asics Gel NYC Cream | R$ 829,90 | R$ 429,90 |
| 38 | Asics Gel NYC Blue | R$ 819,90 | R$ 429,90 |
| 39 | Asics Gel NYC White | R$ 809,90 | R$ 429,90 |
| 44 | Asics Gel NYC Grey | R$ 799,90 | R$ 429,90 |
| 45 | Asics Gel NYC Special | R$ 849,90 | R$ 449,90 |
| 46 | Tênis Lacoste Court | R$ 649,90 | R$ 379,90 |
| 72 | Nike Air Max 270 Branco | R$ 649,90 | R$ 379,90 |
| 73 | Nike Dunk Low Panda | R$ 799,90 | R$ 429,90 |
| 74 | Nike Air Force 1 Preto | R$ 699,90 | R$ 359,90 |
| 75 | Nike Pegasus Trail | R$ 579,90 | R$ 349,90 |
| 76 | Nike Air Max Plus | R$ 749,90 | R$ 409,90 |
| 77 | Nike Cortez | R$ 499,90 | R$ 319,90 |
| 78 | Nike SB Dunk Low | R$ 849,90 | R$ 449,90 |
| 79 | Nike Shox | R$ 899,90 | R$ 459,90 |
| 80 | Nike Air Jordan 1 Low | R$ 999,90 | R$ 499,90 |
| 81 | Nike Vomero 18 | R$ 679,90 | R$ 389,90 |
| 82 | Nike Air Max 95 Multicolor | R$ 729,90 | R$ 409,90 |
| 134 | Adidas Forum Low Branco | R$ 549,90 | R$ 339,90 |
| 135 | Adidas Samba OG | R$ 699,90 | R$ 389,90 |
| 136 | Adidas ADI2000 Preto | R$ 599,90 | R$ 359,90 |
| 137 | Adidas Superstar | R$ 499,90 | R$ 319,90 |
| 138 | Adidas Campus 00s | R$ 649,90 | R$ 379,90 |
| 139 | Adidas Gazelle Indoor | R$ 579,90 | R$ 349,90 |
| 155 | Puma RS-X | R$ 499,90 | R$ 319,90 |
| 156 | Puma Mayze | R$ 479,90 | R$ 319,90 |
| 157 | Puma Suede Azul | R$ 449,90 | R$ 309,90 |
| 158 | Puma 180 Branco Vermelho | R$ 549,90 | R$ 319,90 |
| 159 | Puma Caven 2.0 Preto | R$ 399,90 | R$ 289,90 |
| 40 | Boné Gucci Tradicional | R$ 199,90 | R$ 269,90 |
| 41 | Boné NK Icon Futura Big | R$ 129,90 | R$ 109,90 |
| 42 | Boné Supreme | R$ 149,90 | R$ 209,90 |
| 43 | Boné Lacoste Sport | R$ 139,90 | R$ 119,90 |
| 47 | Boné Lacoste Premium | R$ 159,90 | R$ 139,90 |
| 48 | Boné Lacoste Classic | R$ 149,90 | R$ 129,90 |
| 49 | Boné Lacoste Trucker | R$ 169,90 | R$ 139,90 |
| 54 | Boné Lacoste Full Cap | R$ 179,90 | R$ 149,90 |
| 55 | Boné Gucci GG Supreme | R$ 449,90 | R$ 309,90 |
| 56 | Boné Tommy Hilfiger Flag | R$ 179,90 | R$ 149,90 |
| 57 | Boné Tommy Hilfiger Classic | R$ 169,90 | R$ 139,90 |
| 112 | Boné Nike H86 Futura Branco | R$ 89,90 | R$ 79,90 |
| 113 | Boné Nike Dri-FIT Preto | R$ 99,90 | R$ 79,90 |
| 114 | Boné Nike Club Preto | R$ 89,90 | R$ 79,90 |
| 115 | Boné Nike Club Marrom | R$ 89,90 | R$ 79,90 |
| 116 | Boné Nike Dri-FIT Verde | R$ 99,90 | R$ 79,90 |
| 117 | Boné Nike Preto Aba Reta | R$ 94,90 | R$ 79,90 |
| 118 | Boné Nike Club Rosa | R$ 89,90 | R$ 79,90 |
| 119 | Boné Nike Club Futura Bege | R$ 89,90 | R$ 79,90 |
| 128 | Boné Adidas Aeroready Branco | R$ 79,90 | R$ 69,90 |
| 129 | Boné Adidas Run Preto | R$ 74,90 | R$ 59,90 |
| 130 | Boné Adidas Velcita Preto | R$ 84,90 | R$ 69,90 |
| 131 | Boné Adidas Azul | R$ 79,90 | R$ 69,90 |
| 132 | Boné Adidas Originals Bege | R$ 84,90 | R$ 69,90 |
| 133 | Boné Adidas Trefoil Verde | R$ 84,90 | R$ 69,90 |
| 152 | Boné Puma Velcita Preto | R$ 74,90 | R$ 59,90 |
| 153 | Boné Puma Azul | R$ 74,90 | R$ 59,90 |
| 50 | Jaqueta Puffer | R$ 399,90 | R$ 289,90 |
| 51 | Casaco NK x Stussy | R$ 449,90 | R$ 309,90 |
| 52 | Casaco Syna World | R$ 429,90 | R$ 299,90 |
| 53 | Casaco Corteiz Island Stencil | R$ 459,90 | R$ 309,90 |
| 60 | Casaco Syna World Track | R$ 459,90 | R$ 309,90 |
| 61 | Casaco Corteiz Alcatraz | R$ 479,90 | R$ 319,90 |
| 62 | Casaco Corteiz Crtz Windbreaker | R$ 489,90 | R$ 319,90 |
| 63 | Casaco Corteiz Rule The World | R$ 469,90 | R$ 309,90 |
| 65 | Casaco Tommy Hilfiger Puffer | R$ 549,90 | R$ 339,90 |
| 66 | Casaco Tommy Hilfiger Bomber | R$ 529,90 | R$ 339,90 |
| 67 | Jaqueta Tommy Hilfiger Sport | R$ 499,90 | R$ 319,90 |
| 68 | Jaqueta Tommy Hilfiger Navy | R$ 479,90 | R$ 319,90 |
| 69 | Jaqueta Tommy Hilfiger Velejador | R$ 519,90 | R$ 329,90 |
| 70 | Casaco Denim Tears Cotton Wreath | R$ 599,90 | R$ 359,90 |
| 71 | Casaco Denim Tears Collab | R$ 579,90 | R$ 349,90 |
| 83 | Jaqueta Nike Windrunner | R$ 449,90 | R$ 309,90 |
| 84 | Jaqueta Nike Tech Fleece | R$ 499,90 | R$ 319,90 |
| 85 | Casaco Nike Club Fleece | R$ 389,90 | R$ 289,90 |
| 127 | Jaqueta Adidas Track Preta | R$ 349,90 | R$ 269,90 |
| 149 | Jaqueta Puma EvoStripe Core | R$ 329,90 | R$ 269,90 |
| 150 | Casaco Puma Cadiles | R$ 299,90 | R$ 249,90 |
| 151 | Jaqueta Puma Track Azul | R$ 309,90 | R$ 259,90 |

## Pendências que dependem de você

1. **Fotos de terceiros.** As camisas novas (menos o Flamengo) usam miniaturas do Google (`encrypted-tbn0.gstatic.com`), que **costumam expirar**. Antes da entrega, baixe todas as fotos para uma pasta `img/` e troque os links no `js/produtos.js` — assim a apresentação não quebra. Se uma foto sumir, aparece a imagem de reserva "SPORTSTYLE".
2. **Confira as cores das camisas novas** (campo `cores` no `js/produtos.js`): como não consegui ver as fotos, usei a cor principal do time (França azul, Portugal vermelho, Corinthians branco, Argentina celeste/branco, São Paulo branco, Chelsea azul, Man City azul celeste). Os nomes das 9 camisetas Nike que saíram da aba de time foram escolhidos pela cor; se quiser nomes melhores, é só editar o `nome`.
3. **Fotos repetidas**: *Adidas ADI2000* e *Adidas Gazelle Indoor* usam a mesma foto; um dos dois está errado.
4. **Fotos de baixa resolução** (ids 1, 2, 68, 82, 123 e o slide 2 do hero) ficam borradas em tela grande.
5. **Conjuntos** tem só 1 produto; adicione mais ou remova a categoria do filtro.
6. Cupons de teste: `SPORT10` (10%), `BEMVINDO15` (15%), `FEIRA20` (20%).
7. É uma loja de demonstração (login e pedido ficam no navegador, sem servidor). Vale deixar isso claro na apresentação do TCC.
