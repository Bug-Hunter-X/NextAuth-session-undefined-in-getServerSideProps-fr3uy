```javascript
import {getServerSession} from 'next-auth';
import {authOptions} from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
export default function Home({ session }) {
  console.log(session);
  return (
    <div>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
```