import { Button, Col } from "react-bootstrap";
import styles from "../../styles/scss/modules/layout/Pad.module.css";
import { PadProps } from "../../types/types";

const Pad = ({ handleClick, btns, firstIndex, lastIndex }: PadProps) => (
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

export default Pad;
