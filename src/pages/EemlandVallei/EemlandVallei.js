import React, {useContext} from 'react';
import {LocationContext} from "../../Context/LocationContext";
import Region from "../region/Region";

function EemlandVallei() {
    const {locationsEemlandVallei} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsEemlandVallei}
            regionName="Eemland / Vallei"
        />
    </div>
}

export default EemlandVallei