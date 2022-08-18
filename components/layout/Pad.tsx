import { MouseEvent } from "react";
import { Button, Col } from "react-bootstrap";
import styles from "./Pad.module.css";

type PadProps = {
  handleClick: (evt: MouseEvent<HTMLButtonElement>) => void;
  btns: (string | number)[];
  firstIndex: number;
  lastIndex: number;
};

const Pad = ({ handleClick, btns, firstIndex, lastIndex }: PadProps) => {
  return (
    <>
      {btns.slice(firstIndex, lastIndex).map((btn) => (
        <Col key={btn} className={styles.col}>
          <Button onClick={handleClick} variant="outline-primary" className={styles["pad-btn"]} key={btn} value={btn}>
            {btn}
          </Button>
        </Col>
      ))}
    </>
  );
};

export default Pad;
