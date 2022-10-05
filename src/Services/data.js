const data = [
    {
      id: 1,
      title: "Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X TUF GAMING OC",
      price: 1060,
      detail: "La mejor placa de video del mercado",
      img:"/assets/placaasus.png",
      category: "placasdevideo",
    },
    {
      id: 2,
      title: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X GAMING X TRIO",
      price: 975,
      detail: "La mejor placa de video del mercado",
      img:"/assets/placamsi.png",
      category: "placasdevideo",
    },
    {
      id: 3,
      title: "Placa de Video Zotac GeForce RTX 3090 24GB GDDR6X Trinity",
      price: 915,
      detail: "La mejor placa de video del mercado",
      img:"/assets/placazotac.jpg",
      category: "placasdevideo",
    },
    {
      id: 4,
      title: "Procesador AMD Ryzen 9 5950X 4.9GHz Turbo AM4 - No incluye Cooler",
      price: 435,
      detail: "El mejor procesador del mercado",
      img:"/assets/procesador1.png",
      category: "procesadores",
    },
    {
      id: 5,
      title: "Procesador Intel Core i7 12700K 5.0GHz Turbo Socket 1700",
      price: 325,
      detail: "El mejor procesador del mercado",
      img:"/assets/procesador2.jpg",
      category: "procesadores",
    },
    {
      id: 6,
      title: "Procesador AMD Ryzen 9 5900X 4.8GHz Turbo AM4 - No incluye Cooler",
      price: 310,
      detail: "El mejor procesador del mercado",
      img:"/assets/procesador3.jpg",
      category: "procesadores",
    },
    {
      id: 7,
      title: "Memoria Adata DDR4 (2x8GB) 16GB 5000MHz XPG Spectrix ",
      price: 450,
      detail: "Las mejores rams del mercado",
      img:"/assets/ram1.jpg",
      category: "rams",
    },
    {
      id: 8,
      title: "Memoria Team DDR5 32GB (2x16GB) 5200MHz T-Force Vulcan Red",
      price: 300,
      detail: "Las mejores rams del mercado",
      img:"/assets/ram2.jpg",
      category: "rams",
    },
    {
      id: 9,
      title: "Memoria Team DDR4 64GB (2x32GB) 2666MHz T-Create",
      price: 189,
      detail: "Las mejores rams del mercado",
      img:"/assets/ram3.jpg",
      category: "rams",
    },
  ];
  
  export default function getItems(){
      return new Promise ((resolve, reject) =>{
          setTimeout(()=>{
              resolve (data);
          },1000);
      });
  }
  export function getItemsByCategory(cat){
    return new Promise ((resolve, reject) =>{
      let itemFind = data.filter((item) => {
        return item.category === cat;
      });
      setTimeout( () =>{
        if (itemFind) resolve(itemFind);
        else reject(new Error("Item no encontrado"));
      }, 1000)
    });
}
  export function getItem(itemId){
    return new Promise ((resolve, reject) =>{
      let itemFind = data.find((item) => {
        return item.id === parseInt(itemId)
      });
      setTimeout( () =>{
        if (itemFind) resolve(itemFind);
        else reject(new Error("Item no encontrado"));
      }, 1000)
    });
}