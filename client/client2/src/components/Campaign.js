import * as React from "react";

import styles from "../styles";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TouchableHighlight,
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = () => {
      this.props.selectCampaign(this.props.campaign);
    };
  }

  render() {
    let campaign = this.props.campaign;
    let hours = campaign.hoursOfDay.map((hour, index) => {
      return (
        <Text key={index}>
          {hour.startHour} - {hour.endHour}
        </Text>
      );
    });

    let company = campaign.company ? campaign.company.name : "";
    console.log(company);

    return (
      <TouchableOpacity
        style={
          campaign.selected || false
            ? styles.campaignCardActive
            : styles.campaignCardPassive
        }
        onPress={this.handleClick}
      >
        <View style={styles.campaignCardColumn}>
          <Text>Son {campaign.lastPersonSize} kişi</Text>
          <Text>{company}</Text>
        </View>
        <View style={styles.campaignCardColumn}>
          <Text>
            {campaign.discount} {campaign.discountUnit}
          </Text>
          <Text>Son {campaign.lastPersonSize} kişi</Text>
          <Text>
            {campaign.minimumPurchaseAmount} Tl ve üzeri alışverişlerde
          </Text>
        </View>
        <View style={styles.campaignCardColumn}>{hours}</View>
      </TouchableOpacity>
    );
  }
}
