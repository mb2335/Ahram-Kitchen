import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuManager } from "@/components/vendor/MenuManager";
import { OrderManager } from "@/components/vendor/OrderManager";

const VendorPortal = () => {
  const [activeTab, setActiveTab] = useState<"menu" | "orders">("menu");

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">Ahram Kitchen - Vendor Portal</h1>
          <div className="mt-4 flex gap-4">
            <Button
              variant={activeTab === "menu" ? "default" : "outline"}
              onClick={() => setActiveTab("menu")}
            >
              Menu Management
            </Button>
            <Button
              variant={activeTab === "orders" ? "default" : "outline"}
              onClick={() => setActiveTab("orders")}
            >
              Order Management
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === "menu" ? <MenuManager /> : <OrderManager />}
      </main>
    </div>
  );
};

export default VendorPortal;