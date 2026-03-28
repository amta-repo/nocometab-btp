import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

const routes = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/gallery',
  '/news',
  '/contact',
  '/faq',
];

async function prerender() {
  if (!fs.existsSync(templatePath)) {
    console.error('Build the project first: npm run build');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  for (const route of routes) {
    const routePath = route === '/' ? '' : route;
    const dir = path.join(distDir, routePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filePath = route === '/' 
      ? path.join(distDir, 'index.html')
      : path.join(dir, 'index.html');

    // Replace the placeholder with route-specific meta or keep template
    const html = template.replace('<!--app-html-->', `<!-- prerendered: ${route} -->`);

    fs.writeFileSync(filePath, html);
    console.log(`✅ Prerendered: ${route} → ${filePath}`);
  }

  console.log(`\n🎉 Prerendered ${routes.length} routes successfully!`);
}

prerender().catch(console.error);
