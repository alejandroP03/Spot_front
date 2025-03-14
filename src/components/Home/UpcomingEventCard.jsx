import { Button, Card, CardFooter, Image } from "@nextui-org/react";
function UpcomingEventCard({ img_src, title, date }) {
  return (
    <>
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none w-[200px] h-[200px]"
      >
        <Image
          className="object-cover w-[200px] h-[200px]"
          height={200}
          src={img_src}
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/100 ">{title}</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
            disabled
          >
            {date}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default UpcomingEventCard;
