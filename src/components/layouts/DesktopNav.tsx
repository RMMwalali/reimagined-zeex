import Link from 'next/link';
import { Icons } from '../Icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/NavigationMenu';
import { ListItem } from './ListItem';

const DesktopNav = () => {
  return (
    <div className='hidden lg:flex gap-x-8 items-center'>
      <Link href='/' className='flex space-x-2'>
        <Icons.logo className='h-6 w-6' aria-hidden='true' />
        <span className='hidden font-bold lg:inline-block'>Circuit City</span>
        <span className='sr-only'>Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Lobby</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <Link className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md' href='/'>
                      <Icons.logo className='h-6 w-6' />
                      <div className='mb-2 mt-4 text-lg font-medium'>Circuit City</div>
                      <p className='text-sm leading-tight text-muted-foreground'>Welcome to our laptop emporium, where we have revolutionized the way you shop for your perfect laptop</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href='/products' title='Products'>
                  All the products we have to offer
                </ListItem>
                <ListItem href='/#categories' title='Categories'>
                  See all categories we have
                </ListItem>
                {/* <ListItem href='/dashboard/stores' title='Create store'>
                  Create store and start selling products
                </ListItem> */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2'>
                <ListItem href='/products?category=student' title='Students'>
                  Explore the Students category
                </ListItem>
                <ListItem href='/products?category=gamer' title='Gamer'>
                  Explore the Gamers category
                </ListItem>
                <ListItem href='/products?category=business' title='Business Professionals'>
                  Explore the Business category
                </ListItem>
                <ListItem href='/products?category=creator' title='Content Creators'>
                  Explore the Creators category
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
