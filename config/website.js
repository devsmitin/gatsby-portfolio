const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Smit - Frontend Developer from Ahmedabad', // Navigation and Site Title
  siteTitleAlt: 'Portfolio', // Alternative Site title for SEO
  siteUrl: 'https://imsmit.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Personal portfolio website of Smit Modi - Frontend Developer from Ahmedabad',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@smilingsmit', // Twitter Username
  ogSiteName: 'Portfolio', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
