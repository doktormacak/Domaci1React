// Module imports
import { NotificationManager } from "react-notifications";

/**
 * CreateNotification komponenta kreira odgovarajuci tip notifikacije u zavsnosti od proslijedjenog prop-a
 * pomocu switch-a i NotificationManager-a iz react-notifications biblioteke.
 */
const CreateNotification = (type) => {
  switch (type) {
    case "success":
      NotificationManager.success(
        "Uspjesno kreiranje novog naloga!",
        "Succes!",
        5000
      );
      break;
    case "error":
      NotificationManager.error(
        "Molimo provjerite unos podataka!",
        "Error!",
        5000
      );
      break;
    default:
      console.log("No notification type specified.");
  }
};

export default CreateNotification;
