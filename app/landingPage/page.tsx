import Link from 'next/link';
import Home from './home/Home';

export default function LandingPage() {
  return (
    <div>
      <Home />
      {/* <h1>Landing Page</h1> */}
      {/* <ul>
        <li><Link href="/landingPage/admin">Go to Admin</Link></li>
        <li><Link href="/landingPage/dashboard">Go to Dashboard</Link></li>
        <li><Link href="/landingPage/detail">Go to Detail</Link></li>
        <li><Link href="/landingPage/home">Go to Home</Link></li>
        <li><Link href="/landingPage/rent">Go to Rent</Link></li>
      </ul> */}
    </div>
  );
}
