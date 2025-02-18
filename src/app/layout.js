import "./globals.css";
import {UseLoadTop} from "@/hooks/UseLoadTop.js"
import ScrollButton from "@/components/ui/ScrollButton";
import {Toaster} from "react-hot-toast";

export const metadata = {
    title: "Future Bright Academy - Empowering Young Minds, Building Bright Futures!",
    description: "Future Bright Academy is a leading coaching institute in Delhi NCR, providing quality education to students preparing for IIT-JEE, NEET, and other competitive exams.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <UseLoadTop/>
        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                success: {
                    style: {
                        background: "#1CBBB4",
                        color: "#fff",
                        fontWeight: "900",
                    },
                },
            }}
        />
        {children}
        <ScrollButton/>
        </body>
        </html>
    );
}
