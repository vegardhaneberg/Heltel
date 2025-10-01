import { Sparkles, ExternalLink } from "lucide-react";

function App() {
  const workTimeline = [
    {
      year: "2024",
      title: "NRK Supernytt",
      description: "Reportasje om VM i friidrett",
      type: "TV for barn",
      link: "https://tv.nrk.no/serie/supernytt/sesong/202509/episode/MSUM02091225",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      year: "2023",
      title: "NRK Newton",
      description:
        "Produserte og medvirket i en episode om stjerner for Newton!",
      type: "TV",
      link: "https://tv.nrk.no/serie/newton/sesong/2025/episode/DMPP21501625",
      color: "bg-gradient-to-br from-pink-400 to-rose-500",
    },
    {
      year: "2022",
      title: "Helene Sjekker Av",
      description:
        "Radioprogram for Voldas Studentradio hvor Helene sjekker av alt hun hadde på bucketlisten sin under studietiden i Volda. Bli med når Helene prøver seg som søppelhenter, detektiv og stifter et nært vennskap med 4 pensjonister fra Ørsta. Eposodene er også publisert på Spotify og Apple Podcast.",
      type: "Radio",
      link: "https://open.spotify.com/show/371wEolsdbDibF50jEln7W",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
    },
    {
      year: "2022",
      title: "Enten/Eller",
      description:
        "Ville du enten tilbringe 6mnd på tur med Lars Monsen til Canada, eller sykle fra Nordkapp til Sør-Kapp med Dag Otto Lauritzen og Sophie – Elise? Dette er bare et av mange dilemmaer vi tar opp dette radioprogrammet. En ting er i hvert fall sikkert, du trenger mest sannsynlig aldri å ta hensyn til noe av det vi snakker om, men vi tar det på fulle alvor selvom. Utfordringer, spalter og snikk snakk kan også påregnes.",
      type: "Radio",
      link: "https://open.spotify.com/show/3zvH9gBm9JbRtAsZvYrgaY",
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-full transform rotate-12">
                <Sparkles className="w-6 h-6 text-white -rotate-12" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Helene Maria Tellefsen
              </h1>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                Litt om meg og mitt
              </span>
            </div> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="Heltel.JPG"
                  alt="Helene Maria Tellefsen"
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-full shadow-xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform -rotate-2 inline-block">
                Så hyggelig at du titter innom! 👋
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Helene Maria Tellefsen{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                AKA{" "}
              </span>
              Heltel
            </h2>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              💛-lig velkommen til en samleside for Helene sitt arbeid, en
              nettside laget av Helenes fanskare. Her samler vi alt gullet denne
              livlige favoritten produserer.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg flex-1 min-w-[140px] transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  500K+
                </div>
                <div className="text-sm text-gray-600 font-medium">Lattere</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg flex-1 min-w-[140px] transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  150M+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Smil om munnen
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg flex-1 min-w-[140px] transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ∞
                </div>
                <div className="text-sm text-gray-600 font-medium">Glede</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-4">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="font-bold text-gray-800">My Journey</span>
          </div> */}
          <h3 className="text-3xl sm:text-4xl font-black text-white">
            Heltel sitt arbeid
          </h3>
        </div>

        <div className="space-y-6">
          {workTimeline.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div
                  className={`${item.color} rounded-xl p-4 sm:p-6 shadow-lg flex-shrink-0 self-start sm:self-center`}
                >
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {item.year}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">
                    {item.type}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    {item.title}
                    <a href={item.link} target="_blank">
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-purple-600 cursor-pointer" />
                    </a>
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Viktig å presisere at denne nettsiden er laget helt uavhengig av
            Heltel.
            <span className="font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              {" "}
              Hun ville aldri godkjent en slik skryteside!
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
