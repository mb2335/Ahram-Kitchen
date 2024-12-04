import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const MenuManager = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Menu Items</h2>
        <Button>Add New Item</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Shawarma Plate</h3>
              <p className="text-sm text-gray-600">
                Tender marinated meat with rice and salad
              </p>
              <p className="text-primary font-bold mt-2">$12.99</p>
            </div>
            <div className="space-x-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};