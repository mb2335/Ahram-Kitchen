import { Card } from "@/components/ui/card";

interface Order {
  id: string;
  status: "pending" | "processing" | "completed" | "rejected";
  items: string[];
  total: number;
  date: string;
}

interface OrderStatusProps {
  orders: Order[];
}

export const OrderStatus = ({ orders }: OrderStatusProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold">Order #{order.id}</span>
              <span className="text-sm text-gray-500">{order.date}</span>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                {order.items.join(", ")}
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">${order.total.toFixed(2)}</span>
                <span className="text-sm px-2 py-1 rounded bg-primary/10 text-primary">
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};