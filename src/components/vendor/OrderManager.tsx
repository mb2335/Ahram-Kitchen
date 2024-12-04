import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const OrderManager = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Order Management</h2>
      
      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Order #ORD001</h3>
                <span className="text-sm px-2 py-1 rounded bg-primary/10 text-primary">
                  Processing
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Items: Shawarma Plate, Falafel Wrap
              </p>
              <p className="text-sm text-gray-600">
                Customer: John Doe
              </p>
              <p className="font-bold mt-2">$21.98</p>
            </div>
            <div className="space-x-2">
              <Button variant="outline" size="sm">
                Mark Complete
              </Button>
              <Button variant="destructive" size="sm">
                Reject
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};