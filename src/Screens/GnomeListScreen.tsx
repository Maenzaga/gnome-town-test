import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../store";
import Axios from "axios";
import { getGnomes } from "../features/searchGnomes";

export const GnomeListScreen = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: ApplicationState) => state.gnomes.isLoading
  );
  const gnomes = useSelector((state: ApplicationState) => {
    return state.gnomes.gnomes;
  });

  useEffect(() => {
    dispatch(getGnomes());
  }, []);

  return (
    <div>
      {gnomes?.map((data, key) => {
        return <div key={key}>{`Name: ${data.name}, Age: ${data.age}`}</div>;
      })}
    </div>
  );
};
