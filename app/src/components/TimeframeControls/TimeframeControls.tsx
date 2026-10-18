import type { Timeframe } from "../../types";
import {timeframes} from "../../types";
import "./TimeframeControls.sass";

type TimeframeControlsProps = {
    mode: Timeframe,
    onModeChange: (mode: Timeframe) => void; 
}

function TimeframeControls({mode, onModeChange}: TimeframeControlsProps) {
  return (
    <div className="timeframe-controls" role="group" aria-label="Timeframe">
        {timeframes.map(option => (
            <button
                className={mode === option ? "is-selected" : ""} 
                key={option}
                onClick={() => onModeChange(option)}
                aria-pressed = {mode === option}
                type="button" 
                
            >
                {option}
            </button>
        ))}
    </div>
  )
}

export default TimeframeControls;