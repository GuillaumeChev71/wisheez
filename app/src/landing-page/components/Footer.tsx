interface NavigationItem {
  name: string;
  href: string;
};

export default function Footer({ footerNavigation }: {
  footerNavigation: {
    app: NavigationItem[]
    legal: NavigationItem[]
  }
}) {
  return (
    <div className='mx-auto mt-6 max-w-7xl px-6 lg:px-8'>
      <footer className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-teal-600">
              {/* Logo ou nom de l'entreprise */}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-y-16">
              <div className="col-span-1">
                <p className="font-medium text-yellow-500">Services</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {footerNavigation.app.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-500 dark:text-white transition hover:opacity-75">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <p className="font-medium text-yellow-500">Légal</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-500 dark:text-white transition hover:opacity-75">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Wisheez. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
