const fs = require('fs');
const path = require('path');

const pages = [
  'Home', 'About', 'Features', 'HowItWorks', 'Travelers', 'Newcomers', 
  'Community', 'Assistant', 'Contact', 'Privacy', 'Terms'
];

const dir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

pages.forEach(page => {
  const content = `import React from 'react';
import './${page}.css';

export default function ${page}() {
  return (
    <div className="page-container ${page.toLowerCase()}-page animate-fade-in">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">${page.replace(/([A-Z])/g, ' $1').trim()}</h1>
        <p className="text-muted text-lg">Content for ${page.replace(/([A-Z])/g, ' $1').trim()} coming soon.</p>
      </div>
    </div>
  );
}
`;
  
  const cssContent = `.page-container {
  padding-top: 120px;
  min-height: 80vh;
}
`;

  fs.writeFileSync(path.join(dir, `${page}.jsx`), content);
  fs.writeFileSync(path.join(dir, `${page}.css`), cssContent);
});

console.log('Pages scaffolded successfully!');
