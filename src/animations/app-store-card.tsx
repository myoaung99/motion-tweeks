"use client";

import { Animation, AnimationContent } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { vikingGame } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";

const AppStoreCard = () => {
  const [isExpended, setIsExpended] = useState(false);
  const [ref, bounds] = useMeasure();
  const toggleExpend = () => setIsExpended((prev) => !prev);

  return (
    <Animation>
      <AnimationContent>
        <Card className="w-full min-w-[300px] min-h-[800px] bg-black rounded-2xl p-4 grid place-items-center relative">
          <motion.div
            layoutId="viking-game-wrapper"
            className="relative rounded-xl overflow-hidden w-80  flex flex-col"
            onClick={toggleExpend}
          >
            <motion.span layoutId="viking-game-img">
              <Image
                src={vikingGame.image}
                width={1000}
                height={1000}
                alt="Game Image"
                className="w-80 aspect-auto"
              />
            </motion.span>
            <motion.div
              layoutId="game-info-wrapper"
              className="absolute bottom-0 left-0 w-full"
            >
              <motion.p
                layoutId="viking-game-award"
                className="text-white capitalize text-4xl font-bold ps-2 pb-2"
              >
                GAME <br /> OF THE <br /> DAY
              </motion.p>
              <motion.div
                layoutId="viking-game-info-wrapper"
                className="backdrop-blur-sm bg-zinc-300/10 w-full flex items-center justify-between p-3"
              >
                <div className="flex gap-2">
                  <motion.span layoutId="viking-game-icon">
                    <Image
                      src={vikingGame.image}
                      width={1000}
                      height={1000}
                      alt="Game Image"
                      className="w-12 aspect-square rounded-lg"
                    />
                  </motion.span>

                  <div className="flex flex-col">
                    <motion.h1 layoutId="viking-game-heading">
                      {vikingGame.title}
                    </motion.h1>
                    <motion.p
                      layoutId="viking-game-description"
                      className="text-xs"
                    >
                      {vikingGame.description}
                    </motion.p>
                  </div>
                </div>

                <motion.span layoutId="viking-game-get">
                  <Button
                    variant={"secondary"}
                    className="bg-blue-200 text-blue-800 rounded-full hover:bg-blue-300"
                  >
                    Get
                  </Button>
                </motion.span>
              </motion.div>
            </motion.div>
            <motion.div
              layoutId="game-long-description"
              className="opacity-0 absolute top-full"
            >
              <div className="space-y-4 bg-white p-3">
                {vikingGame.longDescription.map((d) => (
                  <p className="">{d}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {isExpended ? (
              <motion.div
                className="absolute left-[20%] top-[10%]"
                onClick={toggleExpend}
              >
                <motion.div
                  layoutId="viking-game-wrapper"
                  className=" w-92 flex flex-col"
                >
                  <div className="relative  w-full ">
                    <motion.span layoutId="viking-game-img">
                      <Image
                        src={vikingGame.image}
                        width={1000}
                        height={1000}
                        alt="Game Image"
                        className="w-92 aspect-auto"
                      />
                    </motion.span>
                    <motion.div
                      layoutId="game-info-wrapper"
                      className="absolute bottom-0 left-0 w-full"
                    >
                      <motion.p
                        layoutId="viking-game-award"
                        className="text-white capitalize text-4xl font-bold ps-2 pb-2"
                      >
                        GAME <br /> OF THE <br /> DAY
                      </motion.p>
                      <motion.div
                        layoutId="viking-game-info-wrapper"
                        className="backdrop-blur-sm bg-zinc-300/10 w-full flex items-center justify-between p-3"
                      >
                        <div className="flex gap-2">
                          <motion.span layoutId="viking-game-icon">
                            <Image
                              src={vikingGame.image}
                              width={1000}
                              height={1000}
                              alt="Game Image"
                              className="w-12 aspect-square rounded-lg"
                            />
                          </motion.span>

                          <div className="flex flex-col">
                            <motion.h1 layoutId="viking-game-heading">
                              {vikingGame.title}
                            </motion.h1>
                            <motion.p
                              layoutId="viking-game-description"
                              className="text-xs"
                            >
                              {vikingGame.description}
                            </motion.p>
                          </div>
                        </div>

                        <motion.span layoutId="viking-game-get">
                          <Button
                            variant={"secondary"}
                            className="bg-blue-200 text-blue-800 rounded-full hover:bg-blue-300"
                          >
                            Get
                          </Button>
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div
                    layoutId="game-long-description"
                    className="space-y-4 bg-white p-3"
                  >
                    {vikingGame.longDescription.map((d) => (
                      <p className="">{d}</p>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </Card>
      </AnimationContent>
    </Animation>
  );
};

export default AppStoreCard;
