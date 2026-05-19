export interface App {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;

  hotkey?: string;
  hotkeyLabel?: string;
  downloadUrl: string;
  githubUrl: string;
  landingUrl?: string;
  accentColor: string;
  features: string[];
  requirements: {
    macos: string;
    architecture: string;
  };
}

export const apps: App[] = [
  {
    name: "PeekOCR",
    slug: "peekocr",
    tagline: "Screen OCR & QR Scanner",
    description:
      "Capture text from anywhere on your screen with a keyboard shortcut. PeekOCR also detects QR codes, copies results quickly, and keeps a small local capture history.",
    icon: "/apps/peekocr/icon.png",

    hotkey: "⇧ Space",
    hotkeyLabel: "Trigger with",
    downloadUrl: "https://github.com/StevenACZ/PeekOCR/releases",
    githubUrl: "https://github.com/StevenACZ/PeekOCR",
    accentColor: "#3B82F6",
    features: [
      "Instant text extraction",
      "QR code detection",
      "Screenshot capture",
      "Capture history (last 6)",
      "Customizable hotkeys",
    ],
    requirements: {
      macos: "13.0+",
      architecture: "Apple Silicon & Intel",
    },
  },
  {
    name: "SapoWhisper",
    slug: "sapowhisper",
    tagline: "Menu Bar Dictation",
    description:
      "A macOS menu bar dictation app with local WhisperKit or cloud transcription, live overlay, Gemini text polish, auto-paste, searchable history, and bring-your-own API keys.",
    icon: "/apps/sapowhisper/icon.png",

    hotkey: "⌥ Space",
    hotkeyLabel: "Press to speak",
    downloadUrl: "https://github.com/StevenACZ/SapoWhisper/releases",
    githubUrl: "https://github.com/StevenACZ/SapoWhisper",
    landingUrl: "https://sapo.stevenacz.com",
    accentColor: "#10B981",
    features: [
      "Local or cloud engines",
      "WhisperKit, Apple Speech, Google Cloud, and Deepgram",
      "Live dictation overlay",
      "Gemini text polish",
      "Auto-paste into any app",
      "Searchable transcript history",
      "Bring your own Google Cloud or Deepgram keys",
    ],
    requirements: {
      macos: "14.0+",
      architecture: "Apple Silicon & Intel",
    },
  },
  {
    name: "BuenMouse",
    slug: "buenmouse",
    tagline: "Trackpad Gestures for Mouse",
    description:
      "A free macOS menu bar utility that adds trackpad-style mouse gestures: Mission Control, Switch Spaces, Ctrl+Scroll zoom, natural scrolling, and launch at login.",
    icon: "/apps/buenmouse/icon.png",

    downloadUrl: "https://github.com/StevenACZ/BuenMouse/releases",
    githubUrl: "https://github.com/StevenACZ/BuenMouse",
    landingUrl: "https://mouse.stevenacz.com",
    accentColor: "#F59E0B",
    features: [
      "Middle Click for Mission Control",
      "Middle drag to switch Spaces",
      "Ctrl + Scroll zoom",
      "Natural scroll direction",
      "Menu bar monitoring controls",
      "Launch at login",
    ],
    requirements: {
      macos: "13.0+",
      architecture: "Apple Silicon & Intel",
    },
  },
];
