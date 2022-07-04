import React, {useContext} from 'react';
import {LocationContext} from "../../Context/LocationContext";
import Region from "../region/Region";

function UtrechtWestStad() {
    const {locationsUtrechtWestStad} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsUtrechtWestStad}
            regionName="Utrecht West-/ Stad"
        />

    </div>
}

export default UtrechtWestStad