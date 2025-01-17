interface FAQ {
  id: number;
  question: string;
  answer: string;
  href?: string;
};

export default function FAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className='mt-32 mx-auto max-w-2xl divide-y divide-gray-900/10 dark:divide-gray-200/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:py-32'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white'>
        Frequently asked questions
      </h2>
      <dl className='mt-10 space-y-8 divide-y divide-gray-900/10'>
        {faqs.map((faq) => (
          <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
      
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
      
          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
            consequuntur distinctio corporis earum similique!
          </p>
        </details>
        ))}
      </dl>
    </div>
  )
}
