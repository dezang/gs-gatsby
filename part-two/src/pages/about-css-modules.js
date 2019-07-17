import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Dezang"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="Nihil alias nihil nesciunt quasi incidunt quis reprehenderit."
    />
    <User
      username="Akeem"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/weavermedia/128.jpg"
      excerpt="Iusto ex non ullam consequatur."
    />
  </Container>
)
