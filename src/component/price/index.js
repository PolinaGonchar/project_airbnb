import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

export default function Price({
    price,
    discount,
    currency,
    ...rest
}) {
    return (
        <Box className="price">
            <div class="price_header">
                <span
                    className={`price_value ${
                    discount ? "price_value--has-discount" : ""
                }`}
                >
                    {currency}
                    {price}
                </span>
                {discount && (
                    <span className={`price_value`}>
                        {currency}
                        {discount}
                    </span>
                )}
            </div>
            <List {...rest} currency={currency}/>
        </Box>
    );
}

function List ({currency, cleaning = 0, service = 0, checkin, checkout}) {
    return (
        <ul className="price__list">
            <ListItem>
                <span>Cleaning fee:</span>
                <span>
                    {currency}
                    {cleaning}
                </span>
            </ListItem>
            <ListItem>
                <span>Service fee:</span>
                <span>
                    {currency}
                    {service}
                </span>
            </ListItem>
            <ListItem>
                <span>Check-in:</span>
                <span>{checkin}</span>
            </ListItem>
            <ListItem>
                <span>Checkout:</span>
                <span>{checkout}</span>
            </ListItem>
        </ul>
    );
}