import Carousel from "better-react-carousel";
import UpcomingEventCard from "./UpcomingEventCard";
function UpcomingEvents() {
  return (
    <div className="p-3 flex flex-col gap-3">
      <h2 className="text-xl font-bold">
        Explora los próximos eventos en Spot VR.
      </h2>
      <div className="flex w-full">
        <Carousel cols={6} rows={1} gap={10} loop>
          <Carousel.Item>
            <UpcomingEventCard
              img_src={
                "https://estaticos-cdn.prensaiberica.es/clip/e939681d-d230-4175-a6ee-68b301c4bbe2_alta-libre-aspect-ratio_default_0.jpg"
              }
              title={"Gran Premio de Imola - Carrera"}
              date={"18/May"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <UpcomingEventCard
              img_src={
                "https://estaticos-cdn.prensaiberica.es/clip/cea4eb0b-08a3-43e1-8eb2-7896aa7c861c_alta-libre-aspect-ratio_default_0.jpg"
              }
              title={"Final Champions League 2024"}
              date={"20/May"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <UpcomingEventCard
              img_src={
                "https://media.contentapi.ea.com/content/dam/ufc/images/2017/10/easufc3-overview-championshipfighters.jpg.adapt.crop16x9.575p.jpg"
              }
              title={"UFC: Lewis vs Ngannou"}
              date={"22/May"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <UpcomingEventCard
              img_src={
                "https://cdn.vox-cdn.com/thumbor/nJOv1hhMyH3tB2SN-YyKYg1nIzc=/0x0:4337x2891/1200x800/filters:focal(1816x735:2508x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/73342427/2152407910.0.jpg"
              }
              title={"Nuggets vs Wolves - Partido 6"}
              date={"24/May"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <UpcomingEventCard
              img_src={
                "https://cdn-media.theathletic.com/XDrouVRvTRUw_xagXM1G67RLc_1440x960.jpg"
              }
              title={"Chief vs Broncos - Partido 7"}
              date={"26/May"}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default UpcomingEvents;
