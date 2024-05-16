import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/react";
import { LiaBellSolid } from "react-icons/lia";
function UserNav() {
  return (
    <>
      <nav className="flex gap-3 items-start pe-5 justify-end w-1/3">
        <Button isIconOnly variant="light" size="lg">
          <LiaBellSolid />
        </Button>
        <User
          name="John Doe"
          description="Premium+"
          avatarProps={{
            src: "https://i.pravatar.cc/150",
            radius: "lg",
          }}
        />
      </nav>
    </>
  );
}

export default UserNav;
