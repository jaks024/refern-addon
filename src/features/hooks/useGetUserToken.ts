import { MutationConfig } from './../../libs/reactQuery';
import { useMutation } from '@tanstack/react-query';

export const getUserToken = ({}: {}): Promise<string> => {
  return new Promise((acc, rej) => {
    const token = localStorage.getItem('USER_TOKEN');
    if (token) {
      acc(token);
    } else {
      rej('NO TOKEN FOUND');
    }
  });
};

type UseGetUserTokenOptions = {
  config?: MutationConfig<typeof getUserToken>;
};

export const useGetUserToken = ({ config }: UseGetUserTokenOptions) => {
  return useMutation({
    ...config,
    mutationFn: getUserToken,
  });
};
