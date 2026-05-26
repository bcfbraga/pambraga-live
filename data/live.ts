export type ProductCategory = "Jaquetas" | "Blusas" | "Calças";

export type CategoryFilter = "Tudo" | ProductCategory;

export type Product = {
  id: number;
  number: string;
  category: ProductCategory;
  brand: string;
  name: string;
  size?: string;
  colors?: string[];
  price?: string;
  availability?: "instock" | "oos";
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
export const categories: CategoryFilter[] = ["Tudo", "Jaquetas", "Blusas", "Calças"];

// Regra importante: mantenha os CTAs exatamente com os links Minha C&A enviados.
// Eles são links de afiliado e não devem ser trocados pela URL final do produto.
// As imagens e cores abaixo foram lidas das páginas públicas ligadas a cada código Minha C&A.
export const products: Product[] = [
  {
    id: 1,
    number: "01",
    category: "Jaquetas",
    brand: "C&A",
    name: "Jaqueta de PU acinturada preta",
    size: "Tamanho · P",
    colors: ["Preto"],
    image: "https://cea.vtexassets.com/arquivos/ids/59355267/Foto-0.jpg?v=639135802666600000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzQ1MzYwYg",
  },
  {
    id: 2,
    number: "02",
    category: "Jaquetas",
    brand: "C&A",
    name: "Jaqueta bomber gola funnel neck cinza",
    size: "Tamanho · M",
    colors: ["Cinza"],
    image: "https://cea.vtexassets.com/arquivos/ids/59355448/Foto-0.jpg?v=639135895613900000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzdkM2RkNA",
  },
  {
    id: 3,
    number: "03",
    category: "Jaquetas",
    brand: "C&A",
    name: "Jaqueta bomber gola funnel neck marrom",
    size: "Tamanho · M",
    colors: ["Marrom Escuro"],
    image: "https://cea.vtexassets.com/arquivos/ids/59355438/Foto-0.jpg?v=639135894945230000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0Xzg3M2IyOQ",
  },
  {
    id: 4,
    number: "04",
    category: "Blusas",
    brand: "C&A",
    name: "Blusa de algodão peruano manga longa vermelha",
    size: "Tamanho · M",
    colors: ["Vermelho Médio"],
    image: "https://cea.vtexassets.com/arquivos/ids/59358747/Foto-0.jpg?v=639142118674400000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzhkNTkzNg",
  },
  {
    id: 5,
    number: "05",
    category: "Blusas",
    brand: "C&A",
    name: "Blusa de algodão peruano manga longa off white",
    size: "Tamanho · G",
    colors: ["Off White"],
    image: "https://cea.vtexassets.com/arquivos/ids/59359198/Foto-0.jpg?v=639142973638900000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzAzMjkwNA",
  },
  {
    id: 6,
    number: "06",
    category: "Blusas",
    brand: "C&A",
    name: "Blusa de algodão peruano manga longa preta",
    size: "Tamanho · M",
    colors: ["Preto"],
    image: "https://cea.vtexassets.com/arquivos/ids/59349082/Foto-0.jpg?v=639114438521330000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzlhMjM0MA",
  },
  {
    id: 7,
    number: "07",
    category: "Blusas",
    brand: "C&A",
    name: "Blusa decote degagê costas manga longa off white",
    size: "Tamanho · G",
    colors: ["Off White"],
    image: "https://cea.vtexassets.com/arquivos/ids/59361890/Foto-0.jpg?v=639149688781570000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2U2NjVhNg",
  },
  {
    id: 8,
    number: "08",
    category: "Blusas",
    brand: "C&A",
    name: "Camisa unissex de algodão manga longa xadrez t working title azul",
    size: "Tamanho · P",
    colors: ["Azul"],
    image: "https://cea.vtexassets.com/arquivos/ids/59358933/Foto-0.jpg?v=639142859702400000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0Xzc5OTliOA",
  },
  {
    id: 9,
    number: "09",
    category: "Blusas",
    brand: "C&A",
    name: "Camiseta alongada de algodão com renda off white",
    size: "Tamanho · P",
    colors: ["Off White"],
    image: "https://cea.vtexassets.com/arquivos/ids/59355404/Foto-0.jpg?v=639135890134000000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzY1NWE4NQ",
  },
  {
    id: 10,
    number: "10",
    category: "Blusas",
    brand: "C&A",
    name: "Camiseta alongada de algodão com renda vinho",
    size: "Tamanho · P",
    colors: ["Vinho"],
    image: "https://cea.vtexassets.com/arquivos/ids/59362888/Foto-0.jpg?v=639150709635100000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2E5M2I1Yw",
  },
  {
    id: 11,
    number: "11",
    category: "Blusas",
    brand: "C&A",
    name: "Vestido midi ombro único com viscose manga longa vinho",
    size: "Tamanho · M",
    colors: ["Vinho"],
    image: "https://cea.vtexassets.com/arquivos/ids/59355400/Foto-0.jpg?v=639135887982930000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzgwYmU3MA",
  },
  {
    id: 12,
    number: "12",
    category: "Calças",
    brand: "C&A",
    name: "Calça balloon de sarja marrom",
    size: "Tamanho · 40",
    colors: ["Marrom"],
    image: "https://cea.vtexassets.com/arquivos/ids/59307066/Foto-0.jpg?v=639017712297730000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzhmYTI4Yw",
  },
  {
    id: 13,
    number: "13",
    category: "Calças",
    brand: "C&A",
    name: "Calça reta unissex jeans azul",
    size: "Tamanho · 38",
    colors: ["Jeans Médio"],
    image: "https://cea.vtexassets.com/arquivos/ids/59358892/Foto-0.jpg?v=639142780256500000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0Xzc5MDU3OQ",
  },
  {
    id: 14,
    number: "14",
    category: "Calças",
    brand: "C&A",
    name: "Calça reta jeans azul",
    size: "Tamanho · 38",
    colors: ["Jeans Claro"],
    image: "https://cea.vtexassets.com/arquivos/ids/59282925/Foto-0.jpg?v=638955486606900000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0X2E4NDM2Mg",
  },
  {
    id: 15,
    number: "15",
    category: "Calças",
    brand: "C&A",
    name: "Calça barrel jeans azul",
    size: "Tamanho · 40",
    colors: ["Jeans Escuro"],
    image: "https://cea.vtexassets.com/arquivos/ids/59317780/Foto-0.jpg?v=639052142615830000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzEyY2I0OQ",
  },
  {
    id: 16,
    number: "16",
    category: "Calças",
    brand: "C&A",
    name: "Calça reta cós elástico cinza",
    size: "Tamanho · M",
    colors: ["Cinza"],
    image: "https://cea.vtexassets.com/arquivos/ids/59355443/Foto-0.jpg?v=639135895413230000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0XzUyNDkyOA",
  },
  {
    id: 17,
    number: "17",
    category: "Calças",
    brand: "C&A",
    name: "Calça reta cós elástico mindset marrom",
    size: "Tamanho · M",
    colors: ["Marrom"],
    image: "https://cea.vtexassets.com/arquivos/ids/59355433/Foto-0.jpg?v=639135894614900000",
    url: "https://minhacea.cea.com.br/?lcea=MTU0Njc0Xzk3NmQxOA",
  },
];
