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
import { Heart, MessageSquareIcon, Plus, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ModeToggle } from "./Sidebar/ModeToggle";
import { Separator } from "../ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ReportButton from "./Sidebar/components/ReportButton";

const chatList = ["chat 1", "chat 2", "chat 3"];

export function AppSidebar() {
  return (
    <>
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader className="flex flex-row items-center justify-between  py-2">
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <Link href={"/"}>
              <h1 className="text-lg font-bold ">Logo</h1>
            </Link>
          </SidebarGroup>
          <SidebarTrigger className="inline-flex  " />
        </SidebarHeader>
        <Separator className="my-2" />
        <SidebarContent>
          <SidebarGroup className="flex flex-col gap-2 px-4 py-2 group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel className="text-sm font-bold">
              Chats
            </SidebarGroupLabel>
            <Link href={"/chat"} className="hover:cursor-pointer">
              <SidebarGroupAction
                title="new chat"
                className="group-data-[collapsible=icon]:hidden"
              >
                <Plus /> <span className="sr-only">Favorite</span>
              </SidebarGroupAction>
            </Link>
            {chatList.map((chat, index) => (
              <Link href={"/chat/" + ++index} key={chat}>
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
                <Link
                  href={"/chat"}
                  className="mx-8  group-data-[collapsible=icon]:mx-1 group-data-[collapsible=icon]:h-8"
                >
                  <Button className="w-full">
                    <MessageSquareIcon />{" "}
                    <div className="group-data-[collapsible=icon]:hidden">
                      New Chat
                    </div>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>start new chat</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Separator className="my-2" />
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
            <SidebarMenuButton asChild></SidebarMenuButton>
            <ReportButton />
            <Popover>
              <PopoverTrigger asChild>
                <SidebarMenuButton asChild>
                  <Link href={"/"} className="flex items-center gap-2 ">
                    <Settings /> <span className="text-sm">Settings</span>
                  </Link>
                </SidebarMenuButton>
              </PopoverTrigger>
              <PopoverContent className="w-56">
                <ModeToggle />
                <div className="flex flex-col gap-2 p-4">
                  <h1 className="text-lg font-bold">Settings</h1>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">Settings 1</p>
                    <p className="text-sm">Settings 2</p>
                    <p className="text-sm">Settings 3</p>
                  </div>
                  /
                </div>
              </PopoverContent>
            </Popover>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
