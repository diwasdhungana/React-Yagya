import { Notification } from '@/components/notification';
import { Button } from '@/components/ui/button';
export default function HomePage() {
  return (
    <div>
      why?
      <Button
        onClick={() => Notification.success('You will be notified when the product is available!')}
        className="px-5 py-3 text-white bg-blue-500 rounded"
      >
        Notify me!
      </Button>
    </div>
  );
}
