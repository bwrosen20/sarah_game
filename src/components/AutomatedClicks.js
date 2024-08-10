import AutomatedClickItem from './AutomatedClickItem'

function AutomatedClicks({mainStoreItems}){

    return<div className="automatedClicks">
        {mainStoreItems.map((item)=>(
            <AutomatedClickItem item={item} key={item["index"]}/>
        ))}
    </div>
}

export default AutomatedClicks