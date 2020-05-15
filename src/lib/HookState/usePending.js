import { useState } from 'react';

const usePending = requestFunction => {

  const [isPending, togglePending] = useState(false);

  const pendingFunc = async () => {
    togglePending(true);

    await requestFunction();

    togglePending(false);
  };

  return [isPending, pendingFunc]
};

export default usePending;