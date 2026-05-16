export type ProductCategory =
  | "Vestidos"
  | "Blusas"
  | "Calças"
  | "Acessórios"
  | "Sapatos"
  | "Outros";

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
  "Vestidos",
  "Blusas",
  "Calças",
  "Acessórios",
  "Sapatos",
  "Outros",
];

// Edite esta lista para trocar produtos, imagens e links de compra.
// Coloque as imagens em /public/products e use caminhos como /products/produto-01.svg.
export const products: Product[] = [
  {
    id: 1,
    number: "01",
    category: "Blusas",
    brand: "C&A",
    name: "Camisa manga longa jeans com brilho",
    size: "Tamanho · M",
    image: "/products/produto-01.svg",
    url: "https://link-do-produto.com",
  },
  {
    id: 2,
    number: "02",
    category: "Vestidos",
    brand: "C&A",
    name: "Vestido midi acetinado com alças finas",
    size: "Forma normal",
    image: "/products/produto-02.svg",
    url: "https://link-do-produto.com",
  },
  {
    id: 3,
    number: "03",
    category: "Calças",
    brand: "C&A",
    name: "Calça pantalona alfaiataria cintura alta",
    size: "Tamanho · 38",
    image: "/products/produto-03.svg",
    url: "https://link-do-produto.com",
  },
  {
    id: 4,
    number: "04",
    category: "Acessórios",
    brand: "C&A",
    name: "Bolsa tiracolo estruturada off-white",
    size: "Alça ajustável",
    image: "/products/produto-04.svg",
    url: "https://link-do-produto.com",
  },
  {
    id: 5,
    number: "05",
    category: "Sapatos",
    brand: "C&A",
    name: "Sandália minimalista salto bloco",
    size: "Cor · Nude",
    image: "/products/produto-05.svg",
    url: "https://link-do-produto.com",
  },
  {
    id: 6,
    number: "06",
    category: "Blusas",
    brand: "C&A",
    name: "Regata canelada decote quadrado",
    size: "Tamanho · P",
    image: "/products/produto-06.svg",
    url: "https://link-do-produto.com",
  },
  {
    id: 7,
    number: "07",
    category: "Vestidos",
    brand: "C&A",
    name: "Vestido chemise listrado com faixa",
    size: "Tecido leve",
    image: "/products/produto-07.svg",
    url: "https://link-do-produto.com",
  },
  {
    id: 8,
    number: "08",
    category: "Outros",
    brand: "C&A",
    name: "Conjunto comfy em malha texturizada",
    size: "Look completo",
    image: "/products/produto-08.svg",
    url: "https://link-do-produto.com",
  },
];
