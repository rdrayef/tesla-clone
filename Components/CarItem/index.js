import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalculator,
  faCog,
  faFan,
  faKey,
  faLock,
  faToolbox,
  faUnlock,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";

const CarItem = () => {
  const [locked, setlocked] = useState(false);
  const clickLock = () => {
    if (locked) {
      setlocked(false);
    } else {
      setlocked(true);
    }
  };
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundimage}
      ></ImageBackground>

      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faCog}
            size={18}
            style={{
              color: "white",
            }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}> profile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faToolbox}
            size={18}
            style={{
              color: "white",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.batterysection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryimage}
        />

        <Text style={styles.batterytext}>150 mi</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.controlsButtons}>
            <FontAwesomeIcon
              icon={faFan}
              size={18}
              style={{
                color: "white",
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.controlsButtons}>
            <FontAwesomeIcon
              icon={faKey}
              size={18}
              style={{
                color: "white",
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={clickLock}>
          <View style={styles.controlsButtons}>
            <FontAwesomeIcon
              icon={locked ? faLock : faUnlockAlt}
              size={18}
              style={{
                color: "white",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CarItem;
