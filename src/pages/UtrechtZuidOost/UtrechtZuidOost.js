import React, {useContext} from 'react';
import {LocationContext} from "../../Context/LocationContext";
import Region from "../region/Region";

function UtrechtZuidOost() {
    const {locationsUtrechtZuidOost} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsUtrechtZuidOost}
            regionName="Utrecht Zuidoost"
        />
    </div>
}

export default UtrechtZuidOost