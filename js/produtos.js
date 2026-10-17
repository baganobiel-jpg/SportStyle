/* =========================================================
   SPORTSTYLE — BASE DE PRODUTOS
   ========================================================= */

const camisasMasculinas = [
  {
    id: 1,
    nome: "Camisa Brasil Amarela 2026",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 132,
    descricao: "Camisa oficial da Seleção Brasileira, tecido leve e respirável, ideal para o dia a dia ou prática esportiva.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Amarelo"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/0762c762531bfcef590e5d479aee487f-5be7212b589fa9376317817256005052-480-0.webp"
  },
  {
    id: 2,
    nome: "Camisa Brasil Azul 2026",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 98,
    descricao: "Camisa reserva da Seleção Brasileira, design moderno com tecnologia de ventilação.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/05e038668ca8d8f7c42c3e44e01f61bc-0d6abe8c712d2b2e5a17800849365281-480-0.webp"
  },
  {
    id: 3,
    nome: "Camiseta NK Total 90",
    preco: 129.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 76,
    descricao: "Camiseta inspirada na icônica linha Total 90, corte streetwear e caimento solto.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco", "Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-10-07-at-18-12-31-029a52eebab21780eb17598723457054-1024-1024.webp"
  },
  {
    id: 4,
    nome: "Camiseta Puma Run 75",
    preco: 119.90,
    categoria: "camisas",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 54,
    descricao: "Camiseta esportiva com tecido de secagem rápida, perfeita para treinos.",
    tamanhos: ["P", "M", "G"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/1000254835-bd077dce8162d566af17489885176039-1024-1024.webp"
  },
  {
    id: 5,
    nome: "Camiseta NK Middle",
    preco: 109.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.4,
    avaliacoes: 41,
    descricao: "Modelo clássico do streetwear urbano, algodão premium e estampa central.",
    tamanhos: ["M", "G", "GG"],
    cores: ["Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-10-08-at-08-50-47-2f43989dd67b2782ac17599261362426-1024-1024.webp"
  },
  {
    id: 6,
    nome: "Camiseta NK Sportswear",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 63,
    descricao: "Linha Sportswear com caimento moderno e tecido macio ao toque.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/21d19405fbf7072208354e87a68b7715-ef4139944b6ab9aa0817691754068164-1024-1024.webp"
  },
  {
    id: 7,
    nome: "Camiseta Denim Tears",
    preco: 189.90,
    categoria: "camisas",
    marca: "Denim Tears",
    rating: 4.9,
    avaliacoes: 87,
    descricao: "Peça statement do streetwear contemporâneo, estampa exclusiva.",
    tamanhos: ["P", "M", "G"],
    cores: ["Preto", "Azul"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/1000228227-1c33f688b3d1b71f3017462148545005-1024-1024.webp"
  },
  {
    id: 8,
    nome: "Retrô Seleção Brasil 2002",
    preco: 149.90,
    categoria: "camisas-time",
    marca: "Nike",
    rating: 4.9,
    avaliacoes: 156,
    descricao: "Réplica retrô da camisa do penta de 2002, para os nostálgicos do futebol.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Amarelo"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/brasil-0016a7f3ceb4f2c0af17463049353725-1024-1024.webp"
  },
  // Lacoste
  {
    id: 9,
    nome: "Camisa Polo Lacoste Classic",
    preco: 249.90,
    categoria: "camisas",
    marca: "Lacoste",
    rating: 4.8,
    avaliacoes: 74,
    descricao: "O clássico polo da Lacoste, tecido piqué premium e corte elegante.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwf5af5260/TH1262_240_24.jpg?imwidth=280&impolicy=pctp&imdensity=1"
  },
  {
    id: 10,
    nome: "Camisa Polo Lacoste Sport",
    preco: 249.90,
    categoria: "camisas",
    marca: "Lacoste",
    rating: 4.7,
    avaliacoes: 58,
    descricao: "Polo esportiva Lacoste com tecido de alta performance e corte slim.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    imagem: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw85593dc2/TH1262_YZP_24.jpg?imwidth=280&impolicy=pctp&imdensity=1"
  },
  {
    id: 11,
    nome: "Camisa Lacoste Slim Fit",
    preco: 249.90,
    categoria: "camisas",
    marca: "Lacoste",
    rating: 4.6,
    avaliacoes: 43,
    descricao: "Polo slim fit Lacoste, design minimalista com o famoso crocodilo.",
    tamanhos: ["P", "M", "G"],
    cores: ["Verde"],
    imagem: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwf71a251d/TH2042_EMW_24.jpg?imwidth=280&impolicy=pctp&imdensity=1"
  },
  // Syna World camisas
  {
    id: 12,
    nome: "Camisa Syna World Signature",
    preco: 209.90,
    categoria: "camisas",
    marca: "Syna World",
    rating: 4.8,
    avaliacoes: 55,
    descricao: "Camisa oversized da Syna World com logo bordado, algodão premium.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/c71f32e854cbe503a3994e8f0cecfb9c-d670c5bfeb0f8eeb4717710975997852-1024-1024.webp"
  },
  {
    id: 13,
    nome: "Camisa Syna World Track",
    preco: 209.90,
    categoria: "camisas",
    marca: "Syna World",
    rating: 4.7,
    avaliacoes: 37,
    descricao: "Camisa técnica da Syna World, design streetwear e tecido respirável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/d4156ddfbfb7f544550a3aed08f6f15f-064ff92c7696ff411017768042854878-1024-1024.webp"
  },
  {
    id: 14,
    nome: "Camisa Syna World Logo",
    preco: 209.90,
    categoria: "camisas",
    marca: "Syna World",
    rating: 4.9,
    avaliacoes: 62,
    descricao: "Camiseta com estampa grande do logo Syna World, peça statement.",
    tamanhos: ["M", "G", "GG"],
    cores: ["Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/2fe4fa549edbc78284ff3c514aa7ac95-e00e3a15eaac7d4ffd17738395697247-1024-1024.webp"
  },
  {
    id: 15,
    nome: "Camisa Syna World Premium",
    preco: 209.90,
    categoria: "camisas",
    marca: "Syna World",
    rating: 4.8,
    avaliacoes: 48,
    descricao: "Peça premium da Syna World, detalhes exclusivos e acabamento impecável.",
    tamanhos: ["P", "M", "G"],
    cores: ["Verde"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/e10075a1fe0a26b05da158653971df28-51239798f7cffd179b17713549730159-1024-1024.webp"
  },
  // Denim Tears camisas
  {
    id: 16,
    nome: "Camiseta Denim Tears Cotton",
    preco: 189.90,
    categoria: "camisas",
    marca: "Denim Tears",
    rating: 4.9,
    avaliacoes: 91,
    descricao: "Camiseta icônica com estampa algodão da Denim Tears, peça cultural.",
    tamanhos: ["P", "M", "G"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/1000231657-17b219c94027df6c7317462146894781-1024-1024.webp"
  },
  {
    id: 17,
    nome: "Camiseta Denim Tears Black",
    preco: 189.90,
    categoria: "camisas",
    marca: "Denim Tears",
    rating: 4.8,
    avaliacoes: 73,
    descricao: "Versão preta da camiseta Denim Tears, streetwear contemporâneo.",
    tamanhos: ["P", "M", "G"],
    cores: ["Preto"],
    imagem: "https://www.underboost.com.br/wp-content/uploads/2024/10/Camisa-Denim-Tears-Black.png"
  }
];

const calcasMasculinas = [
  {
    id: 20,
    nome: "Calça Jeans Tommy",
    preco: 209.90,
    categoria: "calcas",
    marca: "Tommy Hilfiger",
    rating: 4.5,
    avaliacoes: 39,
    descricao: "Calça jeans de corte reto, modelagem confortável para o uso diário.",
    tamanhos: ["38", "40", "42", "44"],
    cores: ["Azul"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/555cc37c-1885-45d0-a060-0859dd081568-dbd73fc74806ff5e2717648184617918-1024-1024.webp"
  },
  {
    id: 21,
    nome: "Calça Baggy Trip Cargo",
    preco: 199.90,
    categoria: "calcas",
    marca: "Trip",
    rating: 4.7,
    avaliacoes: 58,
    descricao: "Modelagem baggy com bolsos cargo, referência direta na cultura streetwear.",
    tamanhos: ["38", "40", "42", "44"],
    cores: ["Preto", "Verde"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/b9400d98-2068-428f-b69d-fd5dbc3deb55-9b0719c41ee94eff5017660052635274-1024-1024.webp"
  },
  {
    id: 22,
    nome: "Calça NK Sportswear",
    preco: 199.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 44,
    descricao: "Calça em moletom premium, ideal para compor looks esportivos casuais.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Cinza", "Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/4b6c6455adc42cf64c0b9b921954a2f4-3757238b94fc2ef31017821571615692-1024-1024.webp"
  },
  {
    id: 23,
    nome: "Calça Jeans Diesel",
    preco: 249.90,
    categoria: "calcas",
    marca: "Diesel",
    rating: 4.4,
    avaliacoes: 31,
    descricao: "Jeans premium com lavagem diferenciada e acabamento de alta durabilidade.",
    tamanhos: ["38", "40", "42"],
    cores: ["Azul escuro"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/img_1456-c082b6f6318a79f5d817575404177544-1024-1024.webp"
  },
  // Syna World calças
  {
    id: 24,
    nome: "Calça Syna World Trackpant",
    preco: 259.90,
    categoria: "calcas",
    marca: "Syna World",
    rating: 4.8,
    avaliacoes: 49,
    descricao: "Trackpant premium da Syna World, elástico com logo bordado.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/528a06505951ce9aba871b63ccdd1884-c97a2f0195cbe574e817684203622548-1024-1024.webp"
  },
  {
    id: 25,
    nome: "Calça Syna World Wide Leg",
    preco: 259.90,
    categoria: "calcas",
    marca: "Syna World",
    rating: 4.7,
    avaliacoes: 35,
    descricao: "Wide leg da Syna World, silhueta oversized e tecido de qualidade.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/7f1b5ff2ab58d178d8f344cb4b450f61-e2d35dfbd26ceceab217683223897091-1024-1024.webp"
  },
  {
    id: 26,
    nome: "Calça Syna World Cargo",
    preco: 259.90,
    categoria: "calcas",
    marca: "Syna World",
    rating: 4.6,
    avaliacoes: 28,
    descricao: "Cargo da Syna World com múltiplos bolsos e acabamento streetwear.",
    tamanhos: ["P", "M", "G"],
    cores: ["Verde"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/6ce4fe34edb507814cef3282f4eecf79-6a5353a853e2f6214f17719652717440-1024-1024.webp"
  },
  {
    id: 27,
    nome: "Calça Syna World Jogger",
    preco: 259.90,
    categoria: "calcas",
    marca: "Syna World",
    rating: 4.8,
    avaliacoes: 41,
    descricao: "Jogger confortável da Syna World, punho duplo e logo na lateral.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/img_0985-e03c08d1a45e5ad8d017568387939572-1024-1024.webp"
  },
  // Bermudas — Corteiz
  {
    id: 28,
    nome: "Bermuda Corteiz Cargo",
    preco: 229.90,
    categoria: "calcas",
    marca: "Corteiz",
    rating: 4.8,
    avaliacoes: 57,
    descricao: "Bermuda cargo da Corteiz, corte utilitário e construção premium.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/1739c7109aa87a18724d3fc943389295-12eb74ffa3e47ec7ba17799712085845-1024-1024.webp"
  },
  {
    id: 29,
    nome: "Bermuda Corteiz Alcatraz",
    preco: 229.90,
    categoria: "calcas",
    marca: "Corteiz",
    rating: 4.9,
    avaliacoes: 63,
    descricao: "Bermuda icônica da Corteiz com estampa exclusiva, peça de coleção.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Verde"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/0af11087a7a56c9881d0082c64e1ad2e-b0fc494fd412dffa2f17799713624247-1024-1024.webp"
  },
  // Bermudas — Denim Tears
  {
    id: 35,
    nome: "Bermuda Denim Tears",
    preco: 239.90,
    categoria: "calcas",
    marca: "Denim Tears",
    rating: 4.7,
    avaliacoes: 44,
    descricao: "Bermuda jeans Denim Tears, lavagem exclusiva e estilo cultural.",
    tamanhos: ["38", "40", "42"],
    cores: ["Azul"],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZhuiddl1oC3tX7BDxrIofXd2-82TTWjtHwQ&s"
  },
  {
    id: 36,
    nome: "Bermuda Denim Tears Cotton",
    preco: 239.90,
    categoria: "calcas",
    marca: "Denim Tears",
    rating: 4.8,
    avaliacoes: 38,
    descricao: "Bermuda com estampa algodão da Denim Tears, peça statement.",
    tamanhos: ["38", "40", "42"],
    cores: ["Branco"],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDR_-KD53aN_KrFacdUdDCXdEhLTE4TrZvQ&s"
  }
];

const tenisMasculinos = [
  {
    id: 30,
    nome: "Nike Air Force 1 White",
    preco: 359.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.9,
    avaliacoes: 210,
    descricao: "Clássico atemporal, couro premium e solado em borracha de alta durabilidade.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-11-11-at-19-15-24-2-5dea0699fb2f623ae217629026722496-1024-1024.webp"
  },
  {
    id: 31,
    nome: "Nike Air Max 95",
    preco: 409.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 174,
    descricao: "Amortecimento Air Max visível e design ousado inspirado na anatomia humana.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Branco", "Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/branco-1-1ca7efdf94dbde7c2b17455217906023-1024-1024.webp"
  },
  {
    id: 32,
    nome: "Adidas ADI2000",
    preco: 359.90,
    categoria: "tenis",
    marca: "Adidas",
    rating: 4.6,
    avaliacoes: 92,
    descricao: "Visual retrô-futurista com tripla camada e detalhes em camurça.",
    tamanhos: ["38", "39", "40", "41", "42"],
    cores: ["Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/a7012da7449dbbb66c8d5c9cc4df431e-86b9cc020c7ad632ad17680796761925-1024-1024.webp"
  },
  {
    id: 33,
    nome: "Puma Suede Classic",
    preco: 309.90,
    categoria: "tenis",
    marca: "Puma",
    rating: 4.7,
    avaliacoes: 143,
    descricao: "Puma Suede Classic, ícone do streetwear em camurça premium — desde 1968.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/suede-1-9ab76b5208d4c5cb5517455207836268-1024-1024.webp"
  },
  {
    id: 34,
    nome: "Asics Gel NYC",
    preco: 429.90,
    categoria: "tenis",
    marca: "Asics",
    rating: 4.9,
    avaliacoes: 145,
    descricao: "Tecnologia Gel para máximo conforto, visual urbano valorizado pelos sneakerheads.",
    tamanhos: ["39", "40", "41", "42", "43", "44"],
    cores: ["Preto", "Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/75345320fb84fb3a040cb1fa9562153a-dad0a5aafd77c2639217770868831940-1024-1024.webp"
  },
  // Novos Asics Gel NYC
  {
    id: 37,
    nome: "Asics Gel NYC Cream",
    preco: 429.90,
    categoria: "tenis",
    marca: "Asics",
    rating: 4.9,
    avaliacoes: 112,
    descricao: "Colorway creme exclusivo do Gel NYC, versão mais desejada da temporada.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Creme"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/e533f1b1896460c305f954c85251c538-1beada407b42ee14fa17770872803099-1024-1024.webp"
  },
  {
    id: 38,
    nome: "Asics Gel NYC Blue",
    preco: 429.90,
    categoria: "tenis",
    marca: "Asics",
    rating: 4.8,
    avaliacoes: 89,
    descricao: "Gel NYC em colorway azul, referência absoluta entre os sneakerheads.",
    tamanhos: ["39", "40", "41", "42", "43", "44"],
    cores: ["Azul"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/img_0672-d4a80dbc7c1f9c6fc117563883983461-1024-1024.webp"
  },
  {
    id: 39,
    nome: "Asics Gel NYC White",
    preco: 429.90,
    categoria: "tenis",
    marca: "Asics",
    rating: 4.8,
    avaliacoes: 76,
    descricao: "Versão branca do icônico Gel NYC, clean e versátil para qualquer look.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/img_0660-f1474b72099e86927117563886053668-1024-1024.webp"
  },
  {
    id: 44,
    nome: "Asics Gel NYC Grey",
    preco: 429.90,
    categoria: "tenis",
    marca: "Asics",
    rating: 4.7,
    avaliacoes: 68,
    descricao: "Colorway cinza do Gel NYC, design urban e amortecimento incomparável.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/img_0666-f1b5c0eede02a2365b17563885576154-1024-1024.webp"
  },
  {
    id: 45,
    nome: "Asics Gel NYC Special",
    preco: 449.90,
    categoria: "tenis",
    marca: "Asics",
    rating: 4.9,
    avaliacoes: 54,
    descricao: "Edição especial do Gel NYC, colorway exclusivo de coleção limitada.",
    tamanhos: ["39", "40", "41", "42"],
    cores: ["Multicolor"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-10-14-at-17-18-47-724c1979d4c77fa13117604741198273-1024-1024.webp"
  },
  // Lacoste tênis
  {
    id: 46,
    nome: "Tênis Lacoste Court",
    preco: 379.90,
    categoria: "tenis",
    marca: "Lacoste",
    rating: 4.7,
    avaliacoes: 48,
    descricao: "Tênis court da Lacoste, estilo clássico com construção premium.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Branco"],
    imagem: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw4721f100/50SMA0116_108_01.jpg?imwidth=280&impolicy=pctp&imdensity=1"
  }
];

const bonesMasculinos = [
  {
    id: 40,
    nome: "Boné Gucci Tradicional",
    preco: 269.90,
    categoria: "bones",
    marca: "Gucci",
    rating: 4.7,
    avaliacoes: 48,
    descricao: "Boné de aba curva com fivela ajustável e bordado exclusivo.",
    tamanhos: ["Único"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-11-19-at-19-07-14-330fb07356d025c20e17635904081020-1024-1024.webp"
  },
  {
    id: 41,
    nome: "Boné NK Icon Futura Big",
    preco: 109.90,
    categoria: "bones",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 65,
    descricao: "Logo grande bordado, aba curva clássica e ajuste em velcro.",
    tamanhos: ["Único"],
    cores: ["Preto", "Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/32dd9cda75cc6f523d1ee347d5b51dfd-ceb32c5c8db6808cd317374849346296-1024-1024.webp"
  },
  {
    id: 42,
    nome: "Boné Supreme",
    preco: 209.90,
    categoria: "bones",
    marca: "Supreme",
    rating: 4.8,
    avaliacoes: 102,
    descricao: "Peça de streetwear icônica, alta procura entre colecionadores.",
    tamanhos: ["Único"],
    cores: ["Vermelho"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-10-23-at-16-40-41-4-ad8ef3a13b26757f8917613370258136-320-0.webp"
  },
  {
    id: 43,
    nome: "Boné Lacoste Sport",
    preco: 119.90,
    categoria: "bones",
    marca: "Lacoste",
    rating: 4.5,
    avaliacoes: 37,
    descricao: "Design esportivo minimalista com o crocodilo bordado lateral.",
    tamanhos: ["Único"],
    cores: ["Verde"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/1000268873-e21ca299a3ff00bec817509667099059-320-0.webp"
  },
  // Novos Lacoste bonés
  {
    id: 47,
    nome: "Boné Lacoste Premium",
    preco: 139.90,
    categoria: "bones",
    marca: "Lacoste",
    rating: 4.7,
    avaliacoes: 44,
    descricao: "Boné premium Lacoste, aba estruturada e bordado clássico do crocodilo.",
    tamanhos: ["Único"],
    cores: ["Azul"],
    imagem: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwc8dda7a9/RK4774_UYB_24.jpg?imwidth=280&impolicy=pctp&imdensity=1"
  },
  {
    id: 48,
    nome: "Boné Lacoste Classic",
    preco: 129.90,
    categoria: "bones",
    marca: "Lacoste",
    rating: 4.6,
    avaliacoes: 31,
    descricao: "Boné clássico Lacoste em preto, versátil para qualquer ocasião.",
    tamanhos: ["Único"],
    cores: ["Preto"],
    imagem: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwe15d99c3/RK3864_001_24.jpg?imwidth=280&impolicy=pctp&imdensity=1"
  },
  {
    id: 49,
    nome: "Boné Lacoste Trucker",
    preco: 139.90,
    categoria: "bones",
    marca: "Lacoste",
    rating: 4.8,
    avaliacoes: 27,
    descricao: "Trucker Lacoste com tela traseira, estilo casual e ajuste snapback.",
    tamanhos: ["Único"],
    cores: ["Branco"],
    imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmqDazPQWlF0xzJbEX3rAzmMxDp9pOONDRd8LLY28n2T9cVWNSZWL8OUuk4TsL3KHK6UB1HDTzAz6mJNHdTGpADvaQhgBP0VCbTeg2ZQRwAG6SYaTSJY8A1zI"
  },
  {
    id: 54,
    nome: "Boné Lacoste Full Cap",
    preco: 149.90,
    categoria: "bones",
    marca: "Lacoste",
    rating: 4.5,
    avaliacoes: 22,
    descricao: "Full cap Lacoste em tecido resistente com logo bordado frontal.",
    tamanhos: ["Único"],
    cores: ["Verde"],
    imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSHM-jvnj5CJTwgD9nyZ08Qw0Gf8YH-245PQB8XVLbhh6ptV7woWsy3ssjBL0asN22rCW5UxU2WZQrIC-Z5J9GIk-wXa9cA"
  },
  // Gucci boné
  {
    id: 55,
    nome: "Boné Gucci GG Supreme",
    preco: 309.90,
    categoria: "bones",
    marca: "Gucci",
    rating: 4.9,
    avaliacoes: 29,
    descricao: "Boné Gucci GG Supreme, lona monogramada e acabamento de luxo.",
    tamanhos: ["Único"],
    cores: ["Bege"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/de15ede9d393026316994fd7beb0eeb4-d6efe4c6ff01fdbd1717800780915029-1024-1024.webp"
  },
  // Tommy Hilfiger bonés
  {
    id: 56,
    nome: "Boné Tommy Hilfiger Flag",
    preco: 149.90,
    categoria: "bones",
    marca: "Tommy Hilfiger",
    rating: 4.7,
    avaliacoes: 52,
    descricao: "Boné Big Flag Tommy Hilfiger, logo clássico bordado e ajuste strapback.",
    tamanhos: ["Único"],
    cores: ["Azul marinho"],
    imagem: "https://static.zattini.com.br/produtos/bone-tommy-hilfiger-big-flag-cap-azul-marinho/69/I6J-1137-C69/I6J-1137-C69_zoom1.jpg?ts=1781019220&ims=544x"
  },
  {
    id: 57,
    nome: "Boné Tommy Hilfiger Classic",
    preco: 139.90,
    categoria: "bones",
    marca: "Tommy Hilfiger",
    rating: 4.6,
    avaliacoes: 38,
    descricao: "Boné clássico Tommy com logo lateral bordado e tecido premium.",
    tamanhos: ["Único"],
    cores: ["Branco"],
    imagem: "https://cdn.awsli.com.br/600x450/1046/1046773/produto/400196321/51ff510a4f98f47847c02914ddb9b53d-8t30c896cf.jpeg"
  }
];

const acessoriosMasculinos = [
  // (novos acessórios serão adicionados aqui em breve)
];

const casacosMasculinos = [
  {
    id: 50,
    nome: "Jaqueta Puffer",
    preco: 289.90,
    categoria: "casacos",
    marca: "SportStyle",
    rating: 4.7,
    avaliacoes: 53,
    descricao: "Jaqueta acolchoada para os dias mais frios, leve e quentinha.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/c51b7fe481c15387d529856b053f2290-1d1af28a47e21c4a7d17795481118788-1024-1024.webp"
  },
  {
    id: 51,
    nome: "Casaco NK x Stussy",
    preco: 309.90,
    categoria: "casacos",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 71,
    descricao: "Collab exclusiva entre duas gigantes do streetwear mundial.",
    tamanhos: ["P", "M", "G"],
    cores: ["Bege"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/660ee8117461fdd9f351e53b8da1a880-3546d7e856f55157bb17775891095508-1024-1024.webp"
  },
  {
    id: 52,
    nome: "Casaco Syna World",
    preco: 299.90,
    categoria: "casacos",
    marca: "Syna World",
    rating: 4.6,
    avaliacoes: 29,
    descricao: "Marca de streetwear em alta, design statement e tecido premium.",
    tamanhos: ["M", "G", "GG"],
    cores: ["Roxo"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/34857439a85d4b2f849ace3b5668f19e-cf5599b1b8c4e099e317683228699128-1024-1024.webp"
  },
  {
    id: 53,
    nome: "Casaco Corteiz Island Stencil",
    preco: 309.90,
    categoria: "casacos",
    marca: "Corteiz",
    rating: 4.9,
    avaliacoes: 84,
    descricao: "Peça cult da marca britânica, produção limitada e alta valorização.",
    tamanhos: ["M", "G", "GG"],
    cores: ["Verde militar"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/125367a86ee3332e82b9d44e582241d7-90fcb4da9d632ff69b17776706163424-1024-1024.webp"
  },
  // Novos casacos — Syna World
  {
    id: 60,
    nome: "Casaco Syna World Track",
    preco: 309.90,
    categoria: "casacos",
    marca: "Syna World",
    rating: 4.8,
    avaliacoes: 41,
    descricao: "Casaco track jacket da Syna World, tecido premium e silhueta oversized.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/ff193d27619ed7377c10c150f6992212-0f2ff3c9db80e1e05c17712707503113-1024-1024.webp"
  },
  // Novos casacos — Corteiz
  {
    id: 61,
    nome: "Casaco Corteiz Alcatraz",
    preco: 319.90,
    categoria: "casacos",
    marca: "Corteiz",
    rating: 4.9,
    avaliacoes: 67,
    descricao: "Casaco icônico da Corteiz, estampa exclusiva e construção premium.",
    tamanhos: ["M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRprYh4n9ub3eNaCGIs0r0gMliYnrtlPgn-9BvN5iL1699Ou0o5lnZxYEy7Zi-v3cC-J9vaiiTPaweGYM9Yf09TfBgG0rbb_QawrMGheKfSuwDBsfU8pV3C"
  },
  {
    id: 62,
    nome: "Casaco Corteiz Crtz Windbreaker",
    preco: 319.90,
    categoria: "casacos",
    marca: "Corteiz",
    rating: 4.8,
    avaliacoes: 52,
    descricao: "Windbreaker leve e estiloso, perfeito para transições de clima.",
    tamanhos: ["M", "G", "GG"],
    cores: ["Verde"],
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT0ndhfUeLysKRHQN-YwzmXW6wuPcdzwsHHbgWJQu_QqEj7ARc3Zis-catAXmiU5gtTPzbWq2RWzffXXdOAAGJ8J9GEywDYpG1dQ5IbENf4YMdJuTZ4P-_H"
  },
  {
    id: 63,
    nome: "Casaco Corteiz Rule The World",
    preco: 309.90,
    categoria: "casacos",
    marca: "Corteiz",
    rating: 4.7,
    avaliacoes: 38,
    descricao: "Hoodie pesado com bordado exclusivo, peça de coleção.",
    tamanhos: ["M", "G", "GG"],
    cores: ["Cinza"],
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgD6GqSHjKdi3k7g-PqYcMTbO4Pvq4Z_l82dgj5PuTX2LxmXaiOmtUvG8OImoQV1Di1ECALdju_wTepeYVk_R0Mbbi99IjOEAGzWWCYqqI"
  },
  // Tommy Hilfiger casacos
  {
    id: 65,
    nome: "Casaco Tommy Hilfiger Puffer",
    preco: 339.90,
    categoria: "casacos",
    marca: "Tommy Hilfiger",
    rating: 4.7,
    avaliacoes: 33,
    descricao: "Jaqueta acolchoada Tommy, logotipo clássico e design atemporal.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul marinho"],
    imagem: "https://acdn-us.mitiendanube.com/stores/001/874/769/products/08c4b529-5181-4045-8401-b03f81c8c08a-7d3a8ea22d4867987e17563263983165-1024-1024.webp"
  },
  {
    id: 66,
    nome: "Casaco Tommy Hilfiger Bomber",
    preco: 339.90,
    categoria: "casacos",
    marca: "Tommy Hilfiger",
    rating: 4.6,
    avaliacoes: 28,
    descricao: "Bomber clássica da Tommy, tecido de qualidade e corte impecável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/001/874/769/products/0c986c59-09a0-48d7-8587-59b59b2a46c4-94b97ec1207c7e946617563276032667-1024-1024.webp"
  },
  {
    id: 67,
    nome: "Jaqueta Tommy Hilfiger Sport",
    preco: 319.90,
    categoria: "casacos",
    marca: "Tommy Hilfiger",
    rating: 4.5,
    avaliacoes: 22,
    descricao: "Jaqueta esportiva Tommy com forro e detalhes em contraste.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Vermelho"],
    imagem: "https://cdn.awsli.com.br/800x800/2583/2583374/produto/397703812/eae6e6a5f8caec62f0ab58d66418c428-reqwuvx8wb.jpeg"
  },
  {
    id: 68,
    nome: "Jaqueta Tommy Hilfiger Navy",
    preco: 319.90,
    categoria: "casacos",
    marca: "Tommy Hilfiger",
    rating: 4.6,
    avaliacoes: 19,
    descricao: "Jaqueta náutica atemporal, estilo clássico Tommy Hilfiger.",
    tamanhos: ["P", "M", "G"],
    cores: ["Azul marinho"],
    imagem: "https://acdn-us.mitiendanube.com/stores/002/204/440/products/img_2365-c6dde2839acca031df17622647085877-480-0.webp"
  },
  {
    id: 69,
    nome: "Jaqueta Tommy Hilfiger Velejador",
    preco: 329.90,
    categoria: "casacos",
    marca: "Tommy Hilfiger",
    rating: 4.7,
    avaliacoes: 17,
    descricao: "Icônica jaqueta velejador branca, símbolo da identidade Tommy.",
    tamanhos: ["P", "M", "G"],
    cores: ["Branco"],
    imagem: "https://photos.enjoei.com.br/jaqueta-velejador-m-tommy-hilfiger-branca/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8zNjA2MjQ4Ny9iYmI4MjRmODM0ZDBhMDJjODY2NjBlYjRlNjk0MGFmMy5qcGc"
  },
  // Denim Tears casacos
  {
    id: 70,
    nome: "Casaco Denim Tears Cotton Wreath",
    preco: 359.90,
    categoria: "casacos",
    marca: "Denim Tears",
    rating: 4.9,
    avaliacoes: 61,
    descricao: "Hoodie icônico da Denim Tears, estampa algodão e tecido pesado.",
    tamanhos: ["P", "M", "G"],
    cores: ["Preto"],
    imagem: "https://pumpingstore.com.br/cdn/shop/files/CottonWreathHoodieBlackFRONT.webp?v=1714407813"
  },
  {
    id: 71,
    nome: "Casaco Denim Tears Collab",
    preco: 349.90,
    categoria: "casacos",
    marca: "Denim Tears",
    rating: 4.8,
    avaliacoes: 44,
    descricao: "Peça exclusiva da Denim Tears, design cultural e construção premium.",
    tamanhos: ["P", "M", "G"],
    cores: ["Azul"],
    imagem: "https://cdn.awsli.com.br/2500x2500/1918/1918121/produto/374665809/base-site-2--10--698p0tfuk1.png"
  }
];

// =========================================================
// NOVOS PRODUTOS NIKE
// =========================================================

// Nike Tênis novos
const nikeTenisNovos = [
  {
    id: 72,
    nome: "Nike Air Max 270 Branco",
    preco: 379.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 112,
    descricao: "Air Max 270 com câmara de ar visível, amortecimento premium e visual imponente.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/1000268821-2d5df9e8594d275de917509644880715-1024-1024.webp"
  },
  {
    id: 73,
    nome: "Nike Dunk Low Panda",
    preco: 429.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.9,
    avaliacoes: 204,
    descricao: "O Dunk Low Panda é um dos tênis mais icônicos da Nike — preto e branco, estilo atemporal.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Preto", "Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/dunk-panda-1-2175c319f0844ebfd817460523825491-1024-1024.webp"
  },
  {
    id: 74,
    nome: "Nike Air Force 1 Preto",
    preco: 359.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 176,
    descricao: "Air Force 1 todo preto, o clássico do streetwear em versão low top.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/preto-1-64ce7ffbf5bdf495bd17455224266974-1024-1024.webp"
  },
  {
    id: 75,
    nome: "Nike Pegasus Trail",
    preco: 349.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 88,
    descricao: "Tênis de trilha com solado resistente e amortecimento React para terrenos irregulares.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Cinza", "Laranja"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/1000254547-87dd536f8b13a45e9317489733106240-1024-1024.webp"
  },
  {
    id: 76,
    nome: "Nike Air Max Plus",
    preco: 409.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 93,
    descricao: "Air Max Plus com visual agressivo, câmara de ar e upper em mesh estruturado.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/ab8b3d86179206b59773cf66ca445e53-170130529e55be0bb217737815854887-1024-1024.webp"
  },
  {
    id: 77,
    nome: "Nike Cortez",
    preco: 319.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 67,
    descricao: "O clássico Cortez de volta — design retrô com conforto moderno.",
    tamanhos: ["38", "39", "40", "41", "42"],
    cores: ["Branco", "Vermelho"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2026-06-17-at-17-53-40-ca048eac50a08b758017817299107259-1024-1024.webp"
  },
  {
    id: 78,
    nome: "Nike SB Dunk Low",
    preco: 449.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 141,
    descricao: "Nike SB para skateboard com solado reforçado e cano acolchoado.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Variado"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/15bfc70fd77fe29d1f805e168760978f-4d1993420fb41b2a3317723055994526-1024-1024.webp"
  },
  {
    id: 79,
    nome: "Nike Shox",
    preco: 459.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 55,
    descricao: "Nike Shox com colunas de amortecimento icônicas — estilo Y2K de volta ao topo.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Branco", "Prata"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/img_0080-b05adaaf40172a70ce17555478949984-1024-1024.webp"
  },
  {
    id: 80,
    nome: "Nike Air Jordan 1 Low",
    preco: 499.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.9,
    avaliacoes: 188,
    descricao: "Air Jordan 1 Low, ícone da cultura sneaker, couro premium e Swoosh lateral.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Variado"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/1e3241fb5e165f200fb30aed357cb5ff-a9413bdd5d2eb8e37a17723049982479-1024-1024.webp"
  },
  {
    id: 81,
    nome: "Nike Vomero 18",
    preco: 389.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 72,
    descricao: "Nike Zoom Vomero 18, running de alta performance com amortecimento ZoomX.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Branco", "Azul"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/a6e5b32a103264a5bbab15e086309de4-f7bdbd358e5fd8b15e17726469136753-1024-1024.webp"
  },
  {
    id: 82,
    nome: "Nike Air Max 95 Multicolor",
    preco: 409.90,
    categoria: "tenis",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 99,
    descricao: "Air Max 95 em colorway exclusiva, câmara de ar visível e visual retro-futurista.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Variado"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/308/471/products/img_5670-ebe9725751137f2ce417527236308400-480-0.webp"
  }
];

// Nike Casacos novos
const nikeCasacosNovos = [
  {
    id: 83,
    nome: "Jaqueta Nike Windrunner",
    preco: 309.90,
    categoria: "casacos",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 84,
    descricao: "Nike Windrunner Tech Fleece Full-Zip, corte slim e tecnologia de isolamento térmico.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://limitedresell.com/16740-full_default/hoodie-nike-sportswear-tech-fleece-full-zip-windrunner-black-bemis-silver.jpg"
  },
  {
    id: 84,
    nome: "Jaqueta Nike Tech Fleece",
    preco: 319.90,
    categoria: "casacos",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 131,
    descricao: "Tech Fleece da Nike com tecido dupla camada, leve e quente para o dia a dia.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Marrom"],
    imagem: "https://cdn.awsli.com.br/600x450/1900/1900104/produto/264034650/img_6235-cbv8sxqiwz.jpeg"
  },
  {
    id: 85,
    nome: "Casaco Nike Club Fleece",
    preco: 289.90,
    categoria: "casacos",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 66,
    descricao: "Moletom Nike Club Fleece com capuz, conforto máximo para o cotidiano.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Cinza"],
    imagem: "https://cdn-images.farfetch-contents.com/22/69/94/84/22699484_52740120_600.jpg"
  }
];

// Nike Camisas novas
const nikeScamisasNovas = [
  {
    id: 86,
    nome: "Camiseta Nike Amarela",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.9,
    avaliacoes: 215,
    descricao: "Camiseta Nike na cor amarela, tecido macio e corte regular.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Amarelo"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/2b4c07fd90214ac5644bf47bcc908291-01af9ce0faaf51986d17684853203622-1024-1024.webp"
  },
  {
    id: 87,
    nome: "Camiseta Nike Verde",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 88,
    descricao: "Camiseta Nike na cor verde, tecido respirável e corte moderno.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Verde"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/19209c4e-4af8-4f31-a8d9-0445d569a966-11b4c44554a0fee9b217641300686211-1024-1024.webp"
  },
  {
    id: 88,
    nome: "Camiseta Nike Azul Royal",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 104,
    descricao: "Camiseta Nike em azul royal, confortável para o dia a dia.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/8da9ab8fc284afdd8d5dac7956203cba-2fb98900ab1959fc8717720530731824-1024-1024.webp"
  },
  {
    id: 89,
    nome: "Camiseta Nike SB Skate",
    preco: 129.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 57,
    descricao: "Camiseta Nike SB com estampa skate, algodão 100% e corte oversized.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/9edf170be7d05e019197a86c09aeaed1-6ef4cd57db7040480d17709917063269-1024-1024.webp"
  },
  {
    id: 90,
    nome: "Camiseta Nike Essential",
    preco: 109.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.4,
    avaliacoes: 43,
    descricao: "Camiseta essencial Nike, corte regular e Swoosh bordado no peito.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/58677f2b8f28eae7768e8a0499b870b3-6211862a2ce047a5d317747234287989-1024-1024.webp"
  },
  {
    id: 91,
    nome: "Camiseta Nike Vermelha e Preta",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.9,
    avaliacoes: 198,
    descricao: "Camiseta Nike nas cores vermelho e preto, visual esportivo.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Vermelho", "Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/324f038cc3c465985fa5889ef77e1ed6-9363c5b3f5a0f6621f17729088435689-1024-1024.webp"
  },
  {
    id: 92,
    nome: "Camiseta Nike Tie Dye",
    preco: 139.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 38,
    descricao: "Camiseta Nike com estampa tie dye exclusiva, estilo urbano e despojado.",
    tamanhos: ["P", "M", "G"],
    cores: ["Colorido"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/2abd39527fcf3846d66377c9019b6c91-e9082efb860ddec6c517686811964541-1024-1024.webp"
  },
  {
    id: 93,
    nome: "Camiseta Nike Preta",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 122,
    descricao: "Camiseta Nike preta, básica e versátil para qualquer look.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/97fd9a81f9e9d2e58c80f9f9a3398f3f-eba630e9888ba6fdc117737825961144-1024-1024.webp"
  },
  {
    id: 94,
    nome: "Camiseta NK Club Branca",
    preco: 99.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.3,
    avaliacoes: 29,
    descricao: "Camiseta Nike Club básica branca, ideal para o dia a dia.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/dfa573cbacb83a38f8b1b420eee74b75-879d63f42ada5afc5e17684213360675-320-0.webp"
  },
  {
    id: 95,
    nome: "Camiseta NK Club Preta",
    preco: 99.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.3,
    avaliacoes: 31,
    descricao: "Camiseta Nike Club básica preta, clássico que nunca sai de moda.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/475600da668829c0b761686e3738a6ba-83f98f05659e0c2c0917688536869415-320-0.webp"
  },
  {
    id: 96,
    nome: "Camiseta NK Sportswear Classic",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.4,
    avaliacoes: 46,
    descricao: "Camiseta Sportswear com logo clássico, algodão macio e corte regular.",
    tamanhos: ["P", "M", "G"],
    cores: ["Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-09-27-at-09-06-02-98f942630f9dad999117589770089488-320-0.webp"
  },
  {
    id: 97,
    nome: "Camiseta Nike Celeste e Branca",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 161,
    descricao: "Camiseta Nike nas cores celeste e branco, leve e confortável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul claro", "Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/cb984235f659eb60549eb480a3fec364-e59e7424d764e5876317690260691575-1024-1024.webp"
  },
  {
    id: 98,
    nome: "Camiseta Nike Branca",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 77,
    descricao: "Camiseta Nike branca, clássica e fácil de combinar.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/14ccb7206120bf9ee2cdad8f71e92754-c2c46d88d646d43fa117683195406510-1024-1024.webp"
  },
  {
    id: 99,
    nome: "Camiseta Nike Amarela Dri-FIT",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 53,
    descricao: "Camiseta Nike Dri-FIT amarela, leve e com secagem rápida.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Amarelo"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/ca9e1424a0caeb17985415ba7e1d55f7-b1ab8c7cbb23e9087917792789766851-1024-1024.webp"
  },
  {
    id: 100,
    nome: "Camiseta Nike Azul Celeste",
    preco: 119.90,
    categoria: "camisas",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 91,
    descricao: "Camiseta Nike em azul celeste, tecido leve e caimento confortável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/b34386393da571752747ebe2412546ff-9bb837dfeecec9a6ed17691857558439-1024-1024.webp"
  }
];

// Nike Bermudas novas
const nikeBermudasNovas = [
  {
    id: 101,
    nome: "Bermuda Nike Dri-FIT Preta",
    preco: 139.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 74,
    descricao: "Bermuda Nike Dri-FIT, leveza e ventilação para treinos e uso casual.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/ca478c3573d7e169e8f4a8680c56ad61-31c920d6fae4c6deea17688495485101-1024-1024.webp"
  },
  {
    id: 102,
    nome: "Bermuda Nike Club Cinza",
    preco: 129.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 61,
    descricao: "Bermuda Nike Club em moletom leve, confortável para o dia a dia.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/img_3337-5918af5b61c3ca35f717676494722913-1024-1024.webp"
  },
  {
    id: 103,
    nome: "Bermuda Nike SB Laranja",
    preco: 119.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.4,
    avaliacoes: 38,
    descricao: "Bermuda Nike SB com estilo skateboarding, tecido resistente e caimento folgado.",
    tamanhos: ["P", "M", "G"],
    cores: ["Laranja"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-11-20-at-19-25-59-cbc9e8183d1f90046817636782429763-1024-1024.webp"
  },
  {
    id: 104,
    nome: "Bermuda Nike SB Verde",
    preco: 119.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.4,
    avaliacoes: 35,
    descricao: "Bermuda Nike SB em verde, estilo urban skate com bolsos funcionais.",
    tamanhos: ["P", "M", "G"],
    cores: ["Verde"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-11-20-at-19-35-43-a622ed487e7ef6b61c17636783875311-1024-1024.webp"
  },
  {
    id: 105,
    nome: "Bermuda Nike Sportswear Premium",
    preco: 139.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 52,
    descricao: "Bermuda premium Sportswear com logo estampado e caimento moderno.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/89c00cb9b20d4f0a86eb5e8ec5aa3515-75b072e714bf78602117737818906286-320-0.webp"
  },
  {
    id: 106,
    nome: "Bermuda Nike Color Preto",
    preco: 109.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.3,
    avaliacoes: 27,
    descricao: "Bermuda Nike monocromática preta, básica e versátil.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/color-preto-1-e86a193b05457b385917459413628934-1024-1024.webp"
  },
  {
    id: 107,
    nome: "Bermuda Nike STS Branca",
    preco: 109.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.3,
    avaliacoes: 24,
    descricao: "Bermuda Nike STS branca, leve e ideal para o verão.",
    tamanhos: ["P", "M", "G"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/sts-branco-1-2e9130453d1f8cdd4117459457378413-1024-1024.webp"
  },
  {
    id: 108,
    nome: "Bermuda Nike Dri-FIT Azul",
    preco: 139.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 48,
    descricao: "Bermuda Nike Dri-FIT em azul, perfeita para treinos e corridas.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/e80db475862989b71a6e02ea2611280d-57c1b64bf66d07604017688495566036-1024-1024.webp"
  },
  {
    id: 109,
    nome: "Bermuda Nike Heritage",
    preco: 129.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.4,
    avaliacoes: 33,
    descricao: "Bermuda Nike Heritage com logo retrô, tecido leve e confortável.",
    tamanhos: ["P", "M", "G"],
    cores: ["Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/hv-nk-1-bd7878cefeb580242017459506520312-1024-1024.webp"
  },
  {
    id: 110,
    nome: "Bermuda Nike Tech Woven",
    preco: 159.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 57,
    descricao: "Bermuda Nike Tech em tecido woven, cintura elástica e dois bolsos laterais.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/467e7ab95e4eb4dea537f5b012d491d1-9d01e8e7007df95a3d17691851936120-1024-1024.webp"
  },
  {
    id: 111,
    nome: "Bermuda Nike SB Grafite",
    preco: 119.90,
    categoria: "calcas",
    marca: "Nike",
    rating: 4.3,
    avaliacoes: 21,
    descricao: "Bermuda Nike SB em grafite, resistente e estilosa para o skate ou rua.",
    tamanhos: ["P", "M", "G"],
    cores: ["Grafite"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-11-20-at-19-35-57-27aac411f7cd46c16a17636785244650-1024-1024.webp"
  }
];

// Nike Bonés novos
const nikeBonesNovos = [
  {
    id: 112,
    nome: "Boné Nike H86 Futura Branco",
    preco: 79.90,
    categoria: "bones",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 83,
    descricao: "Boné Nike H86 Futura em branco, aba curva e logo bordado na frente.",
    tamanhos: ["Único"],
    cores: ["Branco"],
    imagem: "https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/9/1/913011-100-bone-nike-h86-futura-washed-unis-branco.jpg"
  },
  {
    id: 113,
    nome: "Boné Nike Dri-FIT Preto",
    preco: 79.90,
    categoria: "bones",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 107,
    descricao: "Boné Nike Dri-FIT com tecnologia de absorção de suor, ideal para treinos.",
    tamanhos: ["Único"],
    cores: ["Preto"],
    imagem: "https://cdn.vnda.com.br/velocita/2025/04/01/11_14_58_351_11_4_2_232_fb56240102.jpg?v=1743516898"
  },
  {
    id: 114,
    nome: "Boné Nike Club Preto",
    preco: 79.90,
    categoria: "bones",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 64,
    descricao: "Boné Nike Club snapback em preto, ajuste traseiro e logo Swoosh bordado.",
    tamanhos: ["Único"],
    cores: ["Preto"],
    imagem: "https://cdn.dooca.store/149192/products/img-3040-1.jpg?v=1733597920"
  },
  {
    id: 115,
    nome: "Boné Nike Club Marrom",
    preco: 79.90,
    categoria: "bones",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 49,
    descricao: "Boné Nike Club em marrom com logo Futura bordado em destaque.",
    tamanhos: ["Único"],
    cores: ["Marrom"],
    imagem: "https://images.tcdn.com.br/img/img_prod/1317970/bone_nike_club_marrom_com_logo_futura_bordado_59543_1_7afdd615b317b30daf1a09c41ce38e38.jpg"
  },
  {
    id: 116,
    nome: "Boné Nike Dri-FIT Verde",
    preco: 79.90,
    categoria: "bones",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 41,
    descricao: "Boné Nike Dri-FIT em verde militar, perfeito para esportes ao ar livre.",
    tamanhos: ["Único"],
    cores: ["Verde"],
    imagem: "https://cdnv2.moovin.com.br/santaclara/imagens/produtos/det/-6619762f19129.jpeg"
  },
  {
    id: 117,
    nome: "Boné Nike Preto Aba Reta",
    preco: 79.90,
    categoria: "bones",
    marca: "Nike",
    rating: 4.4,
    avaliacoes: 38,
    descricao: "Boné Nike com aba reta, estilo streetwear urbano e ajuste snapback.",
    tamanhos: ["Único"],
    cores: ["Preto"],
    imagem: "https://cdn.awsli.com.br/600x450/1058/1058679/produto/99116756007438a92c.jpg"
  },
  {
    id: 118,
    nome: "Boné Nike Club Rosa",
    preco: 79.90,
    categoria: "bones",
    marca: "Nike",
    rating: 4.5,
    avaliacoes: 33,
    descricao: "Boné Nike Club Dri-FIT Swoosh em rosa, ajustável e versátil.",
    tamanhos: ["Único"],
    cores: ["Rosa"],
    imagem: "https://usebestfit.fbitsstatic.net/img/p/bone-nike-club-dri-fit-swoosh-ajustavel-rosa-90518/307265-1.jpg?w=1200"
  },
  {
    id: 119,
    nome: "Boné Nike Club Futura Bege",
    preco: 79.90,
    categoria: "bones",
    marca: "Nike",
    rating: 4.4,
    avaliacoes: 27,
    descricao: "Boné Nike Club Futura em bege, perfeito para looks neutros e casuais.",
    tamanhos: ["Único"],
    cores: ["Bege"],
    imagem: "https://images.tcdn.com.br/img/img_prod/1376822/90_bon_nike_club_futura_bege_fb5368_229_1_20260413113501_5e2a38a45d6e.jpg"
  }
];

// =========================================================
// NOVOS PRODUTOS ADIDAS
// =========================================================

const adidasCamisasNovas = [
  {
    id: 120,
    nome: "Camiseta Adidas 3-Stripes Branca",
    preco: 109.90,
    categoria: "camisas",
    marca: "Adidas",
    rating: 4.5,
    avaliacoes: 77,
    descricao: "Camiseta Adidas 3-Stripes em branco, algodão premium e logo bordado.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://shop2gether.fbitsstatic.net/img/p/camiseta-masculina-3-stripes-branco-229171/642245.jpg?w=1225&h=1633&v=no-value"
  },
  {
    id: 121,
    nome: "Camiseta Adidas Originals Gráfica",
    preco: 129.90,
    categoria: "camisas",
    marca: "Adidas",
    rating: 4.6,
    avaliacoes: 54,
    descricao: "Camiseta Adidas Originals com estampa gráfica, estilo retro streetwear.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://cdn.awsli.com.br/1785/1785388/produto/248875410/chatgpt-image-5-de-mai--de-2025--10_33_37-m4do6n4h8e.png"
  },
  {
    id: 122,
    nome: "Camiseta Adidas JV Soft Branca",
    preco: 119.90,
    categoria: "camisas",
    marca: "Adidas",
    rating: 4.4,
    avaliacoes: 39,
    descricao: "Camiseta Adidas JV Gráfica Soft em branco, algodão leve e corte moderno.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://grupooscar.vtexassets.com/arquivos/ids/6625841/Adidas-Blusa-JV6085-F-GRAFICA-SOFTS-White-Algodao--2-.jpg?v=639087440262270000"
  },
  {
    id: 123,
    nome: "Camiseta Adidas 3-Stripes Cinza",
    preco: 109.90,
    categoria: "camisas",
    marca: "Adidas",
    rating: 4.4,
    avaliacoes: 44,
    descricao: "Camiseta Adidas 3-Stripes em cinza, básica e versátil para o dia a dia.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Cinza"],
    imagem: "https://acdn-us.mitiendanube.com/stores/001/047/204/products/img_2352-e093c404cc3517cb3f17586601768151-480-0.webp"
  }
];

const adidasCalcasNovas = [
  {
    id: 124,
    nome: "Calça Adidas Moletom 3-Stripes",
    preco: 189.90,
    categoria: "calcas",
    marca: "Adidas",
    rating: 4.6,
    avaliacoes: 68,
    descricao: "Calça de moletom Adidas Single Jersey com listras laterais clássicas.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://images.tcdn.com.br/img/img_prod/1303097/calca_adidas_moletom_single_jersey_3_stripes_masculina_89473_1_d8de2a2b85512976d9b4e9888bdb35d9.jpg"
  },
  {
    id: 125,
    nome: "Bermuda Adidas OG Verde",
    preco: 139.90,
    categoria: "calcas",
    marca: "Adidas",
    rating: 4.5,
    avaliacoes: 46,
    descricao: "Bermuda Adidas Originals em verde, tecido leve e estilo retrô.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Verde"],
    imagem: "https://shop2gether.fbitsstatic.net/img/p/bermuda-masculina-og-verde-227289/635242.jpg?w=1225&h=1633&v=no-value"
  },
  {
    id: 126,
    nome: "Calça Adidas Digaspi Track",
    preco: 169.90,
    categoria: "calcas",
    marca: "Adidas",
    rating: 4.4,
    avaliacoes: 33,
    descricao: "Calça track Adidas com bolsos laterais com zíper e cós elástico.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://digaspi.vtexassets.com/arquivos/ids/5189364/image-8ace9a1f5dce4741a20be7a581c9c196.jpg?v=638774683972370000"
  }
];

const adidasCasacosNovos = [
  {
    id: 127,
    nome: "Jaqueta Adidas Track Preta",
    preco: 269.90,
    categoria: "casacos",
    marca: "Adidas",
    rating: 4.6,
    avaliacoes: 72,
    descricao: "Jaqueta track Adidas clássica com listras laterais e gola alta.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://www.streaker.com.br/cdn/shop/files/br-11134207-7r98o-lsem096vcsul83.jpg?v=1720297014"
  }
];

const adidasBonesNovos = [
  {
    id: 128,
    nome: "Boné Adidas Aeroready Branco",
    preco: 69.90,
    categoria: "bones",
    marca: "Adidas",
    rating: 4.5,
    avaliacoes: 61,
    descricao: "Boné Adidas Aeroready ClimaCool em branco, tecnologia de ventilação.",
    tamanhos: ["Único"],
    cores: ["Branco"],
    imagem: "https://images.tcdn.com.br/img/img_prod/1111144/bon_adidas_aeroready_bball_climacool_branco_1_20260124100242_e9401a9a5b63.jpg"
  },
  {
    id: 129,
    nome: "Boné Adidas Run Preto",
    preco: 59.90,
    categoria: "bones",
    marca: "Adidas",
    rating: 4.4,
    avaliacoes: 44,
    descricao: "Boné Adidas Run para corrida, leve e respirável.",
    tamanhos: ["Único"],
    cores: ["Preto"],
    imagem: "https://images.tcdn.com.br/img/img_prod/1092962/bone_adidas_run_corrida_3572_1_a8c69df3ef28c4d552af34c81368fe27.jpg"
  },
  {
    id: 130,
    nome: "Boné Adidas Velcita Preto",
    preco: 69.90,
    categoria: "bones",
    marca: "Adidas",
    rating: 4.5,
    avaliacoes: 37,
    descricao: "Boné Adidas clássico preto com logo 3D na frente.",
    tamanhos: ["Único"],
    cores: ["Preto"],
    imagem: "https://cdn.vnda.com.br/velocita/2025/04/01/10_48_44_617_10_4_9_984_2.jpg?v=1743515326"
  },
  {
    id: 131,
    nome: "Boné Adidas Azul",
    preco: 69.90,
    categoria: "bones",
    marca: "Adidas",
    rating: 4.4,
    avaliacoes: 29,
    descricao: "Boné Adidas em azul marinho com aba curva e logo clássico.",
    tamanhos: ["Único"],
    cores: ["Azul"],
    imagem: "https://cdn.dooca.store/296/products/adidas-azul-1-photoroom1_1080x1080+fill_ffffff.png?v=1739392370000&webp=0"
  },
  {
    id: 132,
    nome: "Boné Adidas Originals Bege",
    preco: 69.90,
    categoria: "bones",
    marca: "Adidas",
    rating: 4.5,
    avaliacoes: 33,
    descricao: "Boné Adidas Originals em bege, estilo casual e atemporal.",
    tamanhos: ["Único"],
    cores: ["Bege"],
    imagem: "https://acdn-us.mitiendanube.com/stores/001/874/769/products/2a5df43c65b547b0d460b7f8e00e82e3-4fc685695d50d755b017765431102639-1024-1024.webp"
  },
  {
    id: 133,
    nome: "Boné Adidas Trefoil Verde",
    preco: 69.90,
    categoria: "bones",
    marca: "Adidas",
    rating: 4.5,
    avaliacoes: 27,
    descricao: "Boné Adidas com logo Trefoil em verde, estilo Originals clássico.",
    tamanhos: ["Único"],
    cores: ["Verde"],
    imagem: "https://acdn-us.mitiendanube.com/stores/005/774/017/products/202603041504368955_mg_5340-a534eed98a08e2e82417726511713239-1024-1024.webp"
  }
];

const adidasTenisNovos = [
  {
    id: 134,
    nome: "Adidas Forum Low Branco",
    preco: 339.90,
    categoria: "tenis",
    marca: "Adidas",
    rating: 4.7,
    avaliacoes: 89,
    descricao: "Adidas Forum Low em branco, ícone do basquete dos anos 80 de volta ao streetwear.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/3567ed0184baa8f9ba099e061625cf7f-e52ac168843028566317793695055092-1024-1024.webp"
  },
  {
    id: 135,
    nome: "Adidas Samba OG",
    preco: 389.90,
    categoria: "tenis",
    marca: "Adidas",
    rating: 4.9,
    avaliacoes: 231,
    descricao: "Adidas Samba OG, o tênis mais icônico da marca — couro premium e sola de borracha.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Preto", "Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/cc63c3b2c6894293ee73f578c885be22-26cb6489041db030c617695439378490-1024-1024.webp"
  },
  {
    id: 136,
    nome: "Adidas ADI2000 Preto",
    preco: 359.90,
    categoria: "tenis",
    marca: "Adidas",
    rating: 4.6,
    avaliacoes: 73,
    descricao: "Adidas ADI2000 em preto, design Y2K com solado chunky e upper em camurça.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-11-11-at-18-36-03-299e0bfa75264cd69d17629033135201-1024-1024.webp"
  },
  {
    id: 137,
    nome: "Adidas Superstar",
    preco: 319.90,
    categoria: "tenis",
    marca: "Adidas",
    rating: 4.7,
    avaliacoes: 155,
    descricao: "Adidas Superstar Shell Toe, clássico do hip-hop e streetwear mundial.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Branco", "Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/f67767328f2957d51e4186da147a25a7-198d96172090bb2bca17680820240654-320-0.webp"
  },
  {
    id: 138,
    nome: "Adidas Campus 00s",
    preco: 379.90,
    categoria: "tenis",
    marca: "Adidas",
    rating: 4.8,
    avaliacoes: 118,
    descricao: "Adidas Campus 00s, o queridinho do streetwear moderno com solado reforçado.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Variado"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/2babfa14ceb076eae7b2604105a087d3-3ab55e5f90a9a3029a17680773871466-1024-1024.webp"
  },
  {
    id: 139,
    nome: "Adidas Gazelle Indoor",
    preco: 349.90,
    categoria: "tenis",
    marca: "Adidas",
    rating: 4.7,
    avaliacoes: 96,
    descricao: "Adidas Gazelle Indoor, design retrô com camurça premium e solado de borracha.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Variado"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/a7012da7449dbbb66c8d5c9cc4df431e-86b9cc020c7ad632ad17680796761925-1024-1024.webp"
  }
];

// =========================================================
// NOVOS PRODUTOS PUMA
// =========================================================

const pumaCamisasNovas = [
  {
    id: 140,
    nome: "Camiseta Puma Essential Logo",
    preco: 99.90,
    categoria: "camisas",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 67,
    descricao: "Camiseta Puma Essential com logo clássico, algodão macio e corte regular.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/1000254799-7050af3d19fa47ed7b17489887821462-1024-1024.webp"
  },
  {
    id: 141,
    nome: "Camiseta Puma Logo Lab Preta",
    preco: 109.90,
    categoria: "camisas",
    marca: "Puma",
    rating: 4.4,
    avaliacoes: 43,
    descricao: "Camiseta Puma Logo Lab Summer em preto, estampa moderna e tecido leve.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://grupooscar.vteximg.com.br/arquivos/ids/8199518/Puma-Camiseta-684671-01-M-LOGO-LAB-SUMMER-Preto-Algodao--2-.webp?v=638951107464170000"
  },
  {
    id: 142,
    nome: "Camiseta Puma Esportiva",
    preco: 89.90,
    categoria: "camisas",
    marca: "Puma",
    rating: 4.3,
    avaliacoes: 38,
    descricao: "Camiseta Puma esportiva com tecnologia dryCELL para treinos e uso casual.",
    tamanhos: ["P", "M", "G"],
    cores: ["Branco"],
    imagem: "https://www.gianninisports.com.br/image/cache/catalog/produtos/foto_2022/6994-750x750.jpg"
  },
  {
    id: 143,
    nome: "Camiseta Puma Logo Tee Azul",
    preco: 99.90,
    categoria: "camisas",
    marca: "Puma",
    rating: 4.4,
    avaliacoes: 31,
    descricao: "Camiseta Puma INF Logo Tee em Mountain Blue, visual clean e logo em destaque.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    imagem: "https://grupooscar.vteximg.com.br/arquivos/ids/10416073/Puma-Camiseta-684906-13-INF-LOGO-TEE-Mountain-Blue-Algodao--2-.webp?v=638996082153600000"
  },
  {
    id: 144,
    nome: "Camiseta Puma Classics",
    preco: 109.90,
    categoria: "camisas",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 52,
    descricao: "Camiseta Puma Classics com design retrô e logo vintage no peito.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://cdn.awsli.com.br/2814/2814249/produto/355808957/8799_60f117a6-5970-4ffe-90cf-3e8f14c34319-6xe6sb4vvb.jpeg"
  },
  {
    id: 145,
    nome: "Camiseta Puma Original Branca",
    preco: 119.90,
    categoria: "camisas",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 44,
    descricao: "Camiseta Puma original em branco, confortável e com logo clássico.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/632563/01/fnd/BRA/fmt/png"
  }
];

const pumaCalcasNovas = [
  {
    id: 146,
    nome: "Calça Puma ESS Slim Moletom",
    preco: 169.90,
    categoria: "calcas",
    marca: "Puma",
    rating: 4.6,
    avaliacoes: 58,
    descricao: "Calça de moletom Puma ESS Slim, corte ajustado e cós elástico com cordão.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://static.netshoes.com.br/produtos/calca-moletom-puma-ess-slim-masculina/10/D14-7270-010/D14-7270-010_zoom1.jpg?ts=1780492533"
  },
  {
    id: 147,
    nome: "Calça Puma Track Preta",
    preco: 189.90,
    categoria: "calcas",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 44,
    descricao: "Calça track Puma com listras laterais e zíper nos bolsos.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://acdn-us.mitiendanube.com/stores/001/874/769/products/79263b8eace2b5db157d5a5845dcb80a-aab7d903c74a914a2817755171690520-1024-1024.webp"
  },
  {
    id: 148,
    nome: "Bermuda Puma Woven 5\" Verde",
    preco: 129.90,
    categoria: "calcas",
    marca: "Puma",
    rating: 4.4,
    avaliacoes: 36,
    descricao: "Bermuda Puma Woven 5 polegadas em verde, leve e respirável para treinos.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Verde"],
    imagem: "https://grupooscar.vteximg.com.br/arquivos/ids/8390831/Puma-Bermuda-682603-30-M-WOVEN-SHORTS-5-Verde-Poliester--1-.webp?v=638981335185930000"
  }
];

const pumaCasacosNovos = [
  {
    id: 149,
    nome: "Jaqueta Puma EvoStripe Core",
    preco: 269.90,
    categoria: "casacos",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 48,
    descricao: "Jaqueta Puma EvoStripe Core Full-Zip, tecnologia WARM CELL e listras laterais.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/jaqueta-m-evostripe-core-full-zip-40976.jpg"
  },
  {
    id: 150,
    nome: "Casaco Puma Cadiles",
    preco: 249.90,
    categoria: "casacos",
    marca: "Puma",
    rating: 4.4,
    avaliacoes: 33,
    descricao: "Casaco Puma com capuz, corte moderno e logo bordado no peito.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Cinza"],
    imagem: "https://cadiles.vtexassets.com/arquivos/ids/182909/img-item-casaco-puma--1660073170902.jpg?v=638174563898900000"
  },
  {
    id: 151,
    nome: "Jaqueta Puma Track Azul",
    preco: 259.90,
    categoria: "casacos",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 41,
    descricao: "Jaqueta track Puma em azul, clássica com listras brancas laterais.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    imagem: "https://cdn.awsli.com.br/600x450/1046/1046773/produto/356379850/ee2398ea20bde7995286eaa385b5459b-9y1c7zm5wo.jpg"
  }
];

const pumaBonesNovos = [
  {
    id: 152,
    nome: "Boné Puma Velcita Preto",
    preco: 59.90,
    categoria: "bones",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 52,
    descricao: "Boné Puma clássico preto com logo em destaque na frente.",
    tamanhos: ["Único"],
    cores: ["Preto"],
    imagem: "https://cdn.vnda.com.br/velocita/2025/04/01/11_05_16_600_11_4_8_852_023148121.jpg?v=1743516340"
  },
  {
    id: 153,
    nome: "Boné Puma Azul",
    preco: 59.90,
    categoria: "bones",
    marca: "Puma",
    rating: 4.4,
    avaliacoes: 38,
    descricao: "Boné Puma em azul marinho com aba curva e ajuste snapback.",
    tamanhos: ["Único"],
    cores: ["Azul"],
    imagem: "https://images.tcdn.com.br/img/img_prod/1433623/bon_puma_azul_aba_curva_ess_cap_1_20251209192945_5aa6f34ae34c.jpg"
  }
];

const pumaTenisNovos = [
  {
    id: 155,
    nome: "Puma RS-X",
    preco: 319.90,
    categoria: "tenis",
    marca: "Puma",
    rating: 4.6,
    avaliacoes: 87,
    descricao: "Puma RS-X com solado chunky e design futurista, perfeito para o estilo Y2K.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Branco", "Colorido"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/91d444a17c07ec075d1f6d76796ef7f7-65836d1440af1e36d417725671685998-1024-1024.webp"
  },
  {
    id: 156,
    nome: "Puma Mayze",
    preco: 319.90,
    categoria: "tenis",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 62,
    descricao: "Puma Mayze com plataforma elevada e couro premium, elegância e estilo urbano.",
    tamanhos: ["38", "39", "40", "41", "42"],
    cores: ["Branco"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/whatsapp-image-2025-09-30-at-17-21-30-30ce06086d279818d717592641358644-1024-1024.webp"
  },
  {
    id: 157,
    nome: "Puma Suede Azul",
    preco: 309.90,
    categoria: "tenis",
    marca: "Puma",
    rating: 4.6,
    avaliacoes: 78,
    descricao: "Puma Suede em azul marinho, colorway clássico com palmilha acolchoada.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Azul"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/suede-azul-1-a7aea4283bd980837917455204267945-320-0.webp"
  },
  {
    id: 158,
    nome: "Puma 180 Branco Vermelho",
    preco: 319.90,
    categoria: "tenis",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 67,
    descricao: "Puma 180 em branco e vermelho, reedição do clássico anos 2000.",
    tamanhos: ["39", "40", "41", "42", "43"],
    cores: ["Branco", "Vermelho"],
    imagem: "https://acdn-us.mitiendanube.com/stores/003/134/751/products/677cae38991f012c8819023061f20d07-7c3e74fd53e96c968f17725675795417-1024-1024.webp"
  },
  {
    id: 159,
    nome: "Puma Caven 2.0 Preto",
    preco: 289.90,
    categoria: "tenis",
    marca: "Puma",
    rating: 4.5,
    avaliacoes: 54,
    descricao: "Puma Caven 2.0 BDP em preto e branco, design limpo e confortável para o dia a dia.",
    tamanhos: ["38", "39", "40", "41", "42", "43"],
    cores: ["Preto", "Branco"],
    imagem: "https://grupooscar.vteximg.com.br/arquivos/ids/2295407/Puma-Tenis-CAVEN-2.0-BDP-396330-04-Preto-Branco-Sint_2__.jpg?v=639064396660330000"
  }
];

/* =========================================================
   CAMISAS DE TIME (seleções e clubes)
   ========================================================= */

const camisasTimeNovas = [
  {
    id: 160,
    nome: "Camisa Flamengo I 21/22 Adidas",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "Adidas",
    rating: 4.8,
    avaliacoes: 168,
    descricao: "Camisa do Flamengo modelo torcedor, rubro-negra, tecido leve e respirável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Vermelho/Preto"],
    imagem: "https://static.netshoes.com.br/produtos/camisa-flamengo-i-2122-sn-torcedor-adidas-masculina/68/NQQ-7755-068/NQQ-7755-068_zoom1.jpg?ts=1786504274"
  },
  {
    id: 161,
    nome: "Camisa França Nike",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "Nike",
    rating: 4.8,
    avaliacoes: 121,
    descricao: "Camisa da Seleção Francesa modelo torcedor, tecido leve e respirável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58zOPVKdAHWSXR_4jGMmV-VXRwA5XVwvbab-UbCsBHg&s=10"
  },
  {
    id: 162,
    nome: "Camisa Portugal Nike",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 96,
    descricao: "Camisa da Seleção de Portugal modelo torcedor, tecido leve e respirável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Vermelho"],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmE9QkGnHNbq5vscwiay8jYsZ88aG2T3fzcyYxXwGLg&s=10"
  },
  {
    id: 163,
    nome: "Camisa Corinthians Nike",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "Nike",
    rating: 4.7,
    avaliacoes: 134,
    descricao: "Camisa do Corinthians modelo torcedor, tecido leve e confortável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_MokxRGd2qpxVxDaR5jIiPTrBSK7tngo3RIWHEdVvw&s"
  },
  {
    id: 164,
    nome: "Camisa Argentina Adidas",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "Adidas",
    rating: 4.9,
    avaliacoes: 187,
    descricao: "Camisa da Seleção Argentina modelo torcedor, listras celeste e branco.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul claro/Branco"],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcXPm2-bWnazKb6KgEtJG-EnR4FrGEUkYFjG-zeI5hg&s=10"
  },
  {
    id: 165,
    nome: "Camisa São Paulo New Balance",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "New Balance",
    rating: 4.6,
    avaliacoes: 82,
    descricao: "Camisa do São Paulo FC modelo torcedor, tecido leve e respirável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrD9-s13u7WLksxaRXUhsyYtm3tsCOVC7Hm4ah4EQi5g&s=10"
  },
  {
    id: 166,
    nome: "Camisa Chelsea Nike",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "Nike",
    rating: 4.6,
    avaliacoes: 77,
    descricao: "Camisa do Chelsea FC modelo torcedor, tecido leve e respirável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ463XmfT4YEh_IO8PPvrOaMxN1J5dFa2awl3HPno-53g&s=10"
  },
  {
    id: 167,
    nome: "Camisa Manchester City Puma",
    preco: 169.90,
    categoria: "camisas-time",
    marca: "Puma",
    rating: 4.7,
    avaliacoes: 93,
    descricao: "Camisa do Manchester City modelo torcedor, tecido leve e respirável.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul celeste"],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDx7mUujDhDNZypq4T8wo8-g7EklGzR9R5pNuFnUM2VA&s=10"
  }
];

/* =========================================================
   CONJUNTOS
   ========================================================= */

const conjuntosMasculinos = [
  {
    id: 500,
    nome: "Conjunto Nike Tech Fleece Preto",
    preco: 379.90,
    categoria: "conjuntos",
    marca: "Nike",
    rating: 4.9,
    avaliacoes: 210,
    descricao: "Conjunto Nike Tech Fleece moletom + calça, tecido inovador que mantém o calor sem peso.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    imagem: "https://cdn.awsli.com.br/600x450/1900/1900104/produto/264034650/img_6235-cbv8sxqiwz.jpeg"
  }
];

/* Lista única com todos os produtos — usada na busca, filtros e página de produto */
const todosProdutos = [
  ...camisasMasculinas,
  ...camisasTimeNovas,
  ...nikeScamisasNovas,
  ...adidasCamisasNovas,
  ...pumaCamisasNovas,
  ...conjuntosMasculinos,
  ...calcasMasculinas,
  ...nikeBermudasNovas,
  ...adidasCalcasNovas,
  ...pumaCalcasNovas,
  ...tenisMasculinos,
  ...nikeTenisNovos,
  ...adidasTenisNovos,
  ...pumaTenisNovos,
  ...bonesMasculinos,
  ...nikeBonesNovos,
  ...adidasBonesNovos,
  ...pumaBonesNovos,
  ...casacosMasculinos,
  ...nikeCasacosNovos,
  ...adidasCasacosNovos,
  ...pumaCasacosNovos,
  ...acessoriosMasculinos
];

/* =========================================================
   UTILITÁRIOS
   ========================================================= */

const CATEGORIAS = {
  "camisas-time": "Camisas de Time",
  camisas: "Camisas",
  conjuntos: "Conjuntos",
  calcas: "Calças & Bermudas",
  casacos: "Casacos",
  tenis: "Tênis",
  bones: "Bonés",
  acessorios: "Acessórios"
};

const MAX_PARCELAS = 6;
const PARCELA_MINIMA = 50;

/* Imagem de reserva (aparece se a foto do produto não carregar) */
const IMG_PLACEHOLDER = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>" +
  "<rect width='400' height='400' fill='#1d1d24'/>" +
  "<text x='50%' y='50%' fill='#67645c' font-family='sans-serif' font-size='22' " +
  "font-weight='700' text-anchor='middle' dominant-baseline='middle' letter-spacing='4'>SPORTSTYLE</text></svg>"
);

function imgFallback(img) {
  img.onerror = null;
  img.src = IMG_PLACEHOLDER;
}

function esc(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function rotuloCategoria(categoria) {
  return CATEGORIAS[categoria] || categoria;
}

/* R$ 1.299,90 (formato brasileiro) */
function formatarPreco(valor) {
  return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function textoParcelamento(preco) {
  const parcelas = Math.min(MAX_PARCELAS, Math.floor(preco / PARCELA_MINIMA));
  if (parcelas < 2) return "";
  return `ou ${parcelas}x de ${formatarPreco(preco / parcelas)} sem juros`;
}

function getProdutoPorId(id) {
  return todosProdutos.find(p => p.id === Number(id));
}

/* =========================================================
   RENDERIZAÇÃO DE PRODUTOS
   ========================================================= */

function gerarEstrelas(rating) {
  const cheias = Math.round(rating);
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += i <= cheias ? "★" : "☆";
  }
  return `<span class="stars" aria-label="Avaliação ${rating} de 5">${html}</span>`;
}

function htmlCardProduto(produto) {
  /* Produto com mais de um tamanho/cor precisa de escolha → vai para a página do produto */
  const precisaEscolher = produto.tamanhos.length > 1 || produto.cores.length > 1;
  const acao = precisaEscolher
    ? `<a href="produto.html?id=${produto.id}" class="buy-btn">Escolher opções</a>`
    : `<button type="button" class="buy-btn" data-add="${produto.id}">Adicionar ao Carrinho</button>`;
  const parcelas = textoParcelamento(produto.preco);

  return `
    <article class="product-card">
      <a href="produto.html?id=${produto.id}" class="product-link">
        <div class="product-img-wrap">
          <img src="${produto.imagem}" alt="${esc(produto.nome)}" loading="lazy" width="400" height="250" onerror="imgFallback(this)">
        </div>
        <span class="product-brand">${esc(produto.marca)}</span>
        <h3>${esc(produto.nome)}</h3>
        <div class="product-rating">
          ${gerarEstrelas(produto.rating)}
          <span class="rating-count">(${produto.avaliacoes})</span>
        </div>
        <p>${formatarPreco(produto.preco)}</p>
        ${parcelas ? `<p class="parcelas">${parcelas}</p>` : ""}
      </a>
      ${acao}
    </article>
  `;
}

function renderizarProdutos(lista, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Nenhum produto encontrado com esses filtros.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = lista.map(htmlCardProduto).join("");
}
