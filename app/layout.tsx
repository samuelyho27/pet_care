import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "沐宠 Pet Spa | 宠物洗护店",
  description: "沐宠 Pet Spa 宠物洗护店官网，提供猫犬洗护、美容修剪、皮毛养护与预约信息。"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
