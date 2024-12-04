import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export const MenuSection = ({ title, items }: MenuSectionProps) => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleAddToCart = (item: MenuItem) => {
    // Get existing cart items
    const existingItems = localStorage.getItem('cartItems');
    let cartItems = existingItems ? JSON.parse(existingItems) : [];
    
    // Check if item already exists
    const existingItemIndex = cartItems.findIndex((i: MenuItem) => i.id === item.id);
    
    if (existingItemIndex >= 0) {
      // Increment quantity if item exists
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Add new item with quantity 1
      cartItems.push({ ...item, quantity: 1 });
    }
    
    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    console.log('Added to cart:', item.name);
    
    toast({
      title: t("cart.added"),
      description: `${item.name} ${t("cart.addedDescription")}`,
    });
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-lg font-bold text-primary">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Button
                className="w-full"
                onClick={() => handleAddToCart(item)}
              >
                {t("cart.add")}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};