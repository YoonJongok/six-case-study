import { getServerSession, type NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import z from 'zod';
import { UserService } from '@/api/services/User';

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string().min(1), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          console.log('Invalid credentials');
          return null;
        }

        const { username, password } = parsedCredentials.data;
        const user = await UserService.login({ username, password });

        if (!user) return null;

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (!user) return token;

      token.token = user.token;
      token.username = user.username;
      token.email = user.email;
      token.id = user.id as number;
      token.firstName = user.firstName;
      token.lastName = user.lastName;
      token.gender = user.gender;
      token.image = user.image;
      token.token = user.token;

      return token;
    },

    session: ({ session, token }) => {
      session.user.token = token.token;
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.gender = token.gender;
      session.user.image = token.image;
      session.user.token = token.token;

      return session;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
