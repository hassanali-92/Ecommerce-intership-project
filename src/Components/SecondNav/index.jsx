import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'All categories', href: '#', icon: true },
  { name: 'Hot offers', href: '#', icon: false },
  { name: 'Gift ideas', href: '#', icon: false },
  { name: 'Projects', href: '#', icon: false },
  { name: 'Menu item', href: '#', icon: false },
  { name: 'Help', href: '#', icon: true },
]

export default function SecondNav() {
  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-12 items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none">
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Left Side: Desktop Links */}
          <div className="flex flex-1 items-center justify-start ml-10 sm:ml-0">
            <div className="hidden sm:block">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {item.name === 'All categories' && <Bars3Icon className="size-5 mr-2" />}
                    {item.name}
                    {item.icon && item.name !== 'All categories' && (
                      <ChevronDownIcon className="ml-1 size-4 text-gray-400" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Currency and Shipping */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center cursor-pointer">
              <span className="text-sm font-medium text-gray-800">English, USD</span>
              <ChevronDownIcon className="ml-1 size-4 text-gray-400" />
            </div>
            <div className="flex items-center cursor-pointer">
              <span className="text-sm font-medium text-gray-800">Ship to</span>
              <img 
                src="https://flagcdn.com/w20/de.png" 
                alt="Germany" 
                className="ml-2 h-3" 
              />
              <ChevronDownIcon className="ml-1 size-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <DisclosurePanel className="sm:hidden bg-gray-50">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}