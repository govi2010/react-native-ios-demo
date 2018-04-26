import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

const onButtonPress = () => {
  //  PointziReact.tagCuid('Hello world, from React JS');
};

class Default extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Default</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff", padding: 20 }}>
          <Button light style={styles.mb15} onPress={onButtonPress}>
            <Text>Light</Text>
          </Button>
          <Button info style={styles.mb15} onPress={onButtonPress}>
            <Text>Info</Text>
          </Button>
          <Button primary style={styles.mb15} onPress={onButtonPress}>
            <Text>Primary</Text>
          </Button>
          <Button success style={styles.mb15} onPress={onButtonPress}>
            <Text>Success</Text>
          </Button>
          <Button warning style={styles.mb15} onPress={onButtonPress}>
            <Text>Warning</Text>
          </Button>
          <Button danger style={styles.mb15} onPress={onButtonPress}>
            <Text>Danger</Text>
          </Button>
          <Button dark style={styles.mb15} onPress={onButtonPress}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Default;
