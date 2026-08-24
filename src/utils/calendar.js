/**
 * Generates a Google Calendar event link based on wedding configuration.
 */
export function generateGoogleCalendarUrl(config) {
  const { couple, eventDate, venue } = config;

  const title = encodeURIComponent(`${couple.groom.shortName} & ${couple.bride.shortName}'s Wedding Ceremony`);
  const details = encodeURIComponent(
    `You are cordially invited to celebrate the wedding ceremony of ${couple.groom.name} & ${couple.bride.name}.\n\nDate: ${eventDate.formattedDate}\nTime: ${eventDate.formattedTime}\nVenue: ${venue.fullName}`
  );
  const location = encodeURIComponent(`${venue.fullName}, ${venue.addressLine1}, ${venue.cityStateZip}`);

  // Convert ISO date to UTC YYYYMMDDTHHMMSSZ format for Google Calendar
  const startDateObj = new Date(eventDate.isoTarget);
  // Default duration: 3 hours
  const endDateObj = new Date(startDateObj.getTime() + 3 * 60 * 60 * 1000);

  const formatUtcStr = (date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const dates = `${formatUtcStr(startDateObj)}/${formatUtcStr(endDateObj)}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
