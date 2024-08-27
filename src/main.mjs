console.error("Main Module");
import { WorkshopModel } from "./models/WorkshopModel.mjs";
import { WorkshopSheet } from "./sheets/WorkshopSheet.mjs";

const onInit = () => {
    Object.assign(CONFIG.Actor.dataModels, {
        "sr-workshop.workshop": WorkshopModel,
    });

    DocumentSheetConfig.registerSheet(
        Actor,
        "sr-workshop",
        WorkshopSheet,
        {
            types: ["sr-workshop.workshop"],
            makeDefault: true,
        }
    );
};

