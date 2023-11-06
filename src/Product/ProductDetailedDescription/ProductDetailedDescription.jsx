import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import "./styles.scss";
import Attachment from "../../resources/icons/attachment.svg";

const ProductDetail = (props) => {
  const {
    description_long,
    features,
    attachments,
    keywords,
    minimum_order_quantity,
    unit,
    delivery_time,
    price_breaks,
  } = props.data;

  return (
    <div className="product-description-container">
      <div>
        <Typography
          variant="h6"
          className="product-description-container--description-heading"
          sx={{ fontWeight: "bold" }}
        >
          DESCRIPTION
        </Typography>
        <Typography>{description_long}</Typography>
      </div>
      <div className="product-description-container--details-pricing">
        <div className="product-description-container--details">
          <Typography
            variant="h6"
            className="product-description-container--description-heading"
            sx={{ fontWeight: "bold" }}
          >
            DETAILS
          </Typography>
          <div className="product-description-container--subparts">
            <Typography
              variant="subtitle1"
              className="product-description-container--sub-heading"
              sx={{ fontWeight: "bold" }}
            >
              Features
            </Typography>
            <List sx={{ listStyleType: "disc" }}>
              {Object.keys(features).map((item) => (
                <ListItem key={item}>
                  <ListItemText
                    primary={`${item}: ${features[item]}`}
                    sx={{ display: "list-item" }}
                  />
                </ListItem>
              ))}
            </List>
          </div>
          <div className="product-description-container--subparts">
            <Typography
              variant="subtitle1"
              className="product-description-container--sub-heading"
              sx={{ fontWeight: "bold" }}
            >
              Attachments
            </Typography>
            <div className="attachments">
              {attachments.map((item) => (
                <a key={item.file_label} href={item.file_link}>
                  <img
                    src={Attachment}
                    alt="attachment"
                    className="attachment"
                  />
                  {item.file_label}
                </a>
              ))}
            </div>
          </div>
          <div className="product-description-container--subparts">
            <Typography
              variant="subtitle1"
              className="product-description-container--sub-heading"
              sx={{ fontWeight: "bold" }}
            >
              Keywords
            </Typography>
            <div>
              {keywords.map((item) => (
                <button key={item} className="keywords">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="product-description-container--details">
          <Typography
            variant="h6"
            className="product-description-container--description-heading"
            sx={{ fontWeight: "bold" }}
          >
            PRICING & SHIPPING
          </Typography>
          <div className="product-description-container--subparts">
            <List sx={{ listStyleType: "disc" }}>
              <ListItem>
                <ListItemText
                  sx={{ display: "list-item" }}
                  primary={`Minimum order: ${minimum_order_quantity}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  sx={{ display: "list-item" }}
                  primary={`Shipping: ${unit} EUR`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  sx={{ display: "list-item" }}
                  primary={`Delivery: ${delivery_time} days`}
                />
              </ListItem>
            </List>
          </div>
          <div className="product-description-container--subparts">
            <Typography
              variant="subtitle1"
              className="product-description-container--sub-heading"
              sx={{ fontWeight: "bold" }}
            >
              Price breaks
            </Typography>
            <List>
              {Object.keys(price_breaks).map((item) => (
                <ListItem key={item}>
                  <ListItemText
                    primary={`ex ${item} PCE ${price_breaks[item]} EUR/PCE`}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDetailedDescription = ProductDetail;
