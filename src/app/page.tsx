import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/utils/authOptions';

const HomePage = async () => {
  const session = await getServerAuthSession();

  if (session) {
    return redirect('/analytics');
  }
  return redirect('/sign-in');
};

export default HomePage;
