import * as React from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SITE } from "@config";
import Logo from "@components/shared/Logo.tsx";
import type { navItem } from "@/types";


interface SheetMobileProps {
  mainNavItems?: navItem[];
  sidebarNavItems?: navItem[];
}
interface NavItemProps {
  item: navItem;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavItem({ item, setOpen }: NavItemProps) {
  const handleClick = React.useCallback(() => {
    if (item.href?.startsWith("/#")) {
      setOpen(false);
    }
  }, [item.href, setOpen]);

  return (
    <a
      key={item.href}
      href={item.href}
      className="text-muted-foreground"
      onClick={handleClick}
    >
      {item.title}
    </a>
  );
}

export function DrawerMobileNav({
  mainNavItems,
  sidebarNavItems,
}: SheetMobileProps) {
  const [open, setOpen] = React.useState(false);

  const mergedMainNavItems = React.useMemo(() =>
    mainNavItems?.filter(
      (item, index, self) =>
        index ===
        self.findIndex((t) => t.href === item.href && t.title === item.title)
    )
  , [mainNavItems]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="btn-icon hover:variant-soft-primary">
            <i className="fa-solid fa-bars text-xl"></i>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <a href="/" className="flex items-center">
            <div className="mr-2 size-8">
                <Logo/>
            </div>
            <span className="font-bold">{SITE.title}</span>
        </a>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-10">
          <div className="mt-2 mb-20">
          {mergedMainNavItems?.length ? (
          <div className="flex flex-col space-y-3">
            {mergedMainNavItems.map((item) => (
              <NavItem key={item.href} item={item} setOpen={setOpen} />
            ))}
          </div>
        ) : null}

            {sidebarNavItems?.length ? (
              <div className="flex flex-col space-y-2">
                {sidebarNavItems.map((item, index) => {
                  const activeItems = item?.items?.filter(
                    (subItem) => !subItem.disabled
                  );

                  if (!activeItems || activeItems.length === 0) return null;

                  return (
                    <div key={index} className="flex flex-col space-y-3 pt-6">
                      <h4 className="font-medium">{item.title}</h4>
                      {activeItems.map((subItem, idx) => (
                        <React.Fragment key={subItem.href + idx}>
                          {subItem.href ? (
                            <a
                              href={subItem.href}
                              target={subItem?.external ? "_blank" : undefined}
                              className="text-muted-foreground"
                            >
                              {subItem.title}
                            </a>
                          ) : (
                            subItem.title
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
