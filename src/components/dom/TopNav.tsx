"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { cn } from "~/styles/utils";
// import { $canvasState } from "~/state/canvas";
import { $menuState, type pageTypes } from "~/state/menu";
import { observer } from "@legendapp/state/react";
import { nanoid } from "nanoid";
import Link from "next/link";

const NAV_ITEMS: { name: (typeof pageTypes)[number]; href: string }[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const TopNav = observer(() => {
  const selectPage = $menuState.selectedPage.get();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem
            key={nanoid()}
            className={cn(
              "cursor-pointer text-white",
              selectPage === item.name && "text-blue-300",
            )}
          >
            <Link
              href={item.href}
              onClick={() => $menuState.selectedPage.set(item.name)}
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.name
                  .charAt(0)
                  .toLocaleUpperCase()
                  .concat(item.name.slice(1))}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
});

export default TopNav;
