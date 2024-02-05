import type { Site } from "./types";
import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const SITE: Site = {
  lang: "en",
  website: "https://astroshad.onrender.com",
  author: "Robertsson",
  title: "Astroshad",
  intro: {
    short: "Astro Theme with shadcn/ui",
  },
  description: {
    short:
      "Launch your new Astro site by harnessing the power of shadcn/ui with Astroshad",
    medium:
      "Effortlessly launch your Astro site with Astroshad, featuring pre-configured Astro settings and seamless integration of ui.shadcn for a polished foundation.",
    long: "Effortlessly launch your new Astro site by harnessing the power of ui.shadcn with Astroshad. This theme comes pre-configured with essential Astro settings and seamlessly integrates the versatility of ui.shadcn, providing you with a streamlined and polished foundation for your website.",
  },
  githubUrl: "https://github.com/Robertsson/astroshad",
  nav: {
    main: [
      { title: "Home", href: "/", disabled: true },
      { title: "About", href: "/about" },
      {
        title: "Blog",
        href: "/posts",
        items: [
          { title: "Post 1", href: "/post1" },
          { title: "Post 2", href: "/post2" },
          { title: "Post 3", href: "/post3" },
          { title: "Post 4", href: "/post4" },
          { title: "Post 5", href: "/post5" },
        ],
      },
      { title: "Test", href: "/test" },
    ],
    sub: [
      { title: "Privacy", href: "/privacy" },
      {
        title: "Blog",
        items: [
          { title: "Post 1", href: "/post1" },
          { title: "Post 2", href: "/post2" },
          { title: "Post 3", href: "/post3" },
          { title: "Post 4", href: "/post4" },
          { title: "Post 5", href: "/post5" },
        ],
      },
      { title: "Terms", href: "/terms" },
    ],
    links: [{ title: "GitHub", href: "//" }],
  },
};


export const CookieConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4 (dummy)</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
        another: {
          label: 'Another one (dummy)',
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer:
            '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functionality Cookies',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Analytics Cookies',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
            },
          ],
        },
      },
    },
  },
};
