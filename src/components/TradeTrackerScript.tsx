'use client'

import { useEffect } from 'react'

export default function TradeTrackerScript() {
  useEffect(() => {
    // TradeTracker PageTools Script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    
    const _TradeTrackerTagOptions = {
      t: 'a',
      s: '419242',
      chk: '256eeadab49a5fdceb536aa840fbaf56f1507699',
      overrideOptions: {}
    }
    
    script.src = (document.location.protocol === 'https:' ? 'https' : 'http') + 
      '://tm.tradetracker.net/tag?t=' + _TradeTrackerTagOptions.t + 
      '&s=' + _TradeTrackerTagOptions.s + 
      '&chk=' + _TradeTrackerTagOptions.chk
    
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode?.insertBefore(script, firstScript)
  }, [])

  return null
}
