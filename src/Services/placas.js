const data = [
    {
      id: 1,
      title: "Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X TUF GAMING OC",
      price: 1060,
      detail: "La mejor placa de video del mercado",
      img:"/assets/placaasus.png",
    },
    {
      id: 2,
      title: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X GAMING X TRIO",
      price: 975,
      detail: "La mejor placa de video del mercado",
      img:"/assets/placamsi.png",
    },
    {
      id: 3,
      title: "Placa de Video Zotac GeForce RTX 3090 24GB GDDR6X Trinity",
      price: 915,
      detail: "La mejor placa de video del mercado",
      img:"/assets/placazotac.jpg",
    },
  ];
  
  export default function getItems(){
      return new Promise ((resolve, reject) =>{
          setTimeout(()=>{
              resolve (data);
          },2000);
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
      }, 1500)
    });
}