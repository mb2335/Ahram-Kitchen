import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuManager } from "@/components/vendor/MenuManager";
import { OrderManager } from "@/components/vendor/OrderManager";
import { Fan } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

const VendorPortal = () => {
  const [activeTab, setActiveTab] = useState<"menu" | "orders">("menu");
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-white shadow-sm border-b border-accent/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Fan className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-gray-800">아람 키친 - 관리자 포털</h1>
            </div>
            <LanguageToggle />
          </div>
          <div className="flex gap-4">
            <Button
              variant={activeTab === "menu" ? "default" : "outline"}
              onClick={() => setActiveTab("menu")}
              className="border-primary/20 hover:bg-primary/5"
            >
              {t("menu.items")}
            </Button>
            <Button
              variant={activeTab === "orders" ? "default" : "outline"}
              onClick={() => setActiveTab("orders")}
              className="border-primary/20 hover:bg-primary/5"
            >
              {t("order.management")}
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