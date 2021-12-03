import loot from "../history/all.json"
import {LootReceived} from "../types/LootReceived";

export const HomePage = () => {

  const lootReceived = loot.map(_loot =>
    <div>
      {_loot.itemID}
    </div>
  )

  return <div>{lootReceived}</div>
}