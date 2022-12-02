import '../styles/globals.css'
import Header from './Header'

//in app dir all components are server components
export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return(
    <html>
        <head></head>
        <body>
            {/* by adding to this file, component becomes consistent throughout the scenes, think router in react */}
            <Header/>
            {children}</body>
    </html>
    )
}