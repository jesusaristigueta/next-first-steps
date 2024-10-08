

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

// const temporalAsync = () => {
//   return new Promise ( (resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 2000);
//   })
// };

export const NavBar = /*async*/ () => {

  // await temporalAsync();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

      <Link href='/' className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
        navItems.map(({ path, text }) => (
          <ActiveLink path={path} text={text} key={path} />
        ))}
    </nav>
  )
}
