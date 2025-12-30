# Student Management System

A modern, fully responsive web-based student management system with glass morphism UI design, built as a semester project demonstrating clean code architecture and contemporary web development practices.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?logo=javascript&logoColor=black)

## 🌟 Features

- **Modern Glass Morphism UI** - Premium design with frosted glass effects and smooth animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Interactive Dashboard** - View classes, attendance, fees, exams, and library information
- **MOOC Courses** - Browse available online courses
- **Mentor Directory** - Connect with mentors and instructors
- **Payment Integration** - Manage fee payments
- **Contact Form** - Easy communication channel
- **Smooth Animations** - GSAP-powered scroll-triggered animations

## 📁 Project Structure

```
Responsive-Student-Management-System/
│
├── index.html              # Login/Landing page
├── README.md               # Project documentation
│
├── pages/                  # All application pages
│   ├── home.html          # Main dashboard
│   ├── about.html         # About page
│   ├── mooc.html          # MOOC courses page
│   ├── mentor.html        # Mentors page
│   ├── connect.html       # Contact form
│   ├── payment.html       # Payment page
│   └── fnav.html          # Navigation component
│
├── css/                    # All stylesheets
│   ├── style.css          # Login page styles
│   ├── home.css           # Dashboard styles (responsive)
│   ├── about.css          # About page styles (responsive)
│   ├── mooc.css           # MOOC page styles (responsive)
│   ├── mentor.css         # Mentor page styles (responsive)
│   ├── connect.css        # Contact page styles (responsive)
│   ├── payment.css        # Payment page styles (responsive)
│   └── fnav.css           # Navigation styles (responsive)
│
├── js/                     # JavaScript files
│   ├── script.js          # Login page scripts
│   ├── home.js            # Dashboard animations (GSAP)
│   └── payment.js         # Payment form validation
│
└── assets/                 # Media files
    ├── images/            # All images (.jpg, .png, .webp, .avif)
    ├── videos/            # All videos (.mp4)
    └── gifs/              # All animated GIFs

```

## 🎨 Design Highlights

### Glass Morphism Cards

- Frosted glass effect with backdrop blur
- Semi-transparent backgrounds
- Subtle border glow effects
- Smooth hover animations

### Responsive Grid Layout

- CSS Grid for modern responsive layouts
- Mobile-first approach
- Touch-friendly interface
- Adaptive typography

### Premium Animations

- GSAP scroll-triggered effects
- Smooth transitions with cubic-bezier easing
- Hover effects on interactive elements
- Optimized for performance

## 🚀 Technologies Used

| Technology           | Purpose                                       |
| -------------------- | --------------------------------------------- |
| **HTML5**            | Semantic markup and structure                 |
| **CSS3**             | Styling with Flexbox, Grid, and media queries |
| **JavaScript**       | Interactive functionality                     |
| **GSAP**             | High-performance animations                   |
| **ScrollTrigger**    | Scroll-based animation triggers               |
| **LocomotiveScroll** | Smooth scrolling (desktop)                    |
| **RemixIcon**        | Icon library                                  |
| **Font Awesome**     | Additional icons                              |

## 💻 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- No server required - runs locally

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PriyobrotoKarmakar/Responsive-Student-Management-System.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd Responsive-Student-Management-System
   ```

3. **Open in browser**
   - Double-click `index.html` to open in your default browser
   - Or use a local development server:

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server -p 8000
     ```

   - Navigate to `http://localhost:8000`

## 📱 Responsive Breakpoints

| Breakpoint   | Device         | Screen Width   |
| ------------ | -------------- | -------------- |
| Desktop      | Large screens  | > 1024px       |
| Tablet       | Medium screens | 768px - 1024px |
| Mobile       | Small screens  | 480px - 768px  |
| Small Mobile | Extra small    | < 480px        |

## 🎯 Key Pages

### 🏠 Home (Dashboard)

Main student dashboard displaying:

- Class schedules with video preview
- Real-time attendance percentage
- Fee payment status
- Upcoming exams
- Library book status
- Important messages
- Dream-Plan-Achieve motivational section

### 📚 MOOC

Browse available online courses with:

- Course thumbnails
- Instructor information
- Interactive card hover effects

### 👨‍🏫 Mentors

Connect with mentors featuring:

- Mentor profiles with avatars
- Background information
- Contact functionality

### 💳 Payment

Secure payment interface with:

- Country selection
- Card number input
- CVV and expiry validation
- Terms and conditions

### 📧 Contact

User-friendly contact form with:

- Name and email fields
- Message textarea
- Form validation

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Educational Purpose

This project was created as a first-semester web development project to demonstrate:

- Clean HTML structure
- Modern CSS techniques
- Responsive design principles
- JavaScript interactivity
- Project organization
- Version control with Git

## 📸 Screenshots

> **Note**: View the live demo at [GitHub Pages](https://priyobrotokarmakar.github.io/Responsive-Student-Management-System/)

## 🤝 Contributing

This is an educational project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**Priyobroto Karmakar**

- GitHub: [@PriyobrotoKarmakar](https://github.com/PriyobrotoKarmakar)
- Project Link: [Student Management System](https://github.com/PriyobrotoKarmakar/Responsive-Student-Management-System)

## 🙏 Acknowledgments

- LPU (Lovely Professional University) for inspiration
- Google Fonts for typography
- RemixIcon and Font Awesome for icons
- GSAP for animation library
- All open-source contributors

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ for educational purposes
