import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Attractions({ title, nearbyAttractions }) {
  return (
    <Box shadow className="attractions">
      <Heading border>{title}</Heading>
      <List nearbyAttractions={nearbyAttractions} />
    </Box>
  );
}

function List({ nearbyAttractions }) {
  return (
    <ul className="attractions__list">
      {nearbyAttractions.map((attraction) => (
        <ListItem id={attraction.id}>
          <a className="attraction__link" href={attraction.link}>
            {attraction.name}
          </a>
        </ListItem>
      ))}
    </ul>
  );
}