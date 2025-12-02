// Wedding Template Types

export interface NavLink {
  label: string;
  href: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
}

export interface RSVPFormData {
  name: string;
  email: string;
  phone: string;
  numberOfGuests: number;
  attendance: 'yes' | 'no' | 'maybe';
  dietaryPreferences?: string;
  comments?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  album: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}
