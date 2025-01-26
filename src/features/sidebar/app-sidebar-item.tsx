"use client";
import { SidebarMenuButton, SidebarMenuItem } from "@/shared/ui/sidebar";
import { useRouter } from "next/navigation";
import React from "react";

const AppSidebarItem = (item: SidebarItemSchema) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(item.url);
  };
  return (
    <SidebarMenuItem>
      <SidebarMenuButton onClick={handleNavigate} tooltip={item.title}>
        {item.icon && <item.icon />}
        <span>{item.title}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default AppSidebarItem;
