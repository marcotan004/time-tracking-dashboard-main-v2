function ProfileCard() {
  return (
    <>
        <section className="profile">
            <div className="profile-card">
                <img src="images/image-jeremy.png" alt="Portrait of Jeremy Robson" className="profile-picture"/>
                <div className="profile-desc">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="time-tracking-options-menu">
                <button data-mode="daily" type="button">Daily</button>
                <button data-mode="weekly" type="button">Weekly</button>
                <button data-mode="monthly" type="button">Monthly</button>
            </div>
        </section>
    </>
  )
}

export default ProfileCard