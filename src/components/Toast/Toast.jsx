import { Toaster } from 'react-hot-toast';

function Toast() {
  return (
    <Toaster
      duration="10000"
      position="top-right"
      containerStyle={{ top: 100 }}
      toastOptions={{
        style: {
          border: '1px solid #212121',
          padding: '14px',
          color: '#212121',
        },
      }}
    />
  );
}

export default Toast;
