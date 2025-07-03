'use client'

import { useEffect } from 'react'

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return null
}

export default SmoothScroll
