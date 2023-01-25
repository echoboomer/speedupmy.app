import { useEffect, useState } from 'react'

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <div className="overflow-hidden bg-gray-50" id="features">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Make yourself look better today, yesterday, tomorrow, and years from now.
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            <div>
              <dt>
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                  Make Code Slow
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Add in a function somewhere - <i>anywhere</i> - in your code to
                increase execution time.
              </dd>
            </div>

            <div>
              <dt>
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                  Point Out Slow Code
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                This is entirely <strong>optional</strong>. Wait until the right moment 
                to bring up how slow the code is. With luck, you won&apos;t even have to. 
              </dd>
            </div>

            <div>
              <dt>
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                  Make Code Faster
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Graciously volunteer to spend the next 6 months sorting out why the code is so slow.
                Reduce the time in the sleep function call or remove it all together.
              </dd>
            </div>

            <div>
              <dt>
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                  Profit
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Bask in the praise showered onto you from your teammates and superiors.
                Repeat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
