import React , {useEffect} from 'react';
import { Layout } from '../components/layout';
import { useRouter } from 'next/router';

const Main = () => { // daily tracking
  const router = useRouter()

useEffect(()=>{
  router.push('/login');
},[])

return <>
  <Layout isLoading isLogin title="Loading...">
      Loading ....
  </Layout>

</>
}

export default Main;