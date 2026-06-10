export type TravelSlideType = 'title' | 'route' | 'cost' | 'spots' | 'tips' | 'conclusion' | 'map';

export interface TravelCostItem {
  category: string;
  price: string;
  detail: string;
}

export interface TravelRouteItem {
  time: string;
  spot: string;
  memo: string;
}

export interface TravelSpot {
  name: string;
  tag: string;
  description: string;
  emoji: string;
}

export interface TravelRouteSummaryDay {
  day: string;
  title: string;
  flow: string[];
}

export interface TravelConclusionItem {
  title: string;
  description: string;
  emoji?: string;
}

export interface TravelMapPin {
  lat: number;
  lng: number;
  label: string;
  description?: string;
  imageUrl?: string;
  link?: string;
}

export interface TravelSlide {
  id: string;
  type: TravelSlideType;
  title: string;
  subtitle?: string;
  content?: string;
  // Specific data structures for each layout
  routeDay?: string; // e.g. "1일차" or "전체 루트"
  routeItems?: TravelRouteItem[];
  costItems?: TravelCostItem[];
  spots?: TravelSpot[];
  tips?: string[];
  
  // Premium Layout Extensions
  appealPoints?: string[];
  highlightCostPoint?: string;
  routeSummaryDays?: TravelRouteSummaryDay[];
  conclusionItems?: TravelConclusionItem[];
  
  // Map Data
  mapPins?: TravelMapPin[];
  mapCenter?: [number, number];
  mapZoom?: number;
}
