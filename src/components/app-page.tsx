'use client'

import Header from './header'
import MainInputSection from './main-input-section'
import Footer from './footer'

export function AppPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <MainInputSection/>
      </main>
      <Footer />
    </div>
  )
}