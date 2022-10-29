
/* Function to Calculate Windchill*/ 
/* f = 35.74 + 0.6215t - 35.75s(0.16) + 0.4275ts(0.16) */

/* Wind Chill Specification Limits: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)." - U.S. National Weather Service */ 



const temp = parseFloat(28);
const wind = parseFloat(11.3);

document.querySelector("#temp").innerHTML = temp
document.querySelector("#wspeed").innerHTML = wind

let windchill = (35.74+(0.6215*temp)-(35.75*(wind**0.16))+(0.4275*temp*(wind**0.16)));

if (temp<=50) {
    if (wind>3) {
        document.querySelector("#windchill").innerHTML = windchill
        }
    }
    else {
        document.querySelector("#windchill").innerHTML = 'N/A'
    }