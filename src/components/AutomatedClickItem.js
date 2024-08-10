

function AutomatedClickItem({item}){

    const totalAmount = [...Array(item["amount"])].fill(1)

    return <div className={item["amount"] ? "automatedClickItem" : "automatedNone"}>
            {totalAmount.map((single)=>(
                <img src={item["picture"]} className="automatedPicture" key={item["index"]}/>
            ))
            }
    </div>
}

export default AutomatedClickItem