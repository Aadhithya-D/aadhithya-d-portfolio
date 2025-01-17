import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Popup = ({
  trigger,
  children,
  className = "",
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent
        className={`p-8 pb-2 ${className} bg-background rounded-lg shadow-lg 
          w-[90vw] max-w-[900px] h-[80vh] md:h-auto overflow-hidden`}
      >
        <VisuallyHidden>
          <DialogTitle>Your Title Here</DialogTitle>
        </VisuallyHidden>
        <div
          className="mt-4 flex flex-col md:flex-row md:justify-center md:items-center 
            w-full h-full overflow-auto"
        >
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
