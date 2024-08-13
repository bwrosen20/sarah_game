import AutomatedClickItem from './AutomatedClickItem'
import {StoreItemsContext} from '../App'
import {useContext} from 'react'

function AutomatedClicks(){
    const mainStoreItems = useContext(StoreItemsContext)

    return<div className="automatedClicks">
        {mainStoreItems.map((item)=>(
            <AutomatedClickItem item={item} key={item["index"]}/>
        ))}
    </div>
}

export default AutomatedClicks