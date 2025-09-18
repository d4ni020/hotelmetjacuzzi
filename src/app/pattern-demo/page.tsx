import { DotGridPattern, DiamondPattern, HexagonPattern, WavePattern } from '@/components/SVGPattern'
import SVGPattern from '@/components/SVGPattern'

export default function PatternDemoPage() {
  return (
    <div className="min-h-screen bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-navy-900 mb-4">
            SVG Pattern Gallery
          </h1>
          <p className="text-lg text-brand-navy-600">
            Professional seamless background patterns in dark blue (#1A2637)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Geometric Pattern */}
          <div className="bg-pure-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-navy-200">
            <div className="relative h-64 bg-light-gray">
              <SVGPattern opacity={0.15} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-brand-navy-900 text-pure-white px-4 py-2 rounded-lg font-semibold">
                  Geometric Grid
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-2">Geometric Pattern</h3>
              <p className="text-brand-navy-600 text-sm">Grid lines with circles and small rectangles. Perfect for structural layouts.</p>
            </div>
          </div>

          {/* Dot Grid Pattern */}
          <div className="bg-pure-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-navy-200">
            <div className="relative h-64 bg-light-gray">
              <DotGridPattern opacity={0.15} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-brand-navy-900 text-pure-white px-4 py-2 rounded-lg font-semibold">
                  Dot Grid
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-2">Dot Grid Pattern</h3>
              <p className="text-brand-navy-600 text-sm">Elegant dots with subtle connecting lines. Used on homepage for clean look.</p>
            </div>
          </div>

          {/* Diamond Pattern */}
          <div className="bg-pure-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-navy-200">
            <div className="relative h-64 bg-light-gray">
              <DiamondPattern opacity={0.15} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-brand-navy-900 text-pure-white px-4 py-2 rounded-lg font-semibold">
                  Diamond
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-2">Diamond Pattern</h3>
              <p className="text-brand-navy-600 text-sm">Sophisticated diamond shapes. Used on province pages for elegance.</p>
            </div>
          </div>

          {/* Hexagon Pattern */}
          <div className="bg-pure-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-navy-200">
            <div className="relative h-64 bg-light-gray">
              <HexagonPattern opacity={0.15} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-brand-navy-900 text-pure-white px-4 py-2 rounded-lg font-semibold">
                  Hexagon
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-2">Hexagon Pattern</h3>
              <p className="text-brand-navy-600 text-sm">Modern hexagonal geometry. Used on hotel detail pages for luxury feel.</p>
            </div>
          </div>

          {/* Wave Pattern */}
          <div className="bg-pure-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-navy-200">
            <div className="relative h-64 bg-light-gray">
              <WavePattern opacity={0.15} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-brand-navy-900 text-pure-white px-4 py-2 rounded-lg font-semibold">
                  Wave
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-2">Wave Pattern</h3>
              <p className="text-brand-navy-600 text-sm">Flowing wave lines with accent dots. Used on city pages for dynamic movement.</p>
            </div>
          </div>

          {/* Usage Guide */}
          <div className="bg-brand-navy-900 text-pure-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-orange-600 md:col-span-2 lg:col-span-1">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Usage Guide</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange-600 rounded-full"></span>
                  <span>Homepage: Dot Grid</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange-600 rounded-full"></span>
                  <span>Province: Diamond</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange-600 rounded-full"></span>
                  <span>City: Wave</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange-600 rounded-full"></span>
                  <span>Hotel: Hexagon</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange-600 rounded-full"></span>
                  <span>Special: Geometric</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-navy-700">
                <p className="text-xs text-brand-navy-300">
                  All patterns use flat design with #1A2637 color and customizable opacity levels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 bg-pure-white rounded-2xl p-8 shadow-lg border-2 border-brand-navy-200">
          <h2 className="text-2xl font-bold text-brand-navy-900 mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange-600 mb-2">#1A2637</div>
              <div className="text-sm text-brand-navy-600">Color Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange-600 mb-2">0.03-0.08</div>
              <div className="text-sm text-brand-navy-600">Opacity Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange-600 mb-2">SVG</div>
              <div className="text-sm text-brand-navy-600">Vector Format</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange-600 mb-2">Seamless</div>
              <div className="text-sm text-brand-navy-600">Tiling Pattern</div>
            </div>
          </div>
        </div>

        {/* Implementation Example */}
        <div className="mt-16 bg-brand-navy-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-brand-navy-900 mb-6">Implementation</h2>
          <div className="bg-brand-navy-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-gray-400">// Import the pattern</div>
            <div className="mb-2">import {`{`} DotGridPattern {`}`} from '@/components/SVGPattern'</div>
            <div className="text-gray-400 mt-4">// Use in component</div>
            <div>&lt;DotGridPattern opacity={`{`}0.06{`}`} /&gt;</div>
          </div>
        </div>
      </div>
    </div>
  )
}
