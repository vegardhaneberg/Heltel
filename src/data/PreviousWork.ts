export interface Work {
  year: number;
  title: string;
  description: string;
  type: string;
  link: string;
  color: string;
}

export const WorkTimeLine: Work[] = [
  {
    year: 2025,
    title: "NRK Supernytt",
    description:
      "Like før startskudded for VM i friidrett gikk av stablen i 2025 lagde Helene en reportasje om norges medaljekandidater. Her får vi et informerende og morsomt møte med våre 🌟-er til det kommende mesterskapet i Tokyo 🇯🇵",
    type: "TV for barn",
    link: "https://tv.nrk.no/serie/supernytt/sesong/202509/episode/MSUM02091225",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    year: 2025,
    title: "NRK Newton",
    description:
      "Stjernene på himmelen er ganske faktastiske✨✨✨ Dette formidler Helene både pedagogisk og underholdende i denne episoden av Newton. Her får deltakerne også bryne seg på en stjernebilde-challenge i eposiden hvor Helene har vært manusforfatter, produsent og medvirkende.",
    type: "TV",
    link: "https://tv.nrk.no/serie/newton/sesong/2025/episode/DMPP21501625",
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
  },
  {
    year: 2024,
    title: "Helene Sjekker Av",
    description:
      "Radioprogram for Voldas Studentradio hvor Helene sjekker av alt hun hadde på bucketlisten sin under studietiden i Volda. Bli med når Helene prøver seg som søppeltømmer, detektiv og stifter et nært vennskap med 4 pensjonister fra Ørsta. Eposodene er også publisert på Spotify og Apple Podcast.",
    type: "Radio",
    link: "https://open.spotify.com/show/371wEolsdbDibF50jEln7W",
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    year: 2022,
    title: "Enten/Eller",
    description:
      "Ville du enten tilbrakt 6 mnd på tur med Lars Monsen til Canada, eller syklet fra Nordkapp til Sør-Kapp med Dag Otto Lauritzen og Sophie - Elise? Dette er bare ett av mange dilemmaer vi tar opp dette radioprogrammet. En ting er i hvert fall sikkert, du trenger mest sannsynlig aldri å ta hensyn til noe av det vi snakker om, men vi tar det på fult alvor likevel.",
    type: "Radio",
    link: "https://open.spotify.com/show/3zvH9gBm9JbRtAsZvYrgaY",
    color: "bg-gradient-to-br from-green-400 to-emerald-500",
  },
];
