console.debug('SR5 Workshop | Loading module into FoundryVTT');

import { WorkshopModel } from "./models/WorkshopModel.mjs";
import { WorkshopSheet } from "./sheets/WorkshopSheet.mjs";

/**
 * Register module sub-types and sheets for them.
 */
const onInit = () => {
    console.debug('SR5 Workshop | Initializing module');

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

/**
 * Register module Shadowrun5e tests.
 */
const onReady = async () => {
    console.debug('SR5 Workshop | Readying module');

    // Register tests witin own esmmodule to assure tests imports happens when FoundryVTT calls 'ready'.
    // For this reason the import can´t happen at the top of the file but must be a dynamic import.
    const tests = await import('./utils/tests.mjs');
    tests.registerTests();
};

Hooks.on('init', onInit);
Hooks.on('ready', onReady);