import StoreItem from './StoreItem'
import {StoreItemsContext} from '../App'
import {useContext} from 'react'

function Store({soFar,buyMain}){

    const mainStoreItems = useContext(StoreItemsContext)
    mainStoreItems.forEach((thing)=>{
        const index = parseInt(thing["index"])
        thing["soFar"]=soFar[index]["soFar"]
    })

    return <div >
        <h1 className="storeTitle">Store</h1>
        {mainStoreItems.map((item)=>(
            item["visible"]>0 ? <StoreItem soFar={soFar} visible={item["visible"]} buyMain={buyMain} item={item["item"]} amount={item["amount"]} price={item["price"]} picture={item["picture"]} index={item["index"]} soFar={item["soFar"]} clicks={item["clicks"]} key = {item["index"]}/> : null
        ))}
    </div>
}

export default Store