import Page from './component/page';
import Header from './component/header';
import Title from './component/title';
import Photo from './component/photo';
import Price from './component/price';
import RoomList from './component/room-list';
import Description from './component/description';
import Details from './component/details';
import Amenities from "./component/amenities";
import Properties from "./component/properties";
import Reviews from "./component/reviews";
import Attractions from "./component/attractions";
import Host from "./component/host";


function App() {
  const data = {
    listing_name: "East-Side Cottage",
    reviews_summary: {
      average_rating: 4.9,
      total_reviews: 190,
    },
    location: {
      city: "Austin, Texas",
      country: "United States",
    },
    superhost: true,

    image: "https://picsum.photos/1000/1000",

    price: {
      original_price: 308,
      discounted_price: 218,
      currency: "$",
      cleaning_fee: 90,
      service_fee: 200,
    },
    availability: {
      checkin_date: "9/6/2023",
      checkout_date: "9/11/2023",
    },

    roomTypes: [
      {
        id: 5313,
        type: "Deluxe Room",
        pricePerNight: 300,
        currency: "$",
        capacity: 2,
      },
      {
        id: 6264,
        type: "Suite",
        pricePerNight: 500,
        currency: "$",
        capacity: 4,
      },
      {
        id: 7332,
        type: "Presidential",
        pricePerNight: 1000,
        currency: "$",
        capacity: 6,
      },
    ],

    description:
      "Enjoy this clean, modern cottage located in a quiet yet convenient area of Central East Austin. Inspired by Japanese tea houses, this backyard cottage offers easy access to SXSW venues, the ACL festival, downtown, great restaurants, and public transportation, while providing a peaceful retreat for relaxation and recharging.",

    property_details: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },

    neighborhood_info: "The neighborhood is charming, fun, safe, and lovely...",

    amenities: {
      hasPool: true,
      hasGym: false,
      hasFreeBreakfast: true,
      hasFreeWiFi: true,
      hasParking: false,
      hasPetsAllowed: false,
      hasAirportShuttle: true,
      hasConciergeService: true,
      hasRoomService: false,
      hasChildFriendly: true,
    },

    contact_info: {
      name: "Kerthy",
      image: "https://picsum.photos/80/80",
      response_rate: 100,
      response_time: "within an hour",
      info: "I'm an Austin-Brooklyn filmmaker and television producer who can be found biking to the Farmer's Market...",
      phone: "+123-456-7890",
    },

    additional_properties: {
      house_rules:
        "No smoking or pets allowed. Quiet hours from 10:00 PM to 7:00 AM.",
      cancellation_policy:
        "Flexible cancellation policy with full refund if canceled 7 days before check-in.",
      local_transportation:
        "Public buses and taxis available within walking distance.",
      host_languages: ["English", "Spanish"],
      special_offers: "10% discount for bookings of 7 nights or more.",
      check_in_instructions:
        "Check-in time is 3:00 PM. Please contact us in advance with your estimated arrival time.",
    },

    guestReviews: [
      {
        id: 43454,
        guestName: "Alice Johnson",
        rating: 5,
        review:
          "Amazing experience! The staff was very friendly and the facilities were top-notch.",
      },
      {
        id: 75543,
        guestName: "Bob Smith",
        rating: 4,
        review:
          "Great location and beautiful views. However, the prices at the restaurant were a bit high.",
      },
      {
        id: 55431,
        guestName: "Eve Williams",
        rating: 5,
        review:
          "Absolutely loved the spa treatments. It was a relaxing and rejuvenating stay.",
      },
    ],

    nearbyAttractions: [
      {
        id: 453,
        name: "Crystal Clear Beach",
        link: "www.test.com",
      },
      {
        id: 741,
        name: "Tropical Rainforest Hiking Trails",
        link: "www.test.com",
      },
      {
        id: 422,
        name: "Island Waterfalls",
        link: "www.test.com",
      },
      {
        id: 876,
        name: "Cultural Village Tours",
        link: "www.test.com",
      },
    ],
  };

  return (
    <Page>
      <Header />
      <Title
        title ={data.listing_name}
        rating={data.reviews_summary.average_rating}
        review={data.reviews_summary.total_reviews}
        city={data.location.city}
        country={data.location.country}
        superhost={data.superhost}
        />
        <Photo src={data.image} name={data.listing_name}/>
        <Price
          price={data.price.original_price}
          discount={data.price.discounted_price}
          currency={data.price.currency}
          cleaning={data.price.cleaning_fee}
          service={data.price.service_fee}
          checkin={data.availability.checkin_date}
          checkout={data.availability.checkout_date}
        />
        <RoomList list={data.roomTypes} />
        <Description title="Description" children={data.description} />
        <Details
          guests={data.property_details.guests}
          bedrooms={data.property_details.bedrooms}
          beds={data.property_details.beds}
          baths={data.property_details.baths}
          title="Property details"
        />
        <Description title="Neighbourhood" children={data.neighborhood_info} />
        <Amenities
          title="Amenities"
          hasPool={data.amenities.hasPool}
          hasGym={data.amenities.hasGym}
          hasFreeBreakfast={data.amenities.hasFreeBreakfast}
          hasFreeWiFi={data.amenities.hasFreeWiFi}
          hasParking={data.amenities.hasParking}
          hasPetsAllowed={data.amenities.hasPetsAllowed}
          hasAirportShuttle={data.amenities.hasAirportShuttle}
          hasConciergeService={data.amenities.hasConciergeService}
          hasRoomService={data.amenities.hasRoomService}
          hasChildFriendly={data.amenities.hasChildFriendly}
        />
        <Host
          name={`Host — ${data.contact_info.name}`}
          image={data.contact_info.image}
          responseRate={data.contact_info.response_rate}
          responseTime={data.contact_info.response_time}
          info={data.contact_info.info}
          phone={data.contact_info.phone}
        />
        <Properties
          title = "Additional properties"
          houseRules = {data.additional_properties.house_rules}
          cancellationPolicy = {data.additional_properties.cancellation_policy}
          localTransportation = {data.additional_properties.local_transportation}
          hostLanguages = {data.additional_properties.host_languages}
          specialOffers = {data.additional_properties.special_offers}
          checkInInstructions = {data.additional_properties.check_in_instructions}
        />
        <Reviews title="Guest Reviews" guestReviews={data.guestReviews} />
        <Attractions
          title="Nearby Attractions"
          nearbyAttractions={data.nearbyAttractions}
        />
  </Page>
  );
}

export default App;
