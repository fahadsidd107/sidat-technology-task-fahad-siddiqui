import React from "react";
import styles from "@/styles/Latest.module.css";
import Image from "next/image";
import union from "./../../assets/Union.png";
import { actors } from "@/constants/actors.constant";
import { Card, Row, Text } from "@nextui-org/react";
import HeadingNormal from "../helperComponents/HeadingNormal";

function Latest() {

  const menu = actors.map((item:any) => {
    return <div key={item.name}>{item.name}</div>
});

  return (
    <div className={styles.book}>
      <div className={styles.union}>
        <Image src={union} alt="unions" />
      </div>
      <div className={styles.scroll}>
        <div className={styles.heading}>
          <HeadingNormal text="Latest Content"/>
        </div>
        <div className={styles.cardContainer}>
        {actors.map(item => (
          <div className={styles.item}>
    <div key={item.id}>
    <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.image}
                objectFit="cover"
                width="100%"
                height={300}
                alt={item.name}
              />
            </Card.Body>
            <Card.Footer css={{ color: "White", justifyItems: "flex-start" , background:"Black"}}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b css={{ color: "White"}}>{item.name}</Text>
                <Text css={{ color: "White", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </div>
          </div>
      ))}
        </div>
      </div>
    </div>
  );
}

export default Latest;
