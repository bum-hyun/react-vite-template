import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants/queryKey';
import { getUser } from '@/services/user/user_api';

export const useGetUser = (id: number) =>
  useQuery({
    queryKey: [QUERY_KEY.USER.GET_USER],
    queryFn: () => getUser(id),
  });
