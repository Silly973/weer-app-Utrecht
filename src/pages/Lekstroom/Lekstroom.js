import React, {useContext} from 'react';
import {LocationContext} from "../../Context/LocationContext";
import Region from "../region/Region";

function Lekstroom() {
    const {locationsLekstroom} = useContext(LocationContext)
    return <div>
        <Region
            locationsRegion={locationsLekstroom}
            regionName="Lekstroom"
        />
    </div>
}

export default Lekstroom