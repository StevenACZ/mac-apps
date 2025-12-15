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

export const useApps = () => {
  const apps: App[] = [
    {
      name: "PeekOCR",
      slug: "peekocr",
      tagline: "Screen OCR & QR Scanner",
      description:
        "Capture text from anywhere on your screen with a simple keyboard shortcut. Also detects and copies QR code content.",
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
      tagline: "Voice to Text",
      description:
        "Transform your voice into text instantly. A powerful menu bar app for seamless voice transcription with global hotkeys.",
      icon: "/apps/sapowhisper/icon.png",

      hotkey: "⌥ Space",
      hotkeyLabel: "Press to speak",
      downloadUrl: "https://github.com/StevenACZ/SapoWhisper/releases",
      githubUrl: "https://github.com/StevenACZ/SapoWhisper",
      landingUrl: "https://sapo.stevenacz.com",
      accentColor: "#10B981",
      features: [
        "Real-time transcription",
        "Multiple language support",
        "Whisper AI powered",
        "Auto paste to active app",
        "Customizable hotkeys",
      ],
      requirements: {
        macos: "13.0+",
        architecture: "Apple Silicon & Intel",
      },
    },
    {
      name: "BuenMouse",
      slug: "buenmouse",
      tagline: "Mouse Utilities",
      description:
        "Essential mouse utilities for macOS power users. Enhance your cursor with useful tools and shortcuts.",
      icon: "/apps/buenmouse/icon.png",

      downloadUrl: "https://github.com/StevenACZ/BuenMouse/releases",
      githubUrl: "https://github.com/StevenACZ/BuenMouse",
      landingUrl: "https://mouse.stevenacz.com",
      accentColor: "#F59E0B",
      features: [
        "Cursor location tools",
        "Mouse acceleration control",
        "Click visualizer",
        "Menu bar integration",
        "Lightweight & fast",
      ],
      requirements: {
        macos: "12.0+",
        architecture: "Apple Silicon & Intel",
      },
    },
  ];

  return { apps };
};
