const bebidas = [
  {
    title: "Pepsi",
    price: "140",
    category: "Bebidas sin Alcohol",
  },
  {
    title: "7up",
    price: "140",
    category: "Bebidas sin Alcohol",
  },
  {
    title: "7up",
    price: "140",
    category: "Bebidas sin Alcohol",
  },
  {
    title: "7up",
    price: "140",
    category: "Bebidas sin Alcohol",
  },
  {
    title: "7up",
    price: "140",
    category: "Bebidas sin Alcohol",
  },
  {
    title: "7up",
    price: "140",
    category: "Bebidas sin Alcohol",
  },
  {
    title: "7up",
    price: "140",
    category: "Bebidas sin Alcohol",
  },
  {
    title: "7up",
    price: "140",
    category: "Bebidas sin Alcohol",
  },
  {
    title: "Café chico",
    price: "140",
    category: "Cafetería",
  },
  {
    title: "Café Mediano",
    price: "140",
    category: "Cafetería",
  },
  {
    title: "Café",
    price: "140",
    category: "Cafetería",
  },
  {
    title: "Café",
    price: "140",
    category: "Cafetería",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Litro",
  },
  {
    title: "Andes",
    price: "140",
    category: "Cerveza Long Neck",
  },
  {
    title: "Corona",
    price: "140",
    category: "Cerveza Long Neck",
  },
  {
    title: "Corona",
    price: "140",
    category: "Cerveza Long Neck",
  },
  {
    title: "Corona",
    price: "140",
    category: "Cerveza Long Neck",
  },
  {
    title: "Schneider",
    price: "140",
    category: "Lata",
  },
  {
    title: "Schneider",
    price: "140",
    category: "Lata",
  },
  {
    title: "Schneider",
    price: "140",
    category: "Lata",
  },
  {
    title: "Schneider",
    price: "140",
    category: "Lata",
  },
  {
    title: "Schneider",
    price: "140",
    category: "Lata",
  },
  {
    title: "Pinta 500cc",
    price: "140",
    category: "Tirada",
  },
  {
    title: "Chopp 300cc",
    price: "140",
    category: "Tirada",
  },
  {
    title: "Red Strong Dowell",
    price: "140",
    category: "Lata Artesanal",
  },
  {
    title: "Red Strong Dowell",
    price: "140",
    category: "Lata Artesanal",
  },
  {
    title: "Red Strong Dowell",
    price: "140",
    category: "Lata Artesanal",
  },
  {
    title: "Red Strong Dowell",
    price: "140",
    category: "Lata Artesanal",
  },
  {
    title: "Red Strong Dowell",
    price: "140",
    category: "Lata Artesanal",
  },
];

export const bebidasSinAlcohol = bebidas.filter(
  (bebida) => bebida.category === "Bebidas sin Alcohol"
);

export const cafeteria = bebidas.filter(
  (bebida) => bebida.category === "Cafetería"
);

export const cervezasLitro = bebidas.filter(
  (bebida) => bebida.category === "Cerveza Litro"
);

export const cervezaLongNeck = bebidas.filter(
  (bebida) => bebida.category === "Cerveza Long Neck"
);

export const cervezasLata = bebidas.filter(
  (bebida) => bebida.category === "Lata"
);

export const cervezasTirada = bebidas.filter(
  (bebida) => bebida.category === "Tirada"
);

export const cervezasLataArtesanal = bebidas.filter(
  (bebida) => bebida.category === "Lata Artesanal"
);

export default bebidas;
