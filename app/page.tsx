import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function Homepage() {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Financial Wiz</h1>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main>
          <SignedOut>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Welcome to Finance Wiz
                </h2>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Join thousands of users who are already benefiting from our amazing features. Sign in now to get started!
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <SignInButton mode="modal">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Sign In/Up
                      </button>
                    </SignInButton>
                  </div>
                </div>
              </div>
              <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {['Easy to use', 'Secure', 'Fast'].map((feature) => (
                  <div key={feature} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg font-medium text-gray-900">{feature}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Experience the best of our platform with {feature.toLowerCase()} features.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SignedOut>
        </main>
      </body>
    </html>
  )
}