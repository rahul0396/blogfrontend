
import Navbar from '@/Component/Navbar';
import '../app/globals.css'
const Myapp = ({Component,pageProps}) => {
  return <>
 <Navbar/>
  <Component {...pageProps} />
  </>
}

export default Myapp;