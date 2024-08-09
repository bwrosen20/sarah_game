import StoreItem from './StoreItem'

function Store({buyMain,mainStoreItems}){

    return <div >
        {mainStoreItems.map((item)=>(
            <StoreItem buyMain={buyMain} item={item["item"]} price={item["price"]} picture={item["picture"]} index={item["index"]} key = {item["index"]}/>
        ))}
    </div>
}

export default Store