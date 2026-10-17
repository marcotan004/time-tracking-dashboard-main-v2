import {loadActivities} from './activities-api.js'
import {setTimeTrackingButtonHandlers, onButtonModeSelection} from './timeframe-controls.js'
import {setActivityCards} from './activity-cards.js'

let mode = 'daily';
let activities = [];

async function init() {
    try {
        activities = await loadActivities();
        setMode(mode);
        setTimeTrackingButtonHandlers(setMode);
    } catch(error) {
        console.error("Failed to read the file:", error);
    }
}

function setMode(updated) {
    mode = updated;
    onButtonModeSelection(updated);
    setActivityCards(activities, mode);
}

init();