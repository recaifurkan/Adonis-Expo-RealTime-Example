import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import {
  Provider as PaperProvider,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";

import styles from "./src/styles";

import Campaign from "./src/components/Campaign";
import campaigns from "./src/store";
import Socket from "./src/connection/socket";

import PercentCalculator from "./src/calculator/PercentCalculator";
import QuantityCalculator from "./src/calculator/QuantityCalculator";

import config from "./config";
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: "125TL",
      campaigns: [],
    };

    this.onSubmit = (e) => {
      console.log("submitted");
    };
    this.onMessage = (e) => {
      if (e.data) {
        let rsp = e.data;
        if (rsp) {
          rsp = JSON.parse(rsp);
          if (rsp.t == 9) return;
          if (rsp.t == 7) {
            let message = JSON.parse(rsp.d.data);
            this.setState({
              ...message,
              principal: message.price,
              selectedCampaign: null,
            });
            console.log(message);
          }
        }
      }
    };

    this.selectCampaign = (selectedCampaign) => {
      console.log(selectedCampaign);
      console.log("campaign");
      let campaigns = this.state.campaigns;
      if (!selectedCampaign.select && this.state.selectedCampaign) {
        if (selectedCampaign.key != this.state.selectedCampaign.key) return;
      }

      let selected = !(selectedCampaign.selected || false);

      let price = this.state.price;
      let discount = Number(selectedCampaign.discount);

      let calculator = null;
      switch (selectedCampaign.discountUnit) {
        case "%":
          calculator = PercentCalculator;
          break;
        case "TL":
          calculator = QuantityCalculator;
          break;

        default:
          return;
          break;
      }

      price = selected
        ? calculator.calculate(price, discount)
        : calculator.inverseCalculate(price, discount);

      campaigns[selectedCampaign.key] = {
        ...selectedCampaign,
        selected,
      };

      this.setState({
        campaigns,
        price,
        selectedCampaign: selected ? selectedCampaign : null,
      });
    };

    this.socket = new Socket(config.url + "/adonis-ws", this.onMessage);
  }

  render() {
    const Campaings = this.state.campaigns.map((element, index) => {
      console.log(element);
      console.log("state");
      element.key = index;
      return (
        <Campaign
          key={index}
          campaign={element}
          selectCampaign={this.selectCampaign}
        />
      );
    });
    return (
      <PaperProvider>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text style={styles.header}>{this.state.price}</Text>
              <Text
                style={
                  this.state.selectedCampaign
                    ? {
                        ...styles.header,
                        textDecorationLine: "line-through",
                        textDecorationStyle: "solid",
                      }
                    : styles.header
                }
              >
                {this.state.principal}
              </Text>
            </View>
          </View>
          {Campaings}

          {/* <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={this.onSubmit}>
              <Text style={styles.saveButtonText}>Onayla</Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </PaperProvider>
    );
  }
}
