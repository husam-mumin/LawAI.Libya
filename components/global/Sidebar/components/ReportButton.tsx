"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Flag } from "lucide-react";
import React, { useState } from "react";
import ReportForm from "./ReportForm";

export default function ReportButton() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <SidebarMenuButton asChild>
          <div className="flex items-center gap-2 ">
            <Flag /> <span className="text-sm">Report</span>
          </div>
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report for issue</DialogTitle>
          <DialogDescription>
            you will sent an email for the developer to fix the issue
          </DialogDescription>
        </DialogHeader>
        <ReportForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
