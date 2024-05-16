import { Button } from "@nextui-org/button";

function SidebarButtonRoute({ text, selected, icon }) {
  return (
    <Button
      radius="large"
      variant={selected ? "flat" : "light"}
      startContent={icon}
      fullWidth={true}
      className={`flex justify-start font-normal font-sans text-md ${
        selected ? "bg-default-200" : "bg-default-100"
      }`}
    >
      {text}
    </Button>
  );
}

export default SidebarButtonRoute;
