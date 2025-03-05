# Loui Recio - Personal Portfolio

Feel free to clone this project and modify it for your own portfolio! I'd love to see your creations, so don't hesitate to share them with me.

## About Me

I'm Loui Recio Izaguirre, a software engineer and data analyst with a Bachelor's in Computer Systems Engineering. I'm passionate about Python, Rust, and C#, always seeking to expand my technical horizons through AI and low-level programming challenges. Currently working as a Freelancer Software Engineer.

## About This Project

This portfolio was created as a modern Next.js application using Bun as the JavaScript runtime. It was migrated from a static HTML/CSS/JS site to take advantage of React's component-based architecture and Next.js's performance benefits.

<img src="/public/assets/images/PortfolioRepo.jpg" alt="Loui Recio Portfolio" width="800">

### Tech Stack

- **Framework**: Next.js
- **Runtime**: Bun
- **UI Components**: Custom React components
- **Styling**: CSS with variables for theming
- **Animation**: AOS and Intersection Observer API
- **Background Effects**: React Particles & tsParticles

### Key Features

- Responsive design with mobile-first approach
- Dark/light theme toggle with persistent preferences
- Interactive particle background
- Smooth scrolling and animations
- Component-based architecture for maintainability

## Deployment

This project is deployed on GitHub Pages with a custom domain. Here's how it's set up:

### GitHub Actions Configuration

The site is automatically built and deployed using GitHub Actions. The workflow:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - uses: actions/configure-pages@v4
      - run: bun install
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

### Custom Domain Setup (GoDaddy)

To configure the custom domain with GoDaddy DNS:

1. **A Records** for the root domain (louirecio.com):
   - Point to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

2. **CNAME Record** for www subdomain:
   - Point `www` to `username.github.io`

3. **GitHub Pages Configuration**:
   - Add `CNAME` file in the `public/` directory containing `louirecio.com`
   - Enable GitHub Pages in repository settings
   - Set custom domain to `louirecio.com`
   - Enable HTTPS

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/repo-name.git

# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build
```

## License

Feel free to use this code for your personal portfolio. Attribution is appreciated but not required.