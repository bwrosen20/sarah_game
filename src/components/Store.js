import StoreItem from './StoreItem'
import {StoreItemsContext} from '../App'
import {useContext} from 'react'

function Store({buyMain}){

    const mainStoreItems = useContext(StoreItemsContext)

    return <div >
        <h1 className="storeTitle">Store</h1>
        {mainStoreItems.map((item)=>(
            item["visible"]>0 ? <StoreItem visible={item["visible"]} buyMain={buyMain} item={item["item"]} amount={item["amount"]} price={item["price"]} picture={item["picture"]} index={item["index"]} key = {item["index"]}/> : null
        ))}
    </div>
}

export default Store