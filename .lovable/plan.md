
# MountainLink Logistics — MVP Website Plan

## Overview
A professional marketing website with an interactive relay segmentation demo, designed to attract shippers and owner-operators to the MountainLink platform.

## Pages & Sections

### 1. Landing Page (Home)
- **Hero Section**: Bold headline ("Same-Day Calgary to Vancouver. Every Driver Home Nightly."), CTA buttons for shippers ("Get a Quote") and owner-operators ("Join Our Network")
- **How It Works**: Visual 3-step flow showing the relay model — load enters → algorithm splits into legs → drivers relay freight home-daily
- **Route Map**: Illustrated Calgary-to-Vancouver corridor with hub locations (Golden, Revelstoke, Kamloops, Hope) marked along the route
- **Value Comparison Table**: Solo vs Team vs MountainLink (transit time, cost, driver home daily, freight idle time, winter resilience) — pulled directly from your report data
- **Key Stats**: TAM ($450-560M), driver shortage (55,000+), sub-12hr transit, 4 relay hubs
- **Customer Segments**: Cards for mid-size carriers, livestock transporters, and large logistics companies
- **Testimonial-style quotes** from your interview findings (Jagjeet, Dave, Vivek personas)

### 2. For Shippers Page
- Benefits: speed, reliability, winter resilience, competitive rates
- Service types: dry van, reefer, livestock
- Simple "Request a Quote" form (origin, destination, freight type, weight, timing)

### 3. For Owner-Operators Page
- Home-daily guarantee, day cab advantage ($40-80K savings), support package details (GPS, fuel cards, insurance, 48hr payment)
- Home terminal selector (6 locations)
- "Apply to Join" form

### 4. Interactive Demo Page — The Core MVP Showcase
- **Load Input Panel**: Enter origin, destination, freight type, weight, pickup time, delivery deadline
- **Live Relay Visualization**: Animated route showing the corridor split into relay legs with hub markers
- **Weather Toggle**: Simulate pass closures (Rogers Pass, Kicking Horse, Coquihalla) — watch the algorithm switch from 3-leg to 5-leg configuration in real-time
- **Output Panel**: Shows each leg's distance, estimated time, assigned driver profile, and total transit time
- **Driver Matching Display**: Shows how the algorithm scores drivers (HOS hours, experience, equipment compatibility)
- All using simulated data that demonstrates the segmentation engine concept

### 5. About Page
- Team background, mission, competitive advantages
- Brief market opportunity summary

## Design & Branding
- Professional, industrial color palette — dark navy/charcoal primary, orange/amber accent (freight/logistics feel)
- Clean typography, modern layout
- Mountain imagery and route graphics throughout
- Fully responsive (mobile-friendly)

## Technical Notes
- Static React app with smooth animations (Framer Motion)
- Interactive demo uses client-side logic with mock data
- All content sourced from your report
