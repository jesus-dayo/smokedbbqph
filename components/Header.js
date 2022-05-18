import Link from 'next/link';
import {
  HomeIcon,
  NewspaperIcon,
  ClipboardListIcon,
  UserIcon,
} from '@heroicons/react/outline';

const Header = () => {
  return (
    <div>
      <div className="flex justify-between shadow-md h-14">
        <div>icon</div>
        <div>
          <div className="p-4 gap-4 hidden md:flex">
            <h2 className="hover:font-bold">
              <Link href={'/'}>Home</Link>
            </h2>
            <h2 className="hover:font-bold">
              <Link href={'/aboutUs'}>About Us</Link>
            </h2>
            <h2 className="hover:font-bold">
              <Link href={'/order'}>Order Now</Link>
            </h2>
            <h2 className="hover:font-bold">
              <Link href={'/order'}>Account</Link>
            </h2>
          </div>
          <div className="p-4 gap-4 flex md:hidden">
            <HomeIcon className="h-5 w-5 cursor-pointer" />
            <NewspaperIcon className="h-5 w-5 cursor-pointer" />
            <ClipboardListIcon className="h-5 w-5 cursor-pointer" />
            <UserIcon className="h-5 w-5  cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
