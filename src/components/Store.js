import StoreItem from './StoreItem'

function Store(){

const storeArray = ["Cursor", "Diet Coke", "Mid 2000's Pop Song", "Meat Substitute", "True Crime Video",
                "Family/Friend", "Nature", "Anime", "Wine", "Very Specific Movie", "Special Place",
                "Video Game", "Boutique", "Brian"]

    return <div >
        {storeArray.map((item)=>(
            <StoreItem item={item} value={(storeArray.findIndex((x)=>x===item))} key = {item}/>
        ))}
    </div>
}

export default Store