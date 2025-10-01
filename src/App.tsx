import { Sparkles, ExternalLink, Facebook, Instagram } from "lucide-react";
import { WorkTimeLine } from "./data/PreviousWork";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-full transform rotate-12">
                <Sparkles className="w-4 h-4 text-white -rotate-12" />
              </div>
              <h1 className='[font-family:"Dancing_Script",cursive] text-3xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Helene Maria Tellefsen
              </h1>
            </div>
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
              <div className="relative p-2 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="Heltel.JPG"
                  alt="Helene Maria Tellefsen"
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-full shadow-xl">
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
              💛-lig velkommen til denne samlesiden av Helene sitt arbeid, en
              nettside laget av Helenes fanskare. Her samler vi alt gullet denne
              livlige jenta produserer.
            </p>

            {/* Socials for desktop/tablet */}
            <div className="hidden md:flex flex-wrap gap-4 justify-evenly">
              <a
                href="https://www.instagram.com/heltel/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg min-w-[140px] max-w-[140px] flex items-center justify-center transform hover:scale-105 transition-transform hover:bg-white/30"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 text-pink-600 opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.facebook.com/groups/1355474312821477"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg min-w-[140px] max-w-[140px] flex items-center justify-center transform hover:scale-105 transition-transform hover:bg-white/30"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 text-blue-600 opacity-80 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Socials for mobile */}
          <div className="order-3 md:hidden flex flex-wrap gap-4 justify-evenly">
            <a
              href="https://www.instagram.com/heltel/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg min-w-[140px] max-w-[140px] flex items-center justify-center transform hover:scale-105 transition-transform hover:bg-white/30"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8 text-pink-600 opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.facebook.com/groups/1355474312821477"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg min-w-[140px] max-w-[140px] flex items-center justify-center transform hover:scale-105 transition-transform hover:bg-white/30"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8 text-blue-600 opacity-80 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-12">
          <h3 className='[font-family:"Dancing_Script",cursive] text-3xl sm:text-4xl font-black text-white'>
            Heltel sitt arbeid
          </h3>
        </div>

        <div className="space-y-6">
          {WorkTimeLine.map((item, index) => (
            <div key={index}>
              {/* Mobile version: whole card is a link */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block sm:hidden"
              >
                <div className="bg-white/25 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                  <div className="flex flex-col items-center gap-4">
                    <div
                      className={`${item.color} rounded-xl p-4 sm:p-6 shadow-lg flex-shrink-0 self-center flex flex-col items-center`}
                    >
                      <div className="text-2xl font-black text-white">
                        {item.year}
                      </div>
                      <div className="text-xs text-white/80 font-medium">
                        {item.type}
                      </div>
                    </div>
                    <div className="w-full text-center">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-800 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Desktop version: original card with icon */}
              <div className="hidden sm:block bg-white/25 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <div
                    className={`${item.color} rounded-xl p-4 sm:p-6 shadow-lg flex-shrink-0 self-center flex flex-col items-center`}
                  >
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {item.year}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 font-medium">
                      {item.type}
                    </div>
                  </div>
                  <div className="w-full text-center sm:text-left sm:flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2 justify-center sm:justify-start">
                      {item.title}
                      <a href={item.link} target="_blank">
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-purple-600 cursor-pointer" />
                      </a>
                    </h4>
                    <p className="text-gray-800 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
