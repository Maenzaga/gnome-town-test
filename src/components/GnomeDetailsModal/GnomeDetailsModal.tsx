import { Gnome } from "../../types";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import React, { useState } from "react";
import { makeStyles, createStyles, Theme, Avatar } from "@material-ui/core";

interface GnomeDetailsModalProps {
  gnome: Gnome;
  isVisible: boolean;
  onClose: () => void;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export const GnomeDetailsModal = (props: GnomeDetailsModalProps) => {
  const { gnome, isVisible, onClose } = props;
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <span id="simple-modal-title">{`${props.gnome?.name} Info`}</span>
      <span id="simple-modal=description">
        <br />
        {`Age: ${props.gnome?.age}`}
        <br />
        {`Weight: ${props.gnome?.weight}`}
        <br />
        {`Height: ${props.gnome?.height}`}
        <br />
        {`Hair Color: ${props.gnome?.hair_color}`}
        <br />
        {`Profession/s: ${props.gnome?.professions}`}
        <br />
        {`Friends: ${props.gnome?.friends}`}
        <br />
      </span>
      <div className="Thumbnail">
        <Avatar
          alt={`${props.gnome?.name}`}
          src={`${props.gnome?.thumbnail}`}
        />
      </div>
    </div>
  );

  return (
    <Modal
      open={props.isVisible}
      onClose={props.onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};
