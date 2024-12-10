import { toast, Toaster } from 'sonner';

// Define the options type for custom notifications
interface CustomToastOptions {
  duration?: number;
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';
  description?: string;
  style?: React.CSSProperties;
  [key: string]: any; // for any additional options
}

// Define the return types
type ToastReturnType = string | number;

// Define the types for each notification function
type SuccessNotification = (message: string, description?: string) => ToastReturnType;
type ErrorNotification = (message: string, description?: string) => ToastReturnType;
type WarningNotification = (message: string, description?: string) => ToastReturnType;
type InfoNotification = (message: string, description?: string) => ToastReturnType;
type LoadingNotification = (message: string, description?: string) => ToastReturnType;
type PromiseNotification = <T>(
  promise: Promise<T>,
  loadingMessage?: string,
  successMessage?: string,
  errorMessage?: string
) => Promise<T>;
type CustomNotification = (message: string, options?: CustomToastOptions) => ToastReturnType;

// Define the notification interface
interface NotificationInterface {
  success: SuccessNotification;
  error: ErrorNotification;
  warning: WarningNotification;
  info: InfoNotification;
  loading: LoadingNotification;
  promise: PromiseNotification;
  custom: CustomNotification;
}

// Export the notification type
export const Notification: NotificationInterface = {
  success: (message, description) => {
    return toast.success(message, {
      description: description,
      position: 'top-right',
      duration: 4000,
    });
  },

  error: (message, description) => {
    return toast.error(message, {
      description: description,
      position: 'top-right',
      duration: 5000,
    });
  },

  warning: (message, description) => {
    return toast.warning(message, {
      description: description,
      position: 'top-right',
      duration: 4000,
    });
  },

  info: (message, description) => {
    return toast.info(message, {
      description: description,
      position: 'top-right',
      duration: 3000,
    });
  },

  loading: (message, description) => {
    return toast.loading(message, {
      description: description,
      position: 'top-right',
    });
  },

  promise: async (promise, loadingMessage, successMessage, errorMessage) => {
    return toast.promise(promise, {
      loading: loadingMessage || 'Loading...',
      success: successMessage || 'Completed successfully',
      error: (err) => errorMessage || err.message || 'An error occurred',
    });
  },

  custom: (message, options = {}) => {
    return toast(message, {
      ...options,
      position: options.position || 'top-right',
      duration: options.duration || 4000,
    });
  },
};

// ToasterProvider component
export function ToasterProvider() {
  return <Toaster expand={false} richColors closeButton />;
}

// can be used like this

// import { Notification } from '@/components/notification';

// // Success notification
// Notification.success('Success!', 'Operation completed successfully');

// // Error notification
// Notification.error('Error!', 'Something went wrong');

// // Warning notification
// Notification.warning('Warning!', 'Please check your input');

// // Info notification
// Notification.info('Info', 'New updates available');

// // Loading notification
// Notification.loading('Please wait', 'Processing your request');

// // Promise-based notification
// Notification.promise(
//   fetchData(),
//   'Fetching data...',
//   'Data fetched successfully!',
//   'Failed to fetch data'
// );

// // Custom notification
// Notification.custom('Custom message', {
//   duration: 5000,
//   position: 'top-center',
//   style: { background: 'purple', color: 'white' }
// });
