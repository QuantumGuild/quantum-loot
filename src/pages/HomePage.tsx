import loot from "../history/all.json"
import {Members} from "../components/Members";

export const HomePage = () => {

    const lootReceived = loot.map(_loot =>
        <div>
            {_loot.itemID}
        </div>
    )

    return <div>
        <Members/>
    </div>
}