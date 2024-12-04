import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  open: boolean;
  onClose: () => void;
}

export const Cart = ({ open, onClose }: CartProps) => {
  const { t } = useLanguage();
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Get cart items from localStorage
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, [open]); // Refresh when cart opens

  useEffect(() => {
    // Calculate total
    const newTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(newTotal);
  }, [items]);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t("cart.title")}</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">{t("cart.empty")}</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {t("cart.quantity")}: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <Button className="w-full" disabled={items.length === 0}>
            {t("cart.checkout")} (${total.toFixed(2)})
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};