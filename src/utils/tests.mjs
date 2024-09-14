/**
 * Handle registration of custom tests with the Shadowrun5e system.
 * All test implemenations need to be imported here, and not within main.mjs, to ensure
 * load order between system and module as tests and this code relies on the system having
 * been loaded first and having setup system globals and test registry.
 */
import { CustomTest } from "../tests/CustomTest.mjs";

export class TestRegistrationError extends Error {}

/**
 * Register the given test implementation into the system test registry.
 *
 * Should a test implementation with this name already exist, fail with an exception.
 * @param {*} testClass
 * @throws {TestRegistrationError} if a test implementation with the same name already exists
 */
export function registerTest(testClass) {
    console.debug("SR5 Workshop | Registering test", testClass);

    if (game.shadowrun5e.tests[testClass.name])
        throw new TestRegistrationError(
            `Test ${testClass.name} already exists`,
        );

    game.shadowrun5e.tests[testClass.name] = testClass;
}

export function registerTests() {
    console.debug("SR5 Workshop | Registering tests");

    // Register module test into system test registry
    try {
        registerTest(CustomTest);
    } catch (error) {
        ui.notifications.error(
            "SR5 Workshop | Module failed to register test implementation with Shadowrun5e system. This makes the module incompatible until it is updated.",
        );
        console.error(
            "SR5 Workshop | Module failed to register test implementation with Shadowrun5e system.",
            error,
        );
    }
}
