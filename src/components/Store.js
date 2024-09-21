import StoreItem from './StoreItem'
import {StoreItemsContext} from '../App'
import {useContext} from 'react'

function Store({soFar,buyMain,mainClicks,thousandFingersCount}){

    const mainStoreItems = useContext(StoreItemsContext)
    mainStoreItems.forEach((thing)=>{
        const index = parseInt(thing["index"])
        thing["soFar"]=soFar[index]["soFar"]
    })

    return <div >
        <h4>Smile Makers</h4>
        <div className="mainStore">
            {mainStoreItems.map((item)=>(
                item["visible"]>0 ? <StoreItem thousandFingersCount={thousandFingersCount} mainClicks={mainClicks} extras={item["extra"]} visible={item["visible"]} buyMain={buyMain} item={item["item"]} amount={item["amount"]} price={item["price"]} picture={item["picture"]} index={item["index"]} soFar={item["soFar"]} clicks={item["clicks"]} key = {item["index"]}/> : null
            ))}
        </div>
    </div>
}

export default Store