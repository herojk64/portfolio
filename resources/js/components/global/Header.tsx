import { DesktopHeaderMenu } from "@/components/partials/DesktopHeaderMenu";
import MobileHeaderMenu from "@/components/partials/MobileHeaderMenu";


export default function Header() {
    return (
        <header className="bg-foreground shadow-md px-6 py-4 w-full z-50">
            <div className="flex items-center justify-between md:justify-evenly px-0">
                <h1 className="text-2xl font-bold text-neutral-700">Amit Dhakal</h1>
                <DesktopHeaderMenu />
                <MobileHeaderMenu />
            </div>
        </header>
    );
}
