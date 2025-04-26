import React from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import { NavigationMenu,NavigationMenuList,NavigationMenuItem,NavigationMenuLink } from '../ui/navigation-menu'
import NavigationData from '@/data/NavigationData'
import { ucfirst } from '@/lib/utils'
import DarkModeSwitch from './DarkModeSwitch'

export const DesktopHeaderMenu = () => {
  return (
    !useIsMobile()
    &&
    <NavigationMenu className="">
        <NavigationMenuList className="font-monda text-lg gap-6">
        {NavigationData.length >0  &&
            NavigationData.map((navigator,index)=>(
                <NavigationMenuItem key={index} className="text-primary-700 hover:text-primary-900 transition-colors">
                    <NavigationMenuLink
                        href={navigator.type === "ID"?"#"+navigator.id:navigator.link}
                        target={navigator.type === 'Blank'?"_blank":'_self'}
                        className='text-lg'
                    >{ucfirst(navigator.name)}</NavigationMenuLink>
                </NavigationMenuItem>
            ))
        }
        <NavigationMenuItem>
            <DarkModeSwitch />
        </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}
