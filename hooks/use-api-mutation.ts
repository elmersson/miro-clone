import { useState } from 'react';
import { useMutation } from 'convex/react';
import { FunctionReference, FunctionReturnType, OptionalRestArgs } from 'convex/server';

const useApiMutation = <Mutation extends FunctionReference<'mutation'>>(
  mutationFunction: Mutation
): {
  mutate: (...payload: OptionalRestArgs<Mutation>) => Promise<FunctionReturnType<Mutation>>;
  pending: boolean;
} => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (...payload: OptionalRestArgs<Mutation>) => {
    setPending(true);
    return apiMutation(...payload)
      .finally(() => setPending(false))
      .then(result => result)
      .catch(error => { throw error });
  };

  return {
    mutate,
    pending
  };
};

export default useApiMutation;