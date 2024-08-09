import AutomatedClickItem from './AutomatedClickItem'

function AutomatedClicks({mainStoreItems}){

    return<div>
        {mainStoreItems.map((item)=>(
            <AutomatedClickItem item={item}/>
        ))}
    </div>
}

export default AutomatedClicks