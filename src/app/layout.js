import "./globals.css";

export const metadata = {
    title: "Future Bright Academy - Empowering Young Minds, Building Bright Futures!",
    description: "Future Bright Academy is a leading coaching institute in Delhi NCR, providing quality education to students preparing for IIT-JEE, NEET, and other competitive exams.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
