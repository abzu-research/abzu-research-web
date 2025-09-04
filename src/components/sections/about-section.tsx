'use client'

export default function AboutSection() {
  return (
    <section className="py-24 bg-[--base-elevated]">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span 
            style={{
              background: 'linear-gradient(90deg, #00f5ff 0%, #00ccfe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Research Programs
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Elliott Framework */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[--ink-h1]">Elliott Framework</h3>
            <p className="text-[--ink-body] leading-relaxed">
              Unified theories of cognitive gravity, inevitability engines, and consciousness emergence. 
              Explores how complex systems discover invariant structures through information-geometric dynamics.
            </p>
            <a href="/papers?program=elliott-framework" className="inline-block text-[#00ccfe] hover:underline">
              View papers →
            </a>
          </div>

          {/* Invariant Transport */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[--ink-h1]">Invariant Transport</h3>
            <p className="text-[--ink-body] leading-relaxed">
              Quotient flow invariants, ergodic drift metrics, and measure-theoretic frameworks. 
              Mathematical foundations for understanding how information propagates through complex systems.
            </p>
            <a href="/papers?program=invariant-transport" className="inline-block text-[#00ccfe] hover:underline">
              View papers →
            </a>
          </div>

          {/* Perception & Policy Search */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[--ink-h1]">Perception & Policy Search</h3>
            <p className="text-[--ink-body] leading-relaxed">
              Temperament-conditioned exploration, inversion guardrails, and ecological motion perception. 
              Practical systems for robust decision-making under uncertainty.
            </p>
            <a href="/papers?program=perception-and-policy-search" className="inline-block text-[#00ccfe] hover:underline">
              View papers →
            </a>
          </div>

          {/* Typed Effect Safety */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[--ink-h1]">Typed Effect Safety</h3>
            <p className="text-[--ink-body] leading-relaxed">
              Contract-indexed calculi, compile-time safety guarantees, and Kantian inevitability. 
              Formal methods for ensuring computational correctness at scale.
            </p>
            <a href="/papers?program=typed-effect-safety" className="inline-block text-[#00ccfe] hover:underline">
              View papers →
            </a>
          </div>
        </div>

        {/* Core insight */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-lg text-[--ink-sub] italic">
            "We identify and capture inefficiencies worth billions through computational arbitrage"
          </p>
        </div>
      </div>
    </section>
  )
}