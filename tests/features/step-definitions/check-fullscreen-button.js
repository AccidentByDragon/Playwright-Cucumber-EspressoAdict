
import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';

/* When('i click to go Fullscreen', async function () {
  let element = await this.driver.findElement(By.css('.go-fullscreen'))
  await element.click();
}
); */

Then('the game should go fullscreen', async function () {
/*   let isFullscreen = await this.driver.executeScript(() => !!document.fullscreenElement);
  expect(isFullscreen).to.be.true; */
});

Then('i should exit fullscreen', async function () {
/*   let isFullscreen = await this.driver.executeScript(() => !!document.fullscreenElement);
  expect(isFullscreen).to.be.false; */
});