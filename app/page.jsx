"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import rock from "@/app/assets/rock.avif";
import paper from "@/app/assets/paper.jpg";
import scissors from "@/app/assets/scissors.jpg";

export default function Home() {
  const [image, setImage] = useState("rock");
  const [botSelect, handleBotSelect] = useState("");

  const imageMap = {
    rock,
    paper,
    scissors,
  };

  const options = ["rock", "paper", "scissors"];

  return (
    <>
      <div>
        <button
          onClick={() => {
            const randomChoice =
              options[Math.floor(Math.random() * options.length)];
            handleBotSelect(randomChoice);
          }}
        >
          Start
        </button>
      </div>
      <div>
        <div>
          <select value={image} onChange={(e) => setImage(e.target.value)}>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
          </select>
          <Image src={imageMap[image]} alt={image} className={styles.image} />
        </div>
        <div>
          <p>Bot selected:</p>
          {botSelect && (
            <Image
              src={imageMap[botSelect]}
              alt={`Bot selected ${botSelect}`}
              className={styles.image}
            />
          )}
        </div>
      </div>
    </>
  );
}
