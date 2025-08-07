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
  const [score, setScore] = useState(0);

  const imageMap = {
    rock,
    paper,
    scissors,
  };

  const options = ["rock", "paper", "scissors"];

  const handleStart = () => {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    handleBotSelect(randomChoice);

    if (randomChoice === image) {
      alert("Draw");
    } else if (
      (randomChoice === "rock" && image === "scissors") ||
      (randomChoice === "paper" && image === "rock") ||
      (randomChoice === "scissors" && image === "paper")
    ) {
      alert("You lost!");
      setScore(score - 1);
    } else {
      alert("You won!");
      setScore(score + 1);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleStart} className={styles.button}>
          Start
        </button>
      </div>

      <div className={styles.options}>
        <div className={styles.player}>
          <select
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={styles.select}
          >
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
          </select>
          <Image src={imageMap[image]} alt={image} className={styles.image} />
        </div>

        <div className={styles.player}>
          <p className={styles.p}>Bot selected:</p>
          {botSelect && (
            <Image
              src={imageMap[botSelect]}
              alt={`Bot selected ${botSelect}`}
              className={styles.image}
            />
          )}
        </div>
      </div>

      <h1 className={styles.h1}>Score: {score}</h1>
    </>
  );
}
