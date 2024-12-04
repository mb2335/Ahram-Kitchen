import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuSection } from "@/components/customer/MenuSection";
import { Cart } from "@/components/customer/Cart";
import { OrderStatus } from "@/components/customer/OrderStatus";

const CustomerPortal = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Ahram Kitchen</h1>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setCartOpen(true)}
          >
            <span className="text-lg">🛒</span>
            View Cart
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <MenuSection
              title="Popular Items"
              items={[
                {
                  id: 1,
                  name: "Shawarma Plate",
                  description: "Tender marinated meat with rice and salad",
                  price: 12.99,
                  image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
                },
                {
                  id: 2,
                  name: "Falafel Wrap",
                  description: "Crispy falafel with tahini sauce",
                  price: 8.99,
                  image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7",
                },
              ]}
            />
            
            <MenuSection
              title="Main Courses"
              items={[
                {
                  id: 3,
                  name: "Mixed Grill",
                  description: "Assortment of grilled meats with sides",
                  price: 24.99,
                  image: "https://images.unsplash.com/photo-1544025162-d76694265947",
                },
              ]}
            />
          </div>

          <div className="md:col-span-1">
            <OrderStatus
              orders={[
                {
                  id: "ORD001",
                  status: "processing",
                  items: ["Shawarma Plate", "Falafel Wrap"],
                  total: 21.98,
                  date: new Date().toLocaleDateString(),
                },
              ]}
            />
          </div>
        </div>
      </main>

      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default CustomerPortal;