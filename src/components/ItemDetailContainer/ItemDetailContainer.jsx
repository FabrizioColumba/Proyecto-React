import React, {useState , useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import  {getItem} from "../../Services/placas"

function ItemDetailContainer() {
  let [data, setData] = useState({});

  useEffect(() => {
    getItem().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <div className="main container">
        <ItemDetail 
        img={data.img}
        title={data.title}
        detail={data.detail}
         />
      </div>
    </div>
  );
}


export default ItemDetailContainer;