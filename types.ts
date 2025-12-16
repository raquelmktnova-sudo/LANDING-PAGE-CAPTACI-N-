export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: 'search' | 'shield' | 'clock' | 'euro';
}