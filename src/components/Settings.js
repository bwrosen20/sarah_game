import {useState} from 'react'
import Instructions from './Instructions'

function Settings({save,handleShowAutoSave,autoSaveOnScreen,autoSaveAtAll,handleAutoSaveAtAll,youSureFunc}){

    const [instruct,setInstruct]=useState(false)

    function handleInstrucClick(){
        setInstruct(!instruct)
    }

    function onShowAutoSave(){
        handleShowAutoSave()
    }

    function onAutoSaveAtAll(){
        handleAutoSaveAtAll()
    }

    return<div className="settingsScreen">
        {instruct? <Instructions />:
        <div>
        <h1 className="heading">SETTINGS</h1>
        <div className="settingsLevel" onClick={handleInstrucClick}>
            <h2 className="settingsButton">Instructions</h2>
        </div>
        <div className="settingsLevel" onClick={youSureFunc}>
            <h2 className="settingsButton">Reset</h2>
        </div>
        <div className="settingsLevel" onClick={save}>
            <h2 className="settingsButton">Save</h2>
        </div>
        <div className="settingsLevel" onClick={onAutoSaveAtAll}>
            <h2 className={autoSaveAtAll? "settingsButton": "offSettingsButton"}>AutoSave</h2>
        </div>
        <div className="settingsLevel" onClick={onShowAutoSave}>
            <h2 className={autoSaveAtAll? (autoSaveOnScreen? "settingsButton": "offSettingsButton"):"offSettingsButton"}>Show AutoSaves</h2>
        </div>
        </div>}
        
    </div>
}

export default Settings