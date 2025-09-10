import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ElseifAI',
  description: 'Transform your workflow with powerful tools that adapt to your team\'s unique needs.',

 icons: {
    icon: '/elseif-favicon.ico',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}