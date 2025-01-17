import React from "react";
import { ArrowUpRight, Clock, Globe, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

const UnifiedBookingCard = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto border-2 relative">
      <div className="absolute top-4 right-4 flex items-center space-x-2 text-sm text-foreground cursor-pointer">
        <span className="font-medium">Schedule Now</span>
        <ArrowUpRight className="h-4 w-4 text-primary " />
      </div>

      <CardContent className="p-3 sm:p-6">
        <div className="flex flex-col gap-6">
          <div className="w-full pt-2 sm:pt-4">
            <div className="flex items-start space-x-3">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage src={DATA.avatarUrl} alt="Profile picture" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm truncate text-primary">
                  Aadhithya D
                </h3>
                <h2 className="font-semibold text-base mb-2 text-foreground">
                  Quick Chat
                </h2>

                <p className="text-sm text-foreground text-pretty mb-4 line-clamp-3 sm:line-clamp-none">
                  Let&apos;s connect! Book a quick chat to discuss ideas,
                  collaborate, or just say hi. I&apos;m always excited to meet
                  new people and explore opportunities. Looking forward to our
                  conversation!
                </p>

                <div className="space-y-2 text-sm text-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    <span>15m</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 flex-shrink-0" />
                    <span>Google Meet</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">Asia/Kolkata</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnifiedBookingCard;
