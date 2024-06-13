import { useAppointment } from "./appointments";
import { useProductStore } from "./pharmacy";
import { useSettingsStore } from "./settings";


export const AppStores = {
  useSettingsStore,
  useProductStore,
  useAppointment,
}