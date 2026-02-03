# Luxe Hair Studio - Product Requirements Document

## Project Overview
**Project Name:** Luxe Hair Studio Website  
**Date Created:** December 4, 2025  
**Status:** Phase 1 Complete (Frontend with Mock Data)

## Original Problem Statement
Create a modern, elegant website for a professional hair salon.
- Brand vibe: chic, stylish, welcoming, and premium but approachable
- Target audience: women and men aged 18–55 who care about hair, beauty, and self-care
- Color palette: neutral tones (beige, white, soft gray) with accents of gold, blush, or charcoal
- Goal: encourage visitors to trust the salon and book an appointment

## Architecture & Tech Stack
- **Frontend:** React 19 with Tailwind CSS
- **UI Components:** Shadcn/UI component library
- **Icons:** Lucide React
- **Styling:** Tailwind CSS with custom color palette (beige, white, soft gray, amber/gold accents)
- **Backend:** FastAPI with MongoDB (Phase 2)
- **State Management:** React Hooks
- **Notifications:** Sonner toast library

## What's Been Implemented (Phase 1)

### Completed Features (December 4, 2025)
1. **Navigation Component**
   - Fixed header with scroll effect
   - Smooth scrolling to sections
   - Mobile-responsive hamburger menu
   - "Book Now" CTA button

2. **Hero Section**
   - Full-screen background image
   - Bold headline with tagline
   - Dual CTA buttons (Book Appointment, View Services)
   - Trust indicators (15+ years, 10K+ clients, 500+ reviews)
   - Glass-morphism badge effect

3. **About Section**
   - Two-column layout with salon interior image
   - Brand story and mission statement
   - Core values list with bullet points
   - Feature cards highlighting salon benefits

4. **Services Section**
   - 6 service cards with icons, descriptions, pricing
   - Services: Women's/Men's Haircut, Coloring, Styling, Treatments, Bridal
   - Individual "Book Now" buttons per service
   - Consultation CTA section

5. **Gallery Section**
   - 6 high-quality images in grid layout
   - Hover effects with category labels
   - Modal/lightbox for full-size image viewing
   - Images showcase hair coloring, styling, and salon work

6. **Team Section**
   - 4 stylist profiles with photos
   - Role, specialty, and experience for each member
   - "Join Our Team" CTA section
   - Hover effects on cards

7. **Testimonials Section**
   - 6 client reviews with star ratings
   - Rating summary (4.9/5.0 based on 500+ reviews)
   - Platform badges (Google, Yelp, Facebook)

8. **Booking Section**
   - Comprehensive appointment request form
   - Fields: name, email, phone, service, date, time, notes
   - Form validation (required fields)
   - Toast notification on submission (mock)
   - Service dropdown populated from mock data

9. **Contact Section**
   - Two-column layout: contact info + Google Maps embed
   - Address, phone, email, business hours
   - Social media links (Instagram, Facebook)
   - Interactive map integration

10. **Footer**
    - Brand information with social links
    - Quick navigation links
    - Services list
    - Contact information
    - Privacy/Terms links

### Mock Data Structure
All data stored in `/app/frontend/src/data/mock.js`:
- **services:** 6 service objects (id, name, description, price, duration, icon)
- **team:** 4 stylist profiles (id, name, role, specialty, experience, image, bio)
- **testimonials:** 6 reviews (id, name, rating, text, date)
- **galleryImages:** 6 images (id, url, alt, category)
- **salonInfo:** Complete salon details (name, contact, hours, about, social)

## Technical Implementation Notes

### Design Patterns Used
- Neutral color palette: beige (#f7f5f2), white, soft gray
- Accent color: Amber (#d97706, #f59e0b for hover states)
- Typography: Georgia serif for headings, system fonts for body
- Smooth transitions (300ms) for all interactive elements
- Shadcn/UI components for consistency
- Lucide React icons (NO emoji icons)

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile menu for navigation
- Grid layouts adapt to single column on mobile
- Typography scales appropriately

## Prioritized Backlog

### Phase 2: Backend Implementation (Next)
**P0 - Critical:**
- Set up MongoDB collections: services, team, testimonials, gallery, bookings
- Create booking submission API endpoint
- Email notification system for new bookings
- Admin authentication system

**P1 - High Priority:**
- Service management CRUD operations
- Team member management
- Testimonial management
- Gallery image upload and management
- Contact form submission endpoint

**P2 - Medium Priority:**
- Real-time availability checking
- Email confirmation to clients
- Admin dashboard for booking management
- Analytics tracking

### Phase 3: Enhancements
**P0 - Critical:**
- Payment integration for deposits (optional)
- Calendar integration (Google Calendar, etc.)
- SMS notifications

**P1 - High Priority:**
- Client portal for managing appointments
- Loyalty program/rewards system
- Email marketing integration
- Blog/content section

**P2 - Nice to Have:**
- Multi-language support
- Live chat integration
- Virtual consultation booking
- Before/after photo upload by clients

## Next Action Items
1. **Backend Development:**
   - Create MongoDB schemas for all data models
   - Implement booking API with email notifications
   - Build admin authentication

2. **Frontend-Backend Integration:**
   - Replace mock data with API calls
   - Add loading states and error handling
   - Implement form submission with backend

3. **Testing:**
   - End-to-end testing with testing agent
   - Form validation testing
   - Mobile responsiveness testing
   - Cross-browser compatibility

4. **Deployment:**
   - Set up environment variables
   - Configure production database
   - Deploy to production

## API Contracts (To Be Implemented)

### POST /api/bookings
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "service": "string",
  "date": "string (YYYY-MM-DD)",
  "time": "string",
  "message": "string (optional)"
}
```
**Response:**
```json
{
  "id": "string",
  "status": "pending",
  "created_at": "timestamp"
}
```

### GET /api/services
**Response:** Array of service objects

### GET /api/team
**Response:** Array of team member objects

### GET /api/testimonials
**Response:** Array of testimonial objects

### GET /api/gallery
**Response:** Array of gallery image objects

## Success Metrics
- Appointment booking conversion rate
- Average time on site
- Mobile vs desktop traffic
- Form submission completion rate
- Bounce rate reduction

## Notes
- All frontend components use React functional components with hooks
- Smooth scrolling implemented for all navigation
- Form uses controlled components pattern
- Toast notifications with Sonner library
- Images hosted on Unsplash/Pexels CDN
