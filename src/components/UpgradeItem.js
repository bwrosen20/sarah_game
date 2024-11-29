import question from '../question.png'

function UpgradeItem({grade}){

    const hidden = grade["visible"]
    const picture = hidden===3 ? grade["picture"]:question

    return<div>
        <img className="gridImage" src={picture} onClick={()=>(console.log(grade["index"]))}/>
    </div>
}

export default UpgradeItem