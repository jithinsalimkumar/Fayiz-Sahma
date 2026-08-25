/**
 * Central Configuration File for Islamic Wedding Invitation
 * All component text, dates, lineage lines, venue details, photos, and calendar links are sourced here.
 */

export const weddingData = {
  bismillah: {
    arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful",
  },

  coupleInitials: "F & S",

  groom: {
    name: "Muhammed Fayiz. MT",
    shortName: "Fayiz",
    lineageLine: "Son of Abdul Majeed MT & Fathima KK",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },

  bride: {
    name: "Sahma. AK",
    shortName: "Sahma",
    lineageLine: "Daughter of Abdul Muthalib AK & Rahmabi N",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  },

  wedding: {
    displayDate: "Sunday, 11 October 2026",
    displayTime: "5:00 PM to 8:00 PM",
  },

  countdownTargetISO: "2026-10-11T17:00:00+05:30",

  venue: {
    name: "Rose Hill Auditorium",
    fullName: "Rose Hill Auditorium, Cherukode",
    fullAddress: "Rose Hill Auditorium, Cherukode (Manjeri Road), Malappuram, Kerala - 679328",
    addressLines: [
      "Cherukode (Manjeri Road)",
      "Malappuram, Kerala — 679328",
    ],
    mapsLink: "https://maps.app.goo.gl/SbZJVjbXSR8JUnr46",
    photo: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    mapEmbedUrl: "https://maps.google.com/maps?q=Rose+Hill+Auditorium+Cherukode+Manjeri+Road+Malappuram+Kerala+679328&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  addToCalendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Muhammed+Fayiz.+MT+%26+Sahma.+AK%27s+Wedding+Reception&dates=20261011T113000Z/20261011T143000Z&details=Wedding+Reception+of+Muhammed+Fayiz.+MT+and+Sahma.+AK.&location=Rose+Hill+Auditorium%2C+Cherukode%2C+Manjeri+Road%2C+Malappuram%2C+Kerala+-+679328",

  quranicVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation: "And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy.",
    reference: "Surah Ar-Rum [30:21]",
  },

  familyInvitationMessage: "Together with our families, Abdul Majeed MT & Fathima KK and Abdul Muthalib AK & Rahmabi N cordially request the honour of your presence and prayers as we unite our children in holy matrimony under Allah's grace.",

  closingMessage: {
    arabic: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    english: "May Allah bless you, shower His blessings upon you, and join you together in goodness.",
  },

  hashtag: "#FayizWedsSahma",

  audio: {
    src: "",
    enabled: false,
  },

  images: {
    couplePhoto: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    venuePhoto: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    galleryPhotos: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
        caption: "The Journey Begins",
      },
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000",
        caption: "Moments of Joy",
      },
      {
        url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
        caption: "A Blessed Union",
      },
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000",
        caption: "Together Forever",
      },
    ],
  },
};

// Also export as weddingConfig for backward compatibility
export const weddingConfig = weddingData;
