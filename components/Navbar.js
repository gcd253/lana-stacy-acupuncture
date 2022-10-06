import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex border bg-gray-200 py-6 justify-around">
      <Link href="/">Home</Link>
      <Link href="/housecalls">House Calls</Link>
      <Link href="/about">About Me</Link>
      <Link href="/services">Services</Link>
      <Link href="/testimonials">Testimonials</Link>
      <Link href="/bookings">Book Now</Link>
      <Link href="/shop">Shop</Link>
    </nav>
  );
};

export default Navbar;
