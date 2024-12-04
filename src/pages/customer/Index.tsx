import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuSection } from "@/components/customer/MenuSection";
import { Cart } from "@/components/customer/Cart";
import { OrderStatus } from "@/components/customer/OrderStatus";
import { Fan } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";

const CustomerPortal = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-white shadow-sm border-b border-accent/20">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Fan className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-gray-800">아람 키친</h1>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button
              variant="outline"
              className="flex items-center gap-2 border-primary/20 hover:bg-primary/5"
              onClick={() => setCartOpen(true)}
            >
              <span className="text-lg">🛒</span>
              장바구니 보기
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <MenuSection
              title="인기 메뉴"
              items={[
                {
                  id: 1,
                  name: "불고기",
                  description: "부드러운 마리네이드 소고기와 밥, 샐러드",
                  price: 12.99,
                  image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
                },
                {
                  id: 2,
                  name: "비빔밥",
                  description: "신선한 채소와 고기가 어우러진 전통 비빔밥",
                  price: 8.99,
                  image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7",
                },
              ]}
            />
            
            <MenuSection
              title="메인 요리"
              items={[
                {
                  id: 3,
                  name: "삼겹살 구이",
                  description: "구운 삼겹살과 반찬",
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
                  items: ["불고기", "비빔밥"],
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