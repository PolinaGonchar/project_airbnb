import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Properties({ title, ...additional_properties }) {
  return (
    <Box shadow className="properties">
      <Heading border>{title}</Heading>
      <List {...additional_properties} />
    </Box>
  );
}

function List({
  houseRules,
  cancellationPolicy,
  localTransportation,
  hostLanguages,
  specialOffers,
  checkInInstructions,
}) {
  return (
    <ul className="properties__list">
      <ListItem title="House rools">
        <span>{houseRules}</span>
      </ListItem>

      <ListItem title="Cancellation Policy">
        <span>{cancellationPolicy}</span>
      </ListItem>

      <ListItem title="Local transportation">
        <span>{localTransportation}</span>
      </ListItem>

      <ListItem title="Host languages">
        <span>{hostLanguages.join(", ")}</span>
      </ListItem>

      <ListItem title="Special offers">
        <span>{specialOffers}</span>
      </ListItem>

      <ListItem title="Check-in instructions">
        <span>{checkInInstructions}</span>
      </ListItem>
    </ul>
  );
}