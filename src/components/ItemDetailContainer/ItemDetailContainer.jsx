import React, {useState , useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const {id}= useParams() ;
  const ids = [1 , 2, 3, 4, 5, 6 ,7 ,8 ,9 ]
  
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", id);
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
  }, [id])

  return (
    <>
    {
    ids.includes(parseInt(data.id)) &&
    <div>
      <div className="main container"></div>
      <div>
        <ItemDetail {...data} />
      </div>
    </div>
    }
    { ! ids.includes(parseInt(data.id)) &&
        <p>
        El producto no existe
       </p>
    }

    </>
  );
}



export default ItemDetailContainer;