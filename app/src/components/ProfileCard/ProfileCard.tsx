import "./ProfileCard.sass"
import type { Timeframe } from "../../types";
import TimeframeControls from "../TimeframeControls/TimeframeControls";

type ProfileCardProps = {
    name: string;
    profileImage: string;
    mode: Timeframe;
    onModeChange: (mode: Timeframe) => void
}

function ProfileCard({name, profileImage, mode, onModeChange}: ProfileCardProps) {
  return (
    <section className="profile">
        <div className="profile-card">
            <img src={profileImage} alt={`Portrait of ${name}`} className="profile-picture"/>
            <div className="profile-desc">
                <p>Report for</p>
                <h1>{name}</h1>
            </div>
        </div>
        <TimeframeControls
            mode={mode}
            onModeChange={onModeChange}
        />
    </section>
  )
}

export default ProfileCard