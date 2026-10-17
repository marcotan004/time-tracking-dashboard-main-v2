export async function loadActivities() {
    const response = await fetch('data.json');

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const activities = await response.json();
    return activities;
}