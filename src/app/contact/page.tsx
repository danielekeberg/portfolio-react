import Admin from "@/components/Admin";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function ContactPage() {
    return (
        <>
            <Analytics />
            <SpeedInsights />
            <Admin />
        </>
    )
}