// components/send-email.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function SendEmail() {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Add selected groups to form data
    selectedGroups.forEach((group) => {
      formData.append("groups", group);
    });

    // TODO: Connect to backend API
    console.log(Object.fromEntries(formData));
  };

  return (
    <Card className="max-w-2xl w-full mx-auto my-6 bg-stone-100/50 shadow-sm border border-slate-900">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Compose Email</CardTitle>
        <CardDescription>
          Send professional communications to clients or groups
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="to">Recipient</Label>
              <Input id="to" name="to" placeholder="client@example.com" />
              <div className="pt-2">
                <Label className="text-sm font-medium">
                  Or send to groups:
                </Label>
                <div className="flex flex-wrap gap-4 pt-2">
                  {["clients", "subscribers", "everyone"].map((group) => (
                    <div className="flex items-center gap-2" key={group}>
                      <Checkbox
                        id={group}
                        checked={selectedGroups.includes(group)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedGroups([...selectedGroups, group]);
                          } else {
                            setSelectedGroups(
                              selectedGroups.filter((g) => g !== group),
                            );
                          }
                        }}
                      />
                      <Label htmlFor={group} className="capitalize">
                        {group}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rest of the form remains unchanged */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cc">CC (optional)</Label>
                <Input id="cc" name="cc" placeholder="cc@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bcc">BCC (optional)</Label>
                <Input id="bcc" name="bcc" placeholder="bcc@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Photo Session Details"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your email content here..."
                className="min-h-[200px]"
                required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="gap-2">
              <Send className="h-4 w-4" />
              Send Email
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
