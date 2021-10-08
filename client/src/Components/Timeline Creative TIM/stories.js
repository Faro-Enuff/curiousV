import React from "react";

// @material-ui/icons
import CardTravel from "@mui/icons-material/CardTravel";
import Extension from "@mui/icons-material/Extension";
import Fingerprint from "@mui/icons-material/Fingerprint";
import FlightLand from "@mui/icons-material/FlightLand";
import Build from "@mui/icons-material/Build";
import Enso from "../../Images/Enso.png";

const stories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    Avatar: Enso,
  },
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    Avatar: Enso,
  },
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    Avatar: Enso,
  },
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    Avatar: Enso,
  },
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    Avatar: Enso,
  },
  {
    // Second story
    badgeColor: "success",
    Avatar: Enso,
    title: "Another One",
    titleColor: "success",
    body: <p></p>,
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    Avatar: Enso,
    title: "Another Title",
    titleColor: "info",
    // body: (
    //   <div>
    //     <p>
    //       Called I Miss the Old Kanye That’s all it was Kanye And I love you
    //     </p>
    //     <p>
    //       What if Kanye made a song about Kanye Royère doesn{"'"}t make a Polar
    //     </p>
    //   </div>
    // ),
    // footer: (
    //   <CustomDropdown
    //     buttonIcon={Build}
    //     buttonProps={{
    //       round: true,
    //       style: { marginBottom: "0" },
    //       color: "info",
    //     }}
    //     dropdownList={[
    //       "Action",
    //       "Another action",
    //       "Something else here",
    //       { divider: true },
    //       "Separated link",
    //     ]}
    //   />
    // ),
  },
  {
    // Fourth story
    badgeColor: "warning",
    Avatar: Enso,
    title: "Another One",
    titleColor: "warning",
    body: <p></p>,
  },
];

export default stories;
