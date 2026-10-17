import {loadActivities} from './activities-api.js'
import {setTimeTrackingButtonHandlers, updateTimeframeSelection} from './timeframe-controls.js'
import {setActivityCards} from './activity-cards.js'

let mode = 'daily';
let activities = [];

async function init() {
    try {
        activities = await loadActivities();
        setMode(mode);
        setTimeTrackingButtonHandlers(setMode);
    } catch(error) {
        console.error("Failed to load dashboard:", error);
    }
}

function setMode(selectedMode) {
    mode = selectedMode;
    updateTimeframeSelection(selectedMode);
    setActivityCards(activities, mode);
}

init();