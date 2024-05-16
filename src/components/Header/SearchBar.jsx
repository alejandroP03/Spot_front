import { Input } from "@nextui-org/react";
import { LiaSearchSolid } from "react-icons/lia";
function SearchBar() {
  return (
    <>
      <Input
        type="text"
        placeholder="Busca tu evento deportivo"
        startContent={<LiaSearchSolid />}
        size="lg"
        radius="lg"
        className="w-full"
      />
    </>
  );
}

export default SearchBar;
