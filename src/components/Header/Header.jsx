import SearchBar from "./SearchBar";
import UserNav from "./UserNav";
function Header() {
  return (
    <header className="flex w-full justify-between">
      <SearchBar />
      <UserNav />
    </header>
  );
}

export default Header;
