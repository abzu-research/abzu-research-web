'use client'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Gradient field background - gradient-native approach */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(90deg, #00f5ff 0%, #00ccfe 100%)',
          opacity: 0.1
        }}
      />
      
      {/* Flowing water effect overlay */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(0, 204, 254, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 30%, rgba(0, 225, 255, 0.1) 0%, transparent 40%)
            `
          }}
        />
      </div>

      <div className="container px-4 mx-auto text-center relative">
        {/* ABZU wordmark */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(90deg, #00f5ff 0%, #00ccfe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ABZU
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-[--ink-sub] mb-8 max-w-2xl mx-auto">
          Computational Arbitrage
        </p>
        
        {/* Cuneiform symbol */}
        <div className="text-4xl mb-12 opacity-40">𒇉</div>
        
        {/* CTAs */}
        <div className="flex gap-4 justify-center">
          <a 
            href="/papers" 
            className="px-8 py-3 border-2 border-[--line] hover:border-[#00ccfe] hover:text-[#00ccfe] transition-colors"
          >
            Research Papers
          </a>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-[#FCF951] text-black hover:bg-[#FCF951]/90 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}