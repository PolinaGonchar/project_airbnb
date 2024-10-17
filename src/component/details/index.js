import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guest from "./guests.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function Details({ title, guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="details">
      <Heading border>{title}</Heading>
      <Property {...{ guests, bedrooms, beds, baths }} />
    </Box>
  );
}

function Property({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={guest}>
        <span>{guests}</span>
        <span>guest/s</span>
      </ListItem>
      <ListItem imageSrc={bedroom}>
        <span>{bedrooms}</span>
        <span>bedroom/s</span>
      </ListItem>
      <ListItem imageSrc={bed}>
        <span>{beds}</span>
        <span>bed/s</span>
      </ListItem>
      <ListItem imageSrc={bathroom}>
        <span>{baths}</span>
        <span>bathroom/s</span>
      </ListItem>
    </ul>
  );
}