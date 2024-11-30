

function Instructions(){

    return<div className="instructionsScreen">
        <h1 className="heading">Instructions</h1>
        <p>Welcome to Sarah Smiler! The object of the game is 
            to make Sarah smile as much as possible. The store
            is filled with her favorite things, so the more
            you collect, the more she'll smile!
        </p>

        <h4>Clicking Sarah's Face</h4>
        <p>Clicking on Sarah's face will award you the given
            amount of smiles. You can earn more smiles per click
            in the store.
        </p>
        <h4>Smile Makers</h4>
        <p>The smile makers unlock as your smile total grows.
            Since Sarah loves them all so much, they will make
            Sarah smile for you, without the need to click
            on her face.
        </p>
        <h4>Upgrades</h4>
        <p>You can upgrade the smile makers to collect more
            smiles for you. Each upgrade applies to either 1
            or 2 smile makers, and allows them to automatically
            add more smiles to your total.
        </p>
        <h4>PowerUps</h4>
        <p>PowerUps will appear at random points throughout the game.
            You can click on them and you will either be rewarded smiles
            or Sarah's face will change and multiply your smiles per second
            and smiles per click.
            There are 4 types:
        <ul>
            <li>Golden Smiles are the most common. They will
                add a lump sum of smiles to your bank
            </li>
            <li>Mermaid Sarah will multiply one of your 
                smile makers by 10 for 30 seconds
            </li>
            <li>Survivor Sarah will multiply everything
                by 7 for 77 seconds
            </li>
            <li>Dark Light Sarah is the rarest and will 
                multiply everything by 777 for 13 seconds
            </li>
        </ul>
        <h4>Saving</h4>
        <p>After buying your first Smile Maker, 
            the game will automatically save to your browser
            storage every 10 seconds. You can also save manually
            in settings
        </p>

        </p>
    </div>
}

export default Instructions