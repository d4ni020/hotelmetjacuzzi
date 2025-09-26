'use client'

import { useEffect } from 'react'

export default function TradeTrackerViewTag() {
  useEffect(() => {
    // TradeTracker ViewTag Script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      var _viewTagOptions = {
        type: 'a',
        site: 419229,
        version: 1
      };

      (function() {
        var tt = document.createElement('script'), 
            s = document.getElementsByTagName('script')[0]; 
        tt.setAttribute('type', 'text/javascript'); 
        tt.setAttribute('src', 'https://tm.tradetracker.net/public/viewTag.js'); 
        s.parentNode.insertBefore(tt, s);
      })();
    `
    
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode?.insertBefore(script, firstScript)

    // Add noscript fallback
    const noscript = document.createElement('noscript')
    noscript.innerHTML = '<img src="https://tm.tradetracker.net/pageview?t=a&s=419229&v=1" alt="" />'
    
    document.head.appendChild(noscript)
  }, [])

  return null
}
