# COLD Gymwear - Animated Logo Intro

A premium React application featuring a full-screen animated logo intro for the COLD gymwear brand, built with React, Tailwind CSS, and Framer Motion.

## Features

- **Animated Logo Intro**: Full-screen black background with centered logo animation
- **Smooth Transitions**: Fade in/out effects with zoom animation
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Premium Styling**: Clean, modern design with Tailwind CSS
- **Performance Optimized**: Efficient animations with Framer Motion

## Animation Sequence

1. **Fade In**: Logo appears with fade + zoom effect (1.5 seconds)
2. **Hold**: Logo stays visible (1 second)
3. **Fade Out**: Logo disappears with fade effect (1 second)
4. **Transition**: Smooth transition to homepage content

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Logo File
Place your logo file at `/public/logo.png` (transparent PNG recommended)

### 3. Start Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## File Structure

```
src/
├── components/
│   ├── LogoIntro.jsx    # Animated logo intro component
│   └── Home.jsx         # Main homepage component
├── App.jsx              # Main app component
└── main.jsx             # Entry point

public/
└── logo.png             # Your logo file

tailwind.config.js       # Tailwind CSS configuration
package.json             # Dependencies and scripts
```

## Customization

### Logo Animation Timing
Edit the timing in `LogoIntro.jsx`:
```javascript
// Animation sequence: fade in (1.5s) + hold (1s) + fade out (1s)
const timer = setTimeout(() => {
  setIsVisible(false);
}, 2500); // Adjust this value to change timing
```

### Styling
- Modify Tailwind classes in components for styling changes
- Update `tailwind.config.js` for theme customization
- Add custom animations in the config file

### Content
- Update hero text and taglines in `Home.jsx`
- Modify button text and styling
- Add additional sections as needed

## Dependencies

- **React 18**: UI framework
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and dev server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations with Framer Motion
- Efficient re-renders with React hooks
- Minimal bundle size
- Smooth 60fps animations

## License

MIT License - feel free to use this code for your projects.














