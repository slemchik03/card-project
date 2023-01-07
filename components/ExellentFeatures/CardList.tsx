import { FC } from "react";
import Card from "./Card";

const cardsInfo = [
  {
    cardTitle: "Preset List of Task",
    cardDescription: "Make bill payments easily using the wallet app",
    cardBg: "#70D0DC",
    cardIconPath: "/card-icon.png",
  },
  {
    cardTitle: "Preset List of Task",
    cardDescription: "Make bill payments easily using the wallet app",
    cardBg: "#7562E0",
    cardIconPath: "/card-icon-1.png",
  },
  {
    cardTitle: "Preset List of Task",
    cardDescription: "Make bill payments easily using the wallet app",
    cardBg: "#FA865F",
    cardIconPath: "/card-icon-2.png",
  }
]

const CardList: FC = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-8 pt-16">
      {
        cardsInfo.map((info, i) => {
          return (
            <Card {...info} />
          )
        })
      }
    </div>
  )
}

export default CardList;
