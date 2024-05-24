import { Metadata } from 'next';
import Script from 'next/script';
import Menu from '../components/Menu';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paranoid_K',
  description: 'Paranoid_K 的个人站点，关于前端、JavaScript 等',
  authors: [{ name: 'Paranoid_K', url: 'https://pengtikui.cn' }],
  other: {
    'baidu-site-verification': 'codeva-vCZMO1BPzq',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="max-w-3xl mx-auto px-2">
        <Menu />
        {children}
        {/* <Footer /> */}
      </body>
      <Script src="https://cdn.splitbee.io/sb.js" />
    </html>
  );
}
