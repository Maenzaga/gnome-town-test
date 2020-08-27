import { Gnome } from "../../types";

export interface SearchGnomeState {
  isLoading: boolean;
  gnomes?: Gnome[];
}
