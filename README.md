<div align="center">
  <img src="https://livingseed.org/wp-content/uploads/2023/05/LSeed-Logo-1.png" alt="Livingseed Logo" width="200"/>
  
  # Livingseed Media Cut
  
  **The official tool to extract audio from our ministry videos**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  
  [Live Demo](https://livingseed.org) · [Report Bug](https://github.com/livingseed/mediacut/issues) · [Request Feature](https://github.com/livingseed/mediacut/issues)
</div>

---

## 📖 About

Livingseed Media Cut is a free, web-based tool designed to help our ministry community easily extract audio from YouTube videos. Whether you need a sermon clip, worship song segment, or teaching excerpt, this tool makes it simple to download exactly what you need in your preferred format.

### ✨ Key Features

- 🎵 **Multiple Formats** - Download in MP3 (audio), WAV (high quality), or MP4 (video)
- ✂️ **Precise Trimming** - Extract specific time ranges or full tracks
- 📝 **Custom Metadata** - Add filename, topic/album, and artist/speaker information
- 📊 **Real-time Progress** - Track extraction progress with live updates
- 📜 **Download History** - Keep track of your recent extractions
- ⚡ **Fast & Free** - No registration required, completely free to use
- 🎨 **Modern UI** - Beautiful, responsive design that works on all devices

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/livingseed/mediacut.git
   cd mediacut
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and set your API base URL:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://livingseed-cut.onrender.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎯 How to Use

1. **Paste a YouTube URL** - Copy any YouTube video link
2. **Choose extraction mode**:
   - **Snippet** - Extract a specific time range
   - **Full Track** - Download the entire video audio
3. **Set time range** (for snippets) - Enter start and end times
4. **Select output format** - Choose MP3, WAV, or MP4
5. **Add metadata** (optional) - Customize filename, topic, and speaker
6. **Click "Start Extraction"** - Wait for processing to complete
7. **Download your file** - Click the download button when ready

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19](https://reactjs.org/) - Latest React with concurrent features
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **API**: Custom backend service for YouTube processing

---

## 📁 Project Structure

```
livingseedmediacut/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── AudioExtractor.tsx   # Main application component
│   ├── StatusCard.tsx       # Job status display
│   ├── HistoryPanel.tsx     # Download history sidebar
│   └── Icons.tsx            # Icon exports
├── services/                # API services
│   └── api.ts               # YouTube extraction API
├── public/                  # Static assets
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # Search engine directives
│   └── sitemap.xml          # Site structure for SEO
├── types.ts                 # TypeScript type definitions
├── constants.ts             # App constants
└── .env.local              # Environment variables (not in git)
```

---

## 🌍 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API endpoint for video processing | Yes |

> **Note**: All client-side environment variables must be prefixed with `NEXT_PUBLIC_`

---

## 🎨 Features in Detail

### Audio Extraction Modes

**Snippet Mode**
- Extract specific portions of videos
- Precise start and end time controls
- Perfect for sermon clips or song segments
- Supports timestamps in multiple formats (SS, MM:SS, HH:MM:SS)

**Full Track Mode**
- Download entire video audio
- Maintains original quality
- Limited to 4-hour videos

### Format Options

- **MP3** - Compressed audio, smaller file size, widely compatible
- **WAV** - Uncompressed audio, highest quality, larger file size
- **MP4** - Video format with audio, preserves visuals

### Custom Metadata

Add professional metadata to your downloads:
- **Custom Filename** - Rename your file before download
- **Topic/Album** - Categorize content (e.g., "Conference 2024")
- **Artist/Speaker** - Tag the preacher or worship leader

---

## 🔒 Privacy & Security

- ✅ No user data collection
- ✅ All processing happens server-side
- ✅ No account required
- ✅ History stored locally in your browser
- ✅ No tracking or analytics

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is maintained by the Livingseed Media Team for ministry use.

---

## 👥 Support

Need help? Have questions?

- 📧 Email: [support@livingseed.org](mailto:support@livingseed.org)
- 🌐 Website: [livingseed.org](https://livingseed.org)
- 📖 Documentation: [GitHub Wiki](https://github.com/livingseed/mediacut/wiki)

---

## 🙏 Acknowledgments

- Built with love by the [Livingseed Media Team](https://livingseed.org)
- Powered by [Next.js](https://nextjs.org/) and [React](https://reactjs.org/)
- Icons by [Lucide](https://lucide.dev/)

---

<div align="center">
  <p>Made with ❤️ for the ministry community</p>
  <p>© 2025 Livingseed. All rights reserved.</p>
</div>
