export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical CSS - Above the fold styles only */
        body {
          margin: 0;
          font-family: Inter, system-ui, -apple-system, sans-serif;
          line-height: 1.6;
          color: #1A2637;
          background-color: #FFFFFF;
        }
        
        /* Critical navbar styles */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: #FFFFFF;
          border-bottom: 1px solid #e5e7eb;
          padding: 1rem 0;
        }
        
        /* Critical hero styles */
        .hero-section {
          background: linear-gradient(135deg, #1A2637 0%, #3f4a5e 100%);
          color: #FFFFFF;
          padding: 4rem 0;
          text-align: center;
        }
        
        /* Critical button styles */
        .btn-primary {
          background-color: #F36F21;
          color: #FFFFFF;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .btn-primary:hover {
          background-color: #c54a1a;
        }
        
        /* Critical layout styles */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        /* Critical grid styles */
        .grid {
          display: grid;
          gap: 1.5rem;
        }
        
        .grid-cols-1 {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        
        @media (min-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        
        @media (min-width: 1024px) {
          .grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        
        /* Critical card styles */
        .card {
          background-color: #FFFFFF;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: box-shadow 0.2s;
        }
        
        .card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        /* Critical image styles */
        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          background-color: #f3f4f6;
        }
        
        /* Critical text styles */
        .text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        
        .text-2xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        
        .text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        
        .font-bold {
          font-weight: 700;
        }
        
        .font-semibold {
          font-weight: 600;
        }
        
        /* Critical spacing */
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        
        /* Critical responsive utilities */
        @media (max-width: 767px) {
          .hero-section {
            padding: 2rem 0;
          }
          
          .container {
            padding: 0 0.75rem;
          }
        }
      `
    }} />
  );
}
