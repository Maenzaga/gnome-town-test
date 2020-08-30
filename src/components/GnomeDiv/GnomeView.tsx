import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import { GnomeDetailsModal } from "../GnomeDetailsModal/GnomeDetailsModal";
import { Separator } from "../Separator";
import "./GnomeView.css";

interface GnomeViewProps {
  name: string;
  age: string;
  weight: string;
  height: string;
  thumbnail: string;
  hair_color: string;
  professions: string[];
  friends: string[];
}

export const GnomeView = (props: GnomeViewProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="GnomeViewContainer">
        <div className="Thumbnail">
          <Avatar alt={`${props.name}`} src={`${props.thumbnail}`} />
        </div>
        <div className="BasicInfo">
          <span style={{ fontSize: 20 }}>{`${props.name}, ${props.age}`}</span>
          <br />
          <span
            style={{ fontSize: 15 }}
          >{`height: ${props.height} | weight: ${props.weight}`}</span>
        </div>
        <Button color="primary" onClick={handleOpen}>
          MORE
        </Button>
        <GnomeDetailsModal
          isVisible={open}
          onClose={handleClose}
          gnome={props}
        />
      </div>
      <Separator />
    </div>
  );
};
