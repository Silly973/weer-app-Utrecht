import React, {useContext} from 'react';
import {LocationContext} from '../../Context/LocationContext';
import Region from "../region/Region";

function Utrecht() {
    const {
        locationsUtrechtWestStad,
        locationsLekstroom,

    } = useContext(LocationContext)

    const UtrechtLocations = locationsUtrechtWestStad
               .concat(locationsLekstroom)



    return <div>
        <Region
            locationsRegion={UtrechtLocations}
            regionName="Utrecht"
        />

    </div>
};
export default Utrecht

