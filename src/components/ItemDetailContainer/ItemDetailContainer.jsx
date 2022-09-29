import React, {useState , useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import  {getItem} from "../../Services/data"
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
  let [data, setData] = useState({});
  
  const {id}= useParams() ;
  useEffect(() => {
    getItem(id).then((nuevosDatos) => setData(nuevosDatos));
  }, [id]);
  return (
    <div>
      <div className="main container"></div>
      <div>
        <ItemDetail {...data} />
      </div>
    </div>
  );
}



export default ItemDetailContainer;