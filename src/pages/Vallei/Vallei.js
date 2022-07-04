import React, {useContext} from 'react';
import {LocationContext} from "../../Context/LocationContext";
import Region from "../region/Region";

function EemlandVallei() {
    const {locationsVallei} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsVallei}
            regionName="Eemland / Vallei"
        />
    </div>
}

export default Vallei