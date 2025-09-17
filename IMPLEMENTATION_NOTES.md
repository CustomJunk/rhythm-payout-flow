# DanceBook Landing Page - Implementation Notes

## Overview
This is a production-ready landing page for DanceBook, a mobile app that enables convenient booking and instant payments for dance classes with automatic split payouts to trainers.

## Technology Stack
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI (shadcn/ui)
- **Build Tool**: Vite
- **Font**: Inter (Google Fonts)

## Design System
The design uses a premium coral and teal color palette with:
- **Primary Coral**: HSL(14, 91%, 64%)
- **Accent Teal**: HSL(174, 72%, 56%)
- **Modern rounded UI elements** (12px border radius)
- **Smooth animations and transitions**

## Key Features Implemented
1. **Responsive Hero Section** with gradient background and phone mockup
2. **How It Works** - 3-step process explanation
3. **Features Grid** - 6 key benefits with icons
4. **Trainer Benefits** section with stats
5. **Social Proof** with testimonials and metrics
6. **Transparent Pricing** with commission calculator
7. **App Screenshots** showcase
8. **FAQ Accordion** with 8 common questions
9. **Waitlist Form** with role selection
10. **Professional Footer** with social links

## SEO Implementation
- **Title**: "DanceBook — Book dance classes & instant trainer payouts"
- **Meta Description**: 160 characters, includes key features
- **Open Graph** and Twitter Card meta tags
- **Structured Data**: Organization and WebSite JSON-LD
- **Semantic HTML**: Proper heading hierarchy (H1, H2, H3)
- **WCAG AA Compliance**: Proper contrast ratios and focus states

## Form Implementation
The waitlist form submits to a placeholder endpoint:
```
POST https://example.com/api/waitlist
```

**Payload**:
```json
{
  "email": "user@example.com",
  "role": "trainer|club|dancer",
  "timestamp": "2025-09-17T..."
}
```

## Performance Optimizations
- **Modern Image Formats**: Generated images are optimized
- **Lazy Loading**: Images load as needed
- **Tree Shaking**: Only used components are bundled
- **Smooth Scrolling**: CSS scroll-behavior
- **Hover Animations**: Transform and shadow effects

## Recommended Integrations

### Payment Processing
For implementing the actual split payout system:
- **Stripe Connect** - Marketplace payments with automatic splits
- **Adyen MarketPay** - Alternative for revenue sharing
- **PayPal Commerce** - For regions where Stripe isn't available

### Analytics Integration
Add this snippet before the closing `</body>` tag:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### GDPR Cookie Consent
Recommended banner text:
> "We use cookies to enhance your experience and analyze site usage. By continuing, you agree to our cookie policy."

## API Endpoints to Implement
1. **POST /api/waitlist** - Collect email signups
2. **GET /api/trainers** - Browse available trainers
3. **POST /api/bookings** - Create class bookings
4. **POST /api/payments** - Process payments with splits
5. **GET /api/earnings** - Trainer dashboard data

## Database Schema Considerations
```sql
-- Users table
users (id, email, role, created_at, verified_at)

-- Trainers table  
trainers (id, user_id, bio, hourly_rate, commission_rate)

-- Classes table
classes (id, trainer_id, title, duration, price, max_students)

-- Bookings table
bookings (id, class_id, student_id, status, payment_intent_id)

-- Payments table
payments (id, booking_id, amount, trainer_amount, platform_fee, status)
```

## Mobile App Considerations
- **Deep Linking**: Use universal links for class bookings
- **Push Notifications**: Booking confirmations and reminders
- **Offline Support**: Cache user data and sync when online
- **Biometric Auth**: Touch ID/Face ID for secure payments

## Next Steps
1. **Replace placeholder API** with real backend
2. **Add real testimonials** and partner logos
3. **Implement A/B testing** for conversion optimization
4. **Set up monitoring** with Sentry or similar
5. **Configure CDN** for global performance

## Deployment Checklist
- [ ] Update canonical URLs to production domain
- [ ] Configure SSL certificate
- [ ] Set up DNS and domain pointing
- [ ] Test contact form submission
- [ ] Verify analytics tracking
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (target 90+ scores)
- [ ] Test loading performance
- [ ] Verify social media preview cards

## Browser Support
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
- iOS Safari 14+
- Android Chrome 88+

Built with ❤️ for the dance community.