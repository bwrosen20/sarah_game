import StoreItem from './StoreItem'

function Store({buyMain,mainStoreItems}){

    return <div >
        <h1 className="storeTitle">Store</h1>
        {mainStoreItems.map((item)=>(
            item["visible"]>0 ? <StoreItem visible={item["visible"]} buyMain={buyMain} item={item["item"]} amount={item["amount"]} price={item["price"]} picture={item["picture"]} index={item["index"]} key = {item["index"]}/> : null
        ))}
    </div>
}

export default Store