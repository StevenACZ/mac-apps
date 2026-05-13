<script setup lang="ts">
import { useApps } from "~/composables/useApps";

const siteUrl = "https://apps.stevenacz.com";
const siteDescription =
  "Native macOS menu bar apps built with Swift. Includes SapoWhisper for local or cloud dictation with overlay, auto-paste, and history.";

const { apps } = useApps();

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "macOS Apps by Steven",
      description: siteDescription,
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#app-list`,
      name: "macOS Apps Catalog",
      url: siteUrl,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: apps.length,
      itemListElement: apps.map((app, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          "@id": `${siteUrl}/#${app.slug}`,
          name: app.name,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: `macOS ${app.requirements.macos}`,
          description: app.description,
          url: app.landingUrl ?? app.githubUrl,
          downloadUrl: app.downloadUrl,
          image: `${siteUrl}${app.icon}`,
          softwareRequirements: app.requirements.architecture,
          featureList: app.features,
          creator: { "@id": `${siteUrl}/#person` },
          publisher: { "@id": `${siteUrl}/#person` },
        },
      })),
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Steven Coaila Zaa",
      url: "https://stevenacz.com",
      sameAs: ["https://github.com/StevenACZ", "https://stevenacz.com"],
    },
  ],
};

useHead({
  script: [
    {
      key: "json-ld-graph",
      type: "application/ld+json",
      textContent: JSON.stringify(schemaGraph),
    },
  ],
});
</script>

<template>
  <NuxtPage />
</template>
