import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

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

  const handleAddToCart = (item: MenuItem) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
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
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};