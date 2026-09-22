import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Breach Barrier Security';
const DOMAIN = 'https://www.breachbarriersecurity.com';
const DEFAULT_OG_IMAGE = `${DOMAIN}/og-image.png`;
const DEFAULT_DESCRIPTION = 'Breach Barrier Security delivers 24/7 Security Operations Center (SOC) & MDR, Penetration Testing (VAPT), Incident Response, and Attack Surface Management worldwide.';

function setMetaTag(attr, key, value) {
  if (!value) return;
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function setJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  breadcrumbs = []
}) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${DOMAIN}${currentPath === '/' ? '/' : currentPath.replace(/\/$/, '')}`;

  const formattedTitle = title
    ? title.includes('Breach Barrier') || title.includes('BreachBarrier')
      ? title
      : `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | 24/7 Managed SOC, MDR & Cybersecurity`;

  const metaKeywords = keywords 
    ? `${keywords}, Breach Barrier Security, Breach Barrier, BreachBarrier`
    : 'Breach Barrier Security, Breach Barrier, BreachBarrier, Managed SOC, MDR Services, Penetration Testing, VAPT, Incident Response, ASM, 24/7 SOC, Cybersecurity';

  useEffect(() => {
    // 1. Title
    document.title = formattedTitle;

    // 2. Standard Meta
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', metaKeywords);
    setMetaTag('name', 'title', formattedTitle);

    // 3. Canonical URL
    setCanonical(canonicalUrl);

    // 4. Open Graph
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);

    // 5. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. Dynamic BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': DOMAIN
          },
          ...breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            'position': idx + 2,
            'name': crumb.name,
            'item': crumb.path ? `${DOMAIN}${crumb.path}` : canonicalUrl
          }))
        ]
      };
      setJsonLd('dynamic-breadcrumbs-jsonld', breadcrumbSchema);
    }
  }, [formattedTitle, description, metaKeywords, canonicalUrl, ogImage, ogType, breadcrumbs]);

  return null;
}
