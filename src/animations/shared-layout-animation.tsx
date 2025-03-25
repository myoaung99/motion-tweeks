import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Game, GAMES } from "@/data";
import Image from "next/image";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "motion/react";

const SharedLayoutAnimation = () => {
  const ref = useRef(null);
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  //@ts-ignore
  useOnClickOutside(ref, () => setActiveGame(null));

  const handleActiveGame = (game: Game) => {
    setActiveGame(game);
  };

  return (
    <Card className="relative overflow-hidden min-w-[300px] w-full rounded-2xl bg-black">
      <CardContent>
        <AnimatePresence>
          {activeGame ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/70"
              />
              <div className="absolute inset-0 grid place-items-center">
                <motion.div
                  ref={ref}
                  layoutId={`${activeGame.title}-wrapper`}
                  className="bg-white max-w-[550px] p-3 rounded-2xl"
                >
                  <div className="mb-3 flex justify-between">
                    <div className="flex gap-4 items-center justify-between">
                      <motion.span layoutId={`${activeGame.title}-image`}>
                        <Image
                          src={activeGame.image}
                          width={1000}
                          height={1000}
                          className="w-14 h-14 rounded-md"
                          alt={activeGame.title}
                        />
                      </motion.span>

                      <div className="flex flex-col">
                        <motion.h2 layoutId={`${activeGame.title}-heading`}>
                          {activeGame.title}
                        </motion.h2>
                        <motion.span
                          layoutId={`${activeGame.title}-description`}
                          className="text-sm text-zinc-500"
                        >
                          {activeGame.description}
                        </motion.span>
                      </div>
                    </div>
                    <motion.span
                      layout="preserve-aspect"
                      layoutId={`${activeGame.title}-get`}
                    >
                      <Button
                        variant={"secondary"}
                        className="bg-blue-200 text-blue-800 rounded-full hover:bg-blue-300"
                      >
                        Get
                      </Button>
                    </motion.span>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.1,
                    }}
                    className="text-sm"
                  >
                    {activeGame.longDescription}
                  </motion.p>
                </motion.div>
              </div>
            </>
          ) : null}
        </AnimatePresence>
        <div className="space-y-2 w-[420px] mx-auto">
          {GAMES.map((game) => {
            return (
              <motion.div
                key={game.title}
                layoutId={`${game.title}-wrapper`}
                className="bg-white rounded-xl p-2 flex justify-between items-center pe-6 hover:bg-zinc-100 cursor-pointer"
                onClick={() => handleActiveGame(game)}
              >
                <div className="flex gap-4">
                  <motion.span layoutId={`${game.title}-image`}>
                    <Image
                      src={game.image}
                      width={1000}
                      height={1000}
                      className="w-14 h-14 rounded-md"
                      alt={game.title}
                    />
                  </motion.span>

                  <div className="flex flex-col">
                    <motion.h2 layoutId={`${game.title}-heading`}>
                      {game.title}
                    </motion.h2>
                    <motion.span
                      layoutId={`${game.title}-description`}
                      className="text-sm text-zinc-500"
                    >
                      {game.description}
                    </motion.span>
                  </div>
                </div>
                <motion.span
                  layout="preserve-aspect"
                  layoutId={`${game.title}-get`}
                >
                  <Button
                    variant={"secondary"}
                    className="bg-blue-200 text-blue-800 rounded-full hover:bg-blue-300"
                  >
                    Get
                  </Button>
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SharedLayoutAnimation;
