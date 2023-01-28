import React from "react";
import styles from "@/styles/Categories.module.css";
import HeadingNormal from "../helperComponents/HeadingNormal";
import { categories } from "@/constants/categories.constant";
import { actors } from "@/constants/actors.constant";
import { Button, Card, Col, Row, Text } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.title}>
        <div>
          <HeadingNormal text="Categories To Explore" />
        </div>

        <div className={styles.tagsDiv}>
          {categories.map((item) => (
            <div className={styles.tag}>{item}</div>
          ))}
        </div>
      </div>
      <div className={styles.cardContainer}>
      {actors.map(item => (
          <div className={styles.item}>
    <div key={item.id}>
    <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute",left:0, zIndex: 1}}>
      <Col>
        <Text h3 color="black">
        <FontAwesomeIcon icon={faHeart}  className={styles.icon}/>
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={item.image}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            {item.name}
          </Text>
          <Text color="#000" size={12}>
            Get notified.
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
   <div>
   <FontAwesomeIcon icon={faStar}  style={{color:"yellow",border:"black"}}/>
   <FontAwesomeIcon icon={faStar}  style={{color:"yellow"}}/>
   <FontAwesomeIcon icon={faStar}  style={{color:"yellow"}}/>
   <FontAwesomeIcon icon={faStar}  style={{color:"yellow"}}/>
   <FontAwesomeIcon icon={faStar}  style={{color:"yellow"}}/>
   </div>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
        </div>
          </div>
      ))}
      </div>
    </div>
  );
}

export default Categories;
