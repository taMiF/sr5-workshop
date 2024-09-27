/**
 * Extend the default test implementation for a custom test that
 * - alters the default dialog
 * - extends test behavior
 */
export class CustomTest extends game.shadowrun5e.tests.SuccessTest {
    constructor(actor, options) {
        super(actor, options);
    }

    /**
     * Allow other implementations to override what TestDialog template to use.
     */
    get _dialogTemplate() {
        return "modules/sr5-workshop/templates/tests/custom-test-dialog.html";
    }

    /**
     * Provide custom label
     */
    static get label() {
        return "SR5WS.Tests.CustomTest";
    }
}
