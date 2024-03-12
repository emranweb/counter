// Convert the Databae DateTime to Client DateTime
export function convertToClientDateTime(databaseDateTimeString = "") {
    const dateTime = new Date(databaseDateTimeString);
    const offset = dateTime.getTimezoneOffset();
    console.log(offset);
    const offsetMilliseconds = offset * 60 * 1000;
    const localDateTime = new Date(dateTime.getTime() - offsetMilliseconds);
    return localDateTime.toLocaleString();
}
