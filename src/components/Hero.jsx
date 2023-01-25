import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Make Your Applications{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="-30.72 -30.72 573.44 573.44"
            strokeWidth="0.0051200099999999995"
            transform="rotate(-45)matrix(1, 0, 0, 1, 0, 0)"
            className="absolute top-2/3 left-0 h-[2.58em] w-full fill-blue-100/70"
            preserveAspectRatio="none"
          >
            <path d="M110.933,145.067c4.71,0,8.533-3.823,8.533-8.533v-76.8h21.598c5.231,0,9.003,0,15.036,6.033l25.6,25.591v0.009 l51.2,51.2c1.596,1.596,3.772,2.5,6.033,2.5h59.733c4.719,0,8.533-3.823,8.533-8.533S303.386,128,298.667,128h-56.201 l-34.133-34.133h39.134c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533h-56.201l-23.1-23.1 c-11.034-11.034-20.702-11.034-27.102-11.034h-21.598c-9.412,0-17.067,7.654-17.067,17.067v76.8 C102.4,141.244,106.223,145.067,110.933,145.067z"></path> <path d="M508.203,265.967l-74.428-49.621C410.795,153.6,339.413,153.6,315.733,153.6c-39.723,0-65.109,7.159-70.101,8.695 l-131.209,16.401l-47.932-55.902c-0.93-1.212-9.549-11.861-23.825-11.861H8.533c-2.679,0-5.197,1.254-6.81,3.396 c-1.613,2.133-2.133,4.907-1.391,7.484L31.351,230.4H8.533c-4.71,0-8.533,3.823-8.533,8.533v34.133 c0,4.71,3.823,8.533,8.533,8.533H76.8c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533H17.067v-17.067h25.6 c2.679,0,5.197-1.254,6.81-3.396c1.613-2.133,2.133-4.907,1.391-7.484L19.849,128h22.818c6.025,0,10.325,5.231,10.59,5.555 l51.2,59.733c1.86,2.167,4.668,3.26,7.535,2.91l131.516-16.435c35.703,49.894,78.891,50.637,80.759,50.637h68.267 c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-68.215c-1.442-0.017-33.254-0.956-62.447-37.487 c11.102-2.321,29.645-5.18,53.862-5.18c57.899,0,90.581,17.126,102.844,53.896c0.597,1.801,1.784,3.345,3.354,4.403l53.35,35.567 H332.8c-2.364,0-4.634,0.99-6.246,2.722L160.102,446.234c-6.033,6.033-9.813,6.033-15.036,6.033h-25.6V281.6h170.667 c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-179.2c-4.71,0-8.533,3.823-8.533,8.533v179.2 c0,9.412,7.654,17.067,17.067,17.067h25.6c6.4,0,16.068,0,27.315-11.255l53.026-57.011H281.6c4.719,0,8.533-3.823,8.533-8.533 S286.319,384,281.6,384h-40.32l31.744-34.133H332.8c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-43.904 l47.616-51.2h166.955c3.755,0,7.074-2.466,8.166-6.059C512.725,271.941,511.326,268.058,508.203,265.967z" />
          </svg>
          <span className="relative">FASTER</span>
        </span>
      </h1>
      <div>
        <p className="relative mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-900">
          Application performance is important to any organization that craves extreme performance
          down to the millisecond. What&apos;s the <i>easiest</i> way to make your application faster?
          Start by making it <strong>slower.</strong>
        </p>
      </div>
    </Container>
  )
}
