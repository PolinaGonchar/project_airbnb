import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import animal from "./animal.svg";
import transfer from "./transfer.svg";
import concierge from "./concierge.svg";
import service from "./service.svg";
import children from "./children.svg";

export default function Amenities({ title, ...amenities }) {
  return (
    <Box shadow className="amenities">
      <Heading border>{title}</Heading>
      <List {...amenities} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      {hasPool && (
        <ListItem imageSrc={pool}>
          <span>Swimming Pool</span>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imageSrc={gym}>
          <span>Gym</span>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>
          <span>Free Breakfast</span>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc={wifi}>
          <span>Free WiFi</span>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc={parking}>
          <span>Parking</span>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={animal}>
          <span>Pets Allowed</span>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={transfer}>
          <span>Airport Shuttle</span>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={concierge}>
          <span>Concierge Service</span>
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={service}>
          <span>Room Service</span>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={children}>
          <span>Child Friendly</span>
        </ListItem>
      )}
    </ul>
  );
}