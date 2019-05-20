
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading,Text } from 'native-base';
import { Left, Body, Right, Button, Icon, Title } from 'native-base';
import Tab1 from '../Tabs/tabOne';
import Tab2 from '../Tabs/tabTwo';
import Tab3 from '../Tabs/tabThree';
import Tab4 from '../Tabs/tabFour';

export default class TabsAdvancedExample extends Component {
  static navigationOptions = {
	header: null,
	};
  render() {
    return (
      <Container >
        <Header hasTabs
                androidStatusBarColor='#054E47'
                style={{backgroundColor: '#006257'}}>
          <Body >
            <Title color='white' size='30'>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent >
              <Icon active name="search" />
            </Button>
            <Button transparent >
              <Icon active name="more" />
            </Button>
          </Right>
          </Header>
        <Tabs
            initialPage={1}>
          <Tab heading={ <TabHeading style={{backgroundColor: '#006257'}}><Icon name="camera" /></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#006257'}}><Text>CHATS</Text></TabHeading>} >
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#006257'}}><Text>STATUS</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#006257'}}><Text>CALLS</Text></TabHeading>}>
            <Tab4 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
