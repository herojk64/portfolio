import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useAppearance,prefersDark } from "@/hooks/use-appearance"
const DarkModeSwitch = () => {
    const {appearance,updateAppearance} = useAppearance();

    return (
        <div className="flex items-center justify-start gap-2">
            <Switch
                onCheckedChange={(e)=>e?updateAppearance('dark'):updateAppearance('light')}
                id="theme_toggler"
                defaultChecked={appearance === "dark" || (appearance === "system" && prefersDark())}
                onChange={(e)=>console.log(e)}
                checked={appearance === "dark" || (appearance === "system" && prefersDark())}
            />
            <Label htmlFor="theme_toggler">Dark Mode</Label>
        </div>
    )
}

export default DarkModeSwitch
