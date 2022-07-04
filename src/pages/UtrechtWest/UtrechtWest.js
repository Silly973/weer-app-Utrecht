import React, {useContext} from 'react';
import {LocationContext} from "../../Context/LocationContext";
import Region from "../region/Region";

function UtrechtWest() {
    const {locationsUtrechtWest} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsUtrechtWest}
            regionName="UtrechtWest"
        />
    </div>
}

export default UtrechtWest