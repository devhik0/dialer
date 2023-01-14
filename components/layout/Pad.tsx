import styles from "@styles/layout/Pad.module.css";
import { MouseEvent } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

type TPadProps = {
  handleClick: (evt: MouseEvent<HTMLButtonElement>) => void;
  btns: (string | number)[];
  firstIndex: number;
  lastIndex: number;
};

export const Pad = ({ handleClick, btns, firstIndex, lastIndex }: TPadProps) => (
  <>
    {btns.slice(firstIndex, lastIndex).map((btn) => (
      <Col key={btn} style={{ padding: "0 0.3rem" }}>
        <Button onClick={handleClick} variant="outline-primary" className={styles["pad-btn"]} value={btn}>
          {btn}
        </Button>
      </Col>
    ))}
  </>
);
