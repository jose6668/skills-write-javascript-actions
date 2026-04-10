import * as core from "@actions/core";
import getJoke from "./joke.js";

async function run() {
  // Surface the fetched joke as an action output for later workflow steps.
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke", joke);
}

run();
