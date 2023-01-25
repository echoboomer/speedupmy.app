import { Container } from '@/components/Container'
import { Prism } from '@mantine/prism';

const deleted = { color: 'red', label: '-' };
const added = { color: 'green', label: '+' };

const jsSnippet = `
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(2000).then(() => { ...your code });
`

const pythonSnippet = `
import time

# Some code here
time.sleep(5)
# Some code there
`

const holyCSnippet = `
int main()
{
    printf("Here is where the magic happens!");
    sleep(10);
    printf("This line will be executed after 10 seconds.");
    // Someday, you lower this to 9, and so on...
 
    return 0;
}
`

const adjSnippet = `
// some stuff happens here

sleep(2000).then(() => { ...your code });

// some stuff happens here

function MyAwesomeApp() {
  return <QuestionablyIncredible />;
}
`

export function Examples() {
  return (
    <section
      id="examples"
      aria-label="Examples"
      className="bg-slate-900 py-20 sm:py-16"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Easy to Implement
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Takes seconds to implement and shaves rungs off of your career ladder.
          </p>
        </div>
        
        <div className="-mx-4 mt-8 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-1 xl:mx-0 xl:gap-x-8">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-2xl">
            JavaScript
          </h2>
          <Prism language="javascript">{jsSnippet}</Prism>
        </div>
        <div className="-mx-4 mt-8 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-1 xl:mx-0 xl:gap-x-8">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-2xl">
            Python
          </h2>
          <Prism language="python">{pythonSnippet}</Prism>
        </div>
        <div className="-mx-4 mt-8 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-1 xl:mx-0 xl:gap-x-8">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-2xl">
            Fortran
          </h2>
          <Prism language="fortran">call sleep(5)</Prism>
        </div>
        <div className="-mx-4 mt-8 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-1 xl:mx-0 xl:gap-x-8">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-2xl">
            HolyC
          </h2>
          <Prism language="c">{holyCSnippet}</Prism>
        </div>
      </Container>
    </section>
  )
}

export function MoreExamples() {
  return (
    <section
      id="more-examples"
      aria-label="More Examples"
      className="bg-slate-900 py-20 sm:py-16"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Easy to Remove
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            All of the glory, none of the guilt.
          </p>
        </div>
        
        <div className="-mx-4 mt-8 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-1 xl:mx-0 xl:gap-x-8">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-2xl">
            JavaScript
          </h2>
          <Prism
            language="javascript"
            withLineNumbers
            highlightLines={{
              3: deleted,
            }}
          >
            {adjSnippet}
          </Prism>
        </div>
      </Container>
    </section>
  )
}