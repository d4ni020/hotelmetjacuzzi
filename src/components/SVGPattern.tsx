interface SVGPatternProps {
  opacity?: number
  className?: string
}

export default function SVGPattern({ opacity = 0.05, className = '' }: SVGPatternProps) {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        opacity: opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='geometric' patternUnits='userSpaceOnUse' width='120' height='120'%3E%3Cg fill='none' stroke='%231A2637' stroke-width='0.5'%3E%3C!-- Main geometric grid --%3E%3Cline x1='0' y1='60' x2='120' y2='60'/%3E%3Cline x1='60' y1='0' x2='60' y2='120'/%3E%3C!-- Diagonal lines --%3E%3Cline x1='0' y1='0' x2='60' y2='60'/%3E%3Cline x1='60' y1='60' x2='120' y2='120'/%3E%3Cline x1='60' y1='0' x2='120' y2='60'/%3E%3Cline x1='0' y1='60' x2='60' y2='120'/%3E%3C!-- Circles --%3E%3Ccircle cx='30' cy='30' r='2' fill='%231A2637'/%3E%3Ccircle cx='90' cy='30' r='2' fill='%231A2637'/%3E%3Ccircle cx='30' cy='90' r='2' fill='%231A2637'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%231A2637'/%3E%3C!-- Small rectangles --%3E%3Crect x='58' y='28' width='4' height='4' fill='%231A2637'/%3E%3Crect x='58' y='88' width='4' height='4' fill='%231A2637'/%3E%3Crect x='28' y='58' width='4' height='4' fill='%231A2637'/%3E%3Crect x='88' y='58' width='4' height='4' fill='%231A2637'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23geometric)'/%3E%3C/svg%3E")`
      }}
    />
  )
}

// Alternative diamond pattern
export function DiamondPattern({ opacity = 0.04, className = '' }: SVGPatternProps) {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        opacity: opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='diamond' patternUnits='userSpaceOnUse' width='80' height='80'%3E%3Cg fill='none' stroke='%231A2637' stroke-width='0.8'%3E%3C!-- Diamond shapes --%3E%3Cpolygon points='40,10 60,40 40,70 20,40'/%3E%3Cpolygon points='40,25 50,40 40,55 30,40'/%3E%3C!-- Corner diamonds --%3E%3Cpolygon points='0,0 10,10 0,20 -10,10'/%3E%3Cpolygon points='80,0 90,10 80,20 70,10'/%3E%3Cpolygon points='0,80 10,90 0,100 -10,90'/%3E%3Cpolygon points='80,80 90,90 80,100 70,90'/%3E%3C!-- Center dot --%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%231A2637'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23diamond)'/%3E%3C/svg%3E")`
      }}
    />
  )
}

// Modern hexagon pattern
export function HexagonPattern({ opacity = 0.03, className = '' }: SVGPatternProps) {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        opacity: opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='87' viewBox='0 0 100 87' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hexagon' patternUnits='userSpaceOnUse' width='100' height='87'%3E%3Cg fill='none' stroke='%231A2637' stroke-width='0.6'%3E%3C!-- Main hexagon --%3E%3Cpolygon points='50,5 75,22 75,57 50,74 25,57 25,22'/%3E%3C!-- Inner hexagon --%3E%3Cpolygon points='50,15 65,27 65,52 50,64 35,52 35,27'/%3E%3C!-- Side hexagons --%3E%3Cpolygon points='0,22 12.5,31 12.5,48 0,57 -12.5,48 -12.5,31'/%3E%3Cpolygon points='100,22 112.5,31 112.5,48 100,57 87.5,48 87.5,31'/%3E%3C!-- Center elements --%3E%3Ccircle cx='50' cy='39.5' r='2' fill='%231A2637'/%3E%3Crect x='48' y='20' width='4' height='4' fill='%231A2637'/%3E%3Crect x='48' y='55' width='4' height='4' fill='%231A2637'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23hexagon)'/%3E%3C/svg%3E")`
      }}
    />
  )
}

// Elegant dot grid pattern
export function DotGridPattern({ opacity = 0.06, className = '' }: SVGPatternProps) {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        opacity: opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dotgrid' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Cg fill='%231A2637'%3E%3C!-- Main grid dots --%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3C!-- Corner accent dots --%3E%3Ccircle cx='0' cy='0' r='0.5'/%3E%3Ccircle cx='60' cy='0' r='0.5'/%3E%3Ccircle cx='0' cy='60' r='0.5'/%3E%3Ccircle cx='60' cy='60' r='0.5'/%3E%3C!-- Mid-edge dots --%3E%3Ccircle cx='30' cy='0' r='0.8'/%3E%3Ccircle cx='30' cy='60' r='0.8'/%3E%3Ccircle cx='0' cy='30' r='0.8'/%3E%3Ccircle cx='60' cy='30' r='0.8'/%3E%3C!-- Subtle connecting lines --%3E%3Cg fill='none' stroke='%231A2637' stroke-width='0.3' opacity='0.4'%3E%3Cline x1='15' y1='15' x2='45' y2='15'/%3E%3Cline x1='15' y1='45' x2='45' y2='45'/%3E%3Cline x1='15' y1='15' x2='15' y2='45'/%3E%3Cline x1='45' y1='15' x2='45' y2='45'/%3E%3C/g%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dotgrid)'/%3E%3C/svg%3E")`
      }}
    />
  )
}

// Minimalist wave pattern
export function WavePattern({ opacity = 0.04, className = '' }: SVGPatternProps) {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        opacity: opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='40' viewBox='0 0 120 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wave' patternUnits='userSpaceOnUse' width='120' height='40'%3E%3Cg fill='none' stroke='%231A2637' stroke-width='0.8'%3E%3C!-- Main wave --%3E%3Cpath d='M0,20 Q30,5 60,20 T120,20'/%3E%3C!-- Secondary wave --%3E%3Cpath d='M0,30 Q30,15 60,30 T120,30' opacity='0.6'/%3E%3C!-- Accent dots --%3E%3Cg fill='%231A2637'%3E%3Ccircle cx='15' cy='20' r='1'/%3E%3Ccircle cx='45' cy='20' r='1'/%3E%3Ccircle cx='75' cy='20' r='1'/%3E%3Ccircle cx='105' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wave)'/%3E%3C/svg%3E")`
      }}
    />
  )
}
