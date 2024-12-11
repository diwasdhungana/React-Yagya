import { Notification } from '@/components/notification';
import { Button } from '@/components/ui/button';
import { Page } from '@/components/ui/page';
export default function HomePage() {
  return (
    <Page title="Home">
      why?
      <Button
        onClick={() => Notification.success('You will be notified when the product is available!')}
        className="px-5 py-3 text-white bg-primary rounded"
      >
        Notify me!
      </Button>
    </Page>
  );
}
