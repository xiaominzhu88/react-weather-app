import React from "react";

const Weather = (props) => {
    return(
        <div className='weather'>

        {/* Use  Short circuit evaluation instead table*/}
        {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
        {props.temperature && <p>Temperature:  {props.temperature}</p>}
        {props.description && <p>Description:  {props.description}</p>}
        {props.error && <p>{props.error}</p>}

    </div>
    )
}

export default Weather;