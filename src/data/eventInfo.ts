/**
 * Single source of truth for event dates, times, and venues.
 * Source: knowledge-base/05-event-operations/
 */

export const eventDates = {
  year: 2026,
  month: "March",
  days: "27-29",
  fullRange: "March 27–29, 2026",
  shortRange: "March 27-29",
  friday: { 
    date: "March 27", 
    dayOfWeek: "Friday",
    label: "FRIDAY, MARCH 27",
    shortLabel: "Friday 27th"
  },
  saturday: { 
    date: "March 28", 
    dayOfWeek: "Saturday",
    label: "SATURDAY, MARCH 28",
    shortLabel: "Saturday 28th"
  },
  sunday: { 
    date: "March 29", 
    dayOfWeek: "Sunday",
    label: "SUNDAY, MARCH 29",
    shortLabel: "Sunday 29th"
  },
};

export const venues = {
  primary: {
    name: "Science Museum of Virginia",
    shortName: "Science Museum of VA",
    address: "2500 W Broad St, Richmond, VA 23220",
  },
  satellite: [
    { type: "Co-Working", description: "Downtown & Scott's Addition" },
    { type: "Corporate", description: "Tech company offices" },
    { type: "Libraries", description: "Public & university" },
    { type: "Remote", description: "Virtual participation" },
  ],
};

export const eventStats = {
  duration: "48hrs",
  durationLabel: "Duration",
  prizePool: "$25K+",
  prizePoolLabel: "Awards Pool",
  participants: "350+",
  participantsLabel: "Participants",
};
