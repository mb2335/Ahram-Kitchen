import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

export const Cart = ({ open, onClose }: CartProps) => {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          <p className="text-center text-gray-500">Your cart is empty</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <Button className="w-full" disabled>
            Checkout ($0.00)
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};