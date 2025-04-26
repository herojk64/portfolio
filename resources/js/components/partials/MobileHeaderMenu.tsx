import React, { useRef, useState } from 'react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu'
import { useIsMobile } from '@/hooks/use-mobile'
import NavigationData from '@/data/NavigationData'
import { ucfirst } from '@/lib/utils'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerClose } from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import DarkModeSwitch from './DarkModeSwitch'

const MobileHeaderMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    const handleLinkClick = () => {
        // Blur the trigger button before closing
        triggerRef.current?.blur()
        setOpen(false)
    }

    return (
        useIsMobile() &&
        <Drawer
            direction="right"
            open={open}
            onOpenChange={setOpen}
            defaultOpen={false}
            autoFocus={false}

        >
            <DrawerTrigger
            asChild
            autoFocus={false}
            className="">
                <Menu size={28} />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className=''>
                    <div className='flex justify-between items-center text-neutral-700'>

                    <DarkModeSwitch />
                    <DrawerClose className='me-2 text-neutral-700'><X /></DrawerClose>
                    </div>
                </DrawerHeader>
                <NavigationMenu className="min-w-full items-center justify-start">
                    <NavigationMenuList className="flex-col items-start justify-center min-w-full gap-8">
                        {NavigationData.length > 0 &&
                            NavigationData.map((navigator, index) => (
                                <NavigationMenuItem key={index} className="text-primary-700 hover:text-primary-900 transition-colors w-full block">
                                    <NavigationMenuLink
                                    className='text-xl text-neutral-700'
                                        href={navigator.type === "ID" ? "#" + navigator.id : navigator.link}
                                        target={navigator.type === 'Blank' ? "_blank" : '_self'}
                                        onClick={handleLinkClick}
                                    >{ucfirst(navigator.name)}</NavigationMenuLink>
                                </NavigationMenuItem>
                            ))
                        }
                    </NavigationMenuList>
                </NavigationMenu>
            </DrawerContent>
        </Drawer>

    );
}

export default MobileHeaderMenu
