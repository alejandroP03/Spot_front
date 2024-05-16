import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { LiaLockSolid } from "react-icons/lia";
import Video360 from "../components/Video360";

let data = [
  {
    img: "https://cdn.racingnews365.com/2023/Sainz/_1092x683_crop_center-center_85_none/XPB_1234097_HiRes.jpg?v=1709114297",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmffydwUutXGB1K3zAB-I7v4bgaW5FYY9kV62zSgHz4w&s",
  },
  {
    img: "https://pbs.twimg.com/media/E45O0XXXEAgH9mr.jpg:large",
  },
  {
    img: "https://pbs.twimg.com/media/F77vphVW0AAa3G2.jpg:large",
  },
  {
    img: "https://media.gettyimages.com/id/816-69/video/wide-shot-car-point-of-view-chasing-formula-one-race-car-around-track.jpg?s=640x640&k=20&c=a0fV87axSkwl2UdIwR7S8S66IyKVOjwlBEunH9AtOkA=",
  },
];

function Video() {
  return (
    <div className="flex-1 w-full flex flex-col p-2">
      <div className="rounded-lg w-full h-4/5 rounded-large z-0">
        <Video360 />
      </div>
      <div className="h-1/4 w-full flex gap-5">
        {data.map((item, ind) => (
          <Card
            key={ind}
            className="w-full mt-3 flex flex-col"
            radius="lg"
            shadow
          >
            <Image
              className="object-cover w-full flex-1 h-[150px]"
              style={{ opacity: 0.3 }}
              src={item.img}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/100 ">
                Desbloquea con plan premium
              </p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
                disabled
              >
                <LiaLockSolid size={15} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Video;
