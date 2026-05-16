export type ProductCategory =
  | "Terceira Peça"
  | "Calças"
  | "Saias"
  | "Blusas"
  | "Botas";

export type CategoryFilter = "Tudo" | ProductCategory;

export type Product = {
  id: number;
  number: string;
  category: ProductCategory;
  brand: string;
  name: string;
  size?: string;
  image: string;
  url: string;
};

export type LiveInfo = {
  influencerName: string;
  partnerName: string;
  liveTitle: string;
  liveName: string;
  liveDate: string;
  liveTime: string;
  liveChannel: string;
  instagramUrl: string;
};

// Edite este bloco para trocar nome da influenciadora, live, loja, data,
// horário, canal e link principal do Instagram.
export const liveInfo: LiveInfo = {
  influencerName: "Pam Braga",
  partnerName: "C&A",
  liveTitle: "Live C&A · Pam Braga",
  liveName: "Favoritas da Live C&A",
  liveDate: "16 de maio de 2026",
  liveTime: "20h",
  liveChannel: "Instagram",
  instagramUrl: "https://www.instagram.com/",
};

// Edite as categorias aqui caso a live tenha outra organização.
export const categories: CategoryFilter[] = [
  "Tudo",
  "Terceira Peça",
  "Calças",
  "Saias",
  "Blusas",
  "Botas",
];

// Edite esta lista para trocar produtos, imagens e links de compra.
// Coloque as imagens em /public/products e use caminhos como /products/produto-01.svg.
export const products: Product[] = [
  {
    id: 1,
    number: "01",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Camisa manga longa jeans com brilho",
    image: "/products/produto-01.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzU5ZGUzYQ",
  },
  {
    id: 2,
    number: "02",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Jaqueta de suede marrom",
    size: "Tamanho · G",
    image: "/products/produto-07.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2I1OTEzNA",
  },
  {
    id: 3,
    number: "03",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Casaco texturizado cinza",
    size: "Tamanho · M",
    image: "/products/produto-08.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2I1MjYzMQ",
  },
  {
    id: 4,
    number: "04",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Blazer alfaiataria xadrez bege",
    size: "Tamanho · P",
    image: "/products/produto-07.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzI3OTE2NA",
  },
  {
    id: 5,
    number: "05",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Cardigan tricô rosa",
    size: "Tamanho · P",
    image: "/products/produto-08.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzJhMmMwNw",
  },
  {
    id: 6,
    number: "06",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Jaqueta sarja fendi Mindset",
    size: "Tamanho · M",
    image: "/products/produto-01.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2Y5ZDhmYw",
  },
  {
    id: 7,
    number: "07",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Casaqueto xadrez azul",
    size: "Tamanho · M",
    image: "/products/produto-07.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0Xzc5NDFiOA",
  },
  {
    id: 8,
    number: "08",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Casaco de pelúcia bege",
    size: "Tamanho · M",
    image: "/products/produto-08.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2U5YjcwMw",
  },
  {
    id: 9,
    number: "09",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Casaqueto vinho",
    size: "Tamanho · M",
    image: "/products/produto-07.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzFjOTFiYg",
  },
  {
    id: 10,
    number: "10",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Jaqueta com cinza fendi",
    size: "Tamanho · M",
    image: "/products/produto-01.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzljM2RkMQ",
  },
  {
    id: 11,
    number: "11",
    category: "Terceira Peça",
    brand: "C&A",
    name: "Jaqueta texturizada bege",
    size: "Tamanho · M",
    image: "/products/produto-08.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzRjNjViNw",
  },
  {
    id: 12,
    number: "12",
    category: "Calças",
    brand: "C&A",
    name: "Calça barrel jeans Mindset",
    size: "Tamanho · 38",
    image: "/products/produto-03.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2Y0MzFmNQ",
  },
  {
    id: 13,
    number: "13",
    category: "Calças",
    brand: "C&A",
    name: "Calça baggy jeans Mindset",
    size: "Tamanho · 38",
    image: "/products/produto-03.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzQwYmYyMQ",
  },
  {
    id: 14,
    number: "14",
    category: "Calças",
    brand: "C&A",
    name: "Calça baggy bege",
    size: "Tamanho · 40",
    image: "/products/produto-03.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0Xzg5ZGUzNQ",
  },
  {
    id: 15,
    number: "15",
    category: "Calças",
    brand: "C&A",
    name: "Calça alfaiataria xadrez bege",
    image: "/products/produto-03.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzI2YzRhNQ",
  },
  {
    id: 16,
    number: "16",
    category: "Calças",
    brand: "C&A",
    name: "Calça baggy de alfaiataria com pregas marrom",
    size: "Tamanho · 40",
    image: "/products/produto-03.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzM1ZTdhYg",
  },
  {
    id: 17,
    number: "17",
    category: "Calças",
    brand: "C&A",
    name: "Calça de alfaiataria wide leg com pregas cinza",
    size: "Tamanho · 42",
    image: "/products/produto-03.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzA3YTM5ZA",
  },
  {
    id: 18,
    number: "18",
    category: "Calças",
    brand: "C&A",
    name: "Calça reta com pregas xadrez azul",
    size: "Tamanho · 40",
    image: "/products/produto-03.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2E0NjE2NQ",
  },
  {
    id: 19,
    number: "19",
    category: "Saias",
    brand: "C&A",
    name: "Saia midi de sarja resinada marrom",
    size: "Tamanho · 40",
    image: "/products/produto-02.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2VkZTg5Mw",
  },
  {
    id: 20,
    number: "20",
    category: "Saias",
    brand: "C&A",
    name: "Minissaia com cinto texturizada cinza",
    size: "Tamanho · 42",
    image: "/products/produto-02.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzY5NDM3MQ",
  },
  {
    id: 21,
    number: "21",
    category: "Saias",
    brand: "C&A",
    name: "Saia midi acetinada marrom",
    size: "Tamanho · 40 · Vinho/preta",
    image: "/products/produto-02.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2E0ZjZmZA",
  },
  {
    id: 22,
    number: "22",
    category: "Blusas",
    brand: "C&A",
    name: "Suéter amplo branco",
    size: "Tamanho · P",
    image: "/products/produto-06.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzU4YTQzNg",
  },
  {
    id: 23,
    number: "23",
    category: "Blusas",
    brand: "C&A",
    name: "Suéter listrado azul e caramelo",
    size: "Tamanho · P",
    image: "/products/produto-06.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzM4OWM1NA",
  },
  {
    id: 24,
    number: "24",
    category: "Blusas",
    brand: "C&A",
    name: "Blusa ombro único feminina risca de giz vinho",
    size: "Tamanho · G",
    image: "/products/produto-06.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2ExOGU2OA",
  },
  {
    id: 25,
    number: "25",
    category: "Blusas",
    brand: "C&A",
    name: "Suéter tricô gola alta azul",
    size: "Tamanho · M",
    image: "/products/produto-06.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2M4YjRkZA",
  },
  {
    id: 26,
    number: "26",
    category: "Blusas",
    brand: "C&A",
    name: "Blusa de tricô manga curta",
    size: "Tamanho · G",
    image: "/products/produto-06.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzcxZWY2MA",
  },
  {
    id: 27,
    number: "27",
    category: "Botas",
    brand: "C&A",
    name: "Bota bege",
    size: "Peguei meu número, uso sem meia",
    image: "/products/produto-05.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2UzNzkxMg",
  },
  {
    id: 28,
    number: "28",
    category: "Botas",
    brand: "C&A",
    name: "Bota cano baixo e salto kitten",
    size: "Peguei um número a mais",
    image: "/products/produto-05.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzVlY2ZhNA",
  },
  {
    id: 29,
    number: "29",
    category: "Botas",
    brand: "C&A",
    name: "Bota cano alto e salto kitten",
    size: "Peguei um número a mais",
    image: "/products/produto-05.svg",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzkzMDYyYw",
  },
];
