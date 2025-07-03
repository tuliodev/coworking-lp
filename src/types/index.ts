// Types for the Espaço Nave Coworking Landing Page

export interface NavItem {
  href: string
  label: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
}

export interface ContactInfo {
  icon: string
  title: string
  info: string
  href?: string
}

export interface FeatureItem {
  text: string
  icon?: string
}

// Brand colors from the manual
export const BRAND_COLORS = {
  green: '#8AB781',
  blue: '#1B5668', 
  gray: '#737373',
  white: '#FFFFFF'
} as const

// Contact information
export const CONTACT_DATA = {
  phone: '(35) 9 9999-9999',
  phoneLink: 'tel:+553599999999',
  whatsapp: 'https://wa.me/553599999999',
  email: 'adm@espaconave.com',
  emailLink: 'mailto:adm@espaconave.com',
  instagram: '@espaconavecoworking',
  instagramLink: 'https://instagram.com/espaconavecoworking',
  address: 'R. José Gonçalves Pereira, nº 129 - Vila Pinto, Varginha - MG'
} as const

// Business hours
export const BUSINESS_HOURS = {
  weekdays: 'Segunda a Sexta: 8h00 às 18h00',
  saturday: 'Sábado: 8h00 às 12h00',
  sunday: 'Domingo: Fechado'
} as const
