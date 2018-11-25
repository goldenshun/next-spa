import { Link } from '../routes';

const Index = () => (
  <>
    <div><Link route="/about"><a>About</a></Link></div>
    <div><Link route="/user/123"><a>User 123</a></Link></div>
  </>
);

export default Index;
