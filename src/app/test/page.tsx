import Link from 'next/link'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-light-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-romantic-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex justify-between items-center mb-6">
            <Link href="/" className="text-3xl font-bold text-romantic-pink-600">
              💕 JacuzziHotels
            </Link>
            <div className="space-x-8">
              <Link href="/" className="text-light-gray-600 hover:text-romantic-pink-500 font-medium transition-colors duration-200">Home</Link>
              <Link href="/test" className="text-light-gray-600 hover:text-romantic-pink-500 font-medium transition-colors duration-200">Test</Link>
            </div>
          </nav>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-romantic-pink-700 mb-4">
              Test Pagina
            </h1>
            <p className="text-lg text-light-gray-600 max-w-2xl mx-auto leading-relaxed">
              Dit is een test pagina om te controleren of de styling werkt.
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-romantic-pink-100">
          <h2 className="text-2xl font-bold text-romantic-pink-700 mb-4">
            🎨 Styling Test
          </h2>
          <p className="text-light-gray-600 mb-6">
            Als je deze tekst kunt lezen en de kleuren ziet, dan werkt de styling correct!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-romantic-pink-100">
              <h3 className="text-xl font-bold text-light-gray-800 mb-3">Test Kaart 1</h3>
              <p className="text-light-gray-600 mb-4">Dit is een test kaart met romantische styling.</p>
              <button className="w-full bg-romantic-pink-600 hover:bg-romantic-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                💕 Test Button
              </button>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-romantic-pink-100">
              <h3 className="text-xl font-bold text-light-gray-800 mb-3">Test Kaart 2</h3>
              <p className="text-light-gray-600 mb-4">Nog een test kaart om de styling te controleren.</p>
              <button className="w-full bg-romantic-pink-600 hover:bg-romantic-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                💕 Test Button
              </button>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-romantic-pink-100">
              <h3 className="text-xl font-bold text-light-gray-800 mb-3">Test Kaart 3</h3>
              <p className="text-light-gray-600 mb-4">De derde test kaart voor volledige styling test.</p>
              <button className="w-full bg-romantic-pink-600 hover:bg-romantic-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                💕 Test Button
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-romantic-pink-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-light-gray-500 mb-2">
              © 2024 JacuzziHotels. Test pagina voor styling verificatie.
            </p>
            <p className="text-xs text-light-gray-400">
              💕 Gemaakt met liefde voor romantische getaways
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

