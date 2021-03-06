import { TestSet, TestRunner } from "alsatian";
import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

// Configure Enzyme for React 16
configure({ adapter: new Adapter() });

const testSet = TestSet.create();

console.time("add tests");
testSet.addTestsFromFiles("./src/**/*.test.{ts,tsx}");
console.timeEnd("add tests");

if (testSet.testFixtures.length === 0) {
    console.warn("No tests found");
} else {
    const testRunner = new TestRunner();
    testRunner.outputStream.pipe(process.stdout);

    console.time("run tests");
    testRunner.run(testSet);
    console.timeEnd("run tests");
}
