import AutomatedClickItem from './AutomatedClickItem'
import {StoreItemsContext} from '../App'
import {useContext} from 'react'

function AutomatedClicks({doTheThing}){
    const mainStoreItems = useContext(StoreItemsContext)

    return<div className="automatedClicks">
        <button onClick={doTheThing}></button>
        {mainStoreItems.map((item)=>(
            <AutomatedClickItem item={item}/>
        ))}
    </div>
}

export default AutomatedClicks