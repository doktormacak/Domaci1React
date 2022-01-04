// Module imports
import { NotificationManager } from "react-notifications";

const CreateNotification = (type) => {
  console.log("Creating notification...");
  console.log(type);
  switch (type) {
    case "info":
      NotificationManager.info("Info message");
      break;
    case "success":
      NotificationManager.success(
        "Uspjesno kreiranje novog naloga!",
        "Succes!"
      );
      break;
    case "warning":
      NotificationManager.warning(
        "Warning message",
        "Close after 3000ms",
        3000
      );
      break;
    case "error":
      NotificationManager.error(
        "Molimo provjerite unos podataka!",
        "Error!",
        5000,
        () => {
          alert("callback");
        }
      );
      break;
    default:
      console.log("No notification type specified.");
  }
};

export default CreateNotification;
