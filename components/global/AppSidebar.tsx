import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "../ui/button";
import { Flag, Heart, MessageSquareIcon, Plus, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ModeToggle } from "./Sidebar/ModeToggle";

const chatList = ["chat 1", "chat 2", "chat 3"];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-row items-center justify-between  py-2">
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <h1 className="text-lg font-bold ">Logo</h1>
        </SidebarGroup>
        <SidebarTrigger className="inline-flex  " />
      </SidebarHeader>
      <div className="w-full h-[1px] bg-border dark:bg-border-2" />
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-2 px-4 py-2 group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel className="text-sm font-bold">
            Chats
          </SidebarGroupLabel>
          <SidebarGroupAction
            title="new chat"
            className="group-data-[collapsible=icon]:hidden"
          >
            <Plus /> <span className="sr-only">Favorite</span>
          </SidebarGroupAction>
          {chatList.map((chat) => (
            <Link href={"/chat2"} key={chat}>
              <div className="flex items-center gap-2 p-2 rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer">
                <span className="text-sm">{chat}</span>
              </div>
            </Link>
          ))}
        </SidebarGroup>
        <TooltipProvider delayDuration={500}>
          <Tooltip>
            <TooltipTrigger
              className="group-data-[collapsible=icon]:my-2"
              asChild
            >
              <Button className="mx-8  group-data-[collapsible=icon]:mx-1 group-data-[collapsible=icon]:h-8">
                <MessageSquareIcon />{" "}
                <div className="group-data-[collapsible=icon]:hidden">
                  New Chat
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>start new chat</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="w-full h-[1px] bg-border dark:bg-border-2" />
        <SidebarGroup className="flex flex-col gap-2  py-2 ">
          <SidebarMenu>
            <SidebarMenuButton asChild>
              <Link href={"/"} className="flex items-center gap-2 p-2">
                <Heart /> <span className="text-sm">Favorites</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex flex-col gap-2  py-2 ">
          <SidebarMenuButton asChild>
            <ModeToggle />
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href={"/"} className="flex items-center gap-2 ">
              <Flag /> <span className="text-sm">Report</span>
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href={"/"} className="flex items-center gap-2 ">
              <Settings /> <span className="text-sm">Settings</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
