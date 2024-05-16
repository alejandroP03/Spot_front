import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

function LiveEvents() {
  return (
    <>
      <h1 className="ms-4 pt-6 pb-4 text-4xl font-bold text-left">
        Eventos en vivo
      </h1>
      <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-1 px-8 pb-3">
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 left-3 flex-col items-start">
            <p className="text-tiny text-red-600 uppercase font-bold">
              En vivo
            </p>
            <h4 className="text-white font-medium text-2xl">Formula 1</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://sportsbase.io/images/gpfans/copy_1200x800/f188ecea09b8a46d5ccf669b49ca240c0ab992b0.jpg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white text-md">GP Imola - Qualy</p>
            </div>
            <a href="/video">
              <Button
                className="text-sm font-medium"
                color="danger"
                radius="md"
                size="sm"
                variant="shadow"
              >
                Entrar
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-6"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-red-600 uppercase font-bold">
              En vivo
            </p>
            <h4 className="text-white font-medium text-2xl">NBA - Playoffs</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://cdn.vox-cdn.com/thumbor/rGS7cdZg24P9e5kVYxrj65Rqh3A=/0x0:2415x1734/1200x800/filters:focal(893x257:1279x643)/cdn.vox-cdn.com/uploads/chorus_image/image/71560670/usa_today_19326870.0.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-white text-md">Mavs vs OKC - Juego 6</p>
              </div>
            </div>
            <a href="/video">
              <Button
                className="text-sm font-medium"
                color="danger"
                radius="md"
                size="sm"
                variant="shadow"
              >
                Entrar
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
      <h3 className="ms-4 pt-6 pb-4 text-3xl font-bold text-left">
        Categorias
      </h3>
      <div className=" gap-2 grid grid-cols-12 grid-rows-1 px-8">
        <Card className="col-span-12 sm:col-span-3 h-[300px]" isPressable>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Baloncesto
            </p>
            <h4 className="text-white font-bold text-large">NBA</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://yt3.googleusercontent.com/j3EX1ndUELqEgLujUuWXj-JQ8YTknNVZAuHJakkLthvlF2duCsoUcHyvrD6hPJqr1WVuveTuvSg=s900-c-k-c0x00ffffff-no-rj"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-3 h-[300px]" isPressable>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Fútbol
            </p>
            <h4 className="text-white font-bold text-large">
              UEFA Champions League
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://brandemia.org/contenido/subidas/2021/05/portada3-uefa-imagenes-brandemia-web.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-3 h-[300px]" isPressable>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Motor</p>
            <h4 className="text-black font-bold text-large">MotoGP</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://cdn.worldvectorlogo.com/logos/moto-gp.svg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-3 h-[300px]" isPressable>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Lucha</p>
            <h4 className="text-white font-bold text-large">WWE</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d49a473-f75d-4615-840a-8105824b8531/d7rusnx-393ce152-c595-49b3-8065-03df7779c568.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkNDlhNDczLWY3NWQtNDYxNS04NDBhLTgxMDU4MjRiODUzMVwvZDdydXNueC0zOTNjZTE1Mi1jNTk1LTQ5YjMtODA2NS0wM2RmNzc3OWM1NjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.583v7TFO0pErLf_4n874rlO63tnszS9EBe6aBU1aDqs"
          />
        </Card>
      </div>
    </>
  );
}

export default LiveEvents;
