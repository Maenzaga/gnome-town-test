import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../store";
import { getGnomes } from "../features/searchGnomes";
import { GnomeView } from "../components";
import { Modal } from "@material-ui/core";

export const GnomeListScreen = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: ApplicationState) => state.gnomeList.isLoading
  );
  const gnomes = useSelector((state: ApplicationState) => {
    return state.gnomeList.gnomes;
  });

  useEffect(() => {
    dispatch(getGnomes());
  }, []);

  return (
    <div>
      {gnomes?.map((data, key) => {
        return (
          <GnomeView
            name={data.name}
            age={data.age}
            height={data.height}
            weight={data.weight}
            thumbnail={data.thumbnail}
            hairColor={data.hairColor}
            professions={data.professions}
            friends={data.friends}
          />
        );
      })}
    </div>
  );
};
