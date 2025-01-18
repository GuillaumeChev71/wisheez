interface Testimonial {
  name: string;
  role: string;
  emoji: string; // Remplace avatarSrc par emoji
  socialUrl: string;
  quote: string;
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className='mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8'>
      <div className='relative sm:left-5 -m-2 rounded-xl bg-yellow-400/20 lg:ring-1 lg:ring-yellow-500/50 lg:-m-4'>
        <div className='relative sm:top-5 sm:right-5 bg-white dark:bg-boxdark px-8 py-20 shadow-xl sm:rounded-xl sm:px-10 sm:py-16 md:px-12 lg:px-20'>
          <h2 className='text-left text-2xl font-semibold tracking-wide leading-7 dark:text-white'>
            Ce que disent nos <span className="text-yellow-500">utilisateurs</span>
          </h2>
          <div className='relative flex flex-wrap gap-6 w-full mt-6 z-10 justify-between lg:mx-0'>
            {testimonials.map((testimonial, idx) => (
              <figure
                key={idx}
                className='w-full box-content flex flex-col justify-between p-8 rounded-xl bg-gray-500/5'
                style={ { width: '24%'} }
              >
                <blockquote className='text-lg text-gray-500 dark:text-white sm:text-md sm:leading-8'>
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className='mt-6 text-base dark:text-white'>
                  <div className='  flex items-center gap-x-2'>
                    <div
                      className='flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-2xl text-inherit no-underline'
                      aria-label={`Émoji de ${testimonial.name}`}
                    >
                      {testimonial.emoji}
                    </div>
                    <div>
                      <div className='font-semibold'>{testimonial.name}</div>
                      <div className='mt-1 text-gray-500'>{testimonial.role}</div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
