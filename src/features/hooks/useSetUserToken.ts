import { MutationConfig } from './../../libs/reactQuery';
import { useMutation } from '@tanstack/react-query';

export const setUserToken = ({ userToken }: { userToken: string }): Promise<void> => {
  return new Promise(() => {
    localStorage.setItem('USER_TOKEN', userToken);
    console.log('SET USER TOKEN');
  });
};

type UseSetUserTokenOptions = {
  config?: MutationConfig<typeof setUserToken>;
};

export const useSetUserToken = ({ config }: UseSetUserTokenOptions) => {
  return useMutation({
    ...config,
    mutationFn: setUserToken,
  });
};
