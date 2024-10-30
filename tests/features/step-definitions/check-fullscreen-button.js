
import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';

Then('the game should go fullscreen', async function () {
  expect(await this.page.getByText("::backdrop")).to.exist;
});

Then('i should exit fullscreen', async function () {
  expect(await this.page.getByText("Full Screen")).to.exist;

/*   let element = await this.page.getByText("Full Screen")
  let elementVisiblity = element.checkVisibilty(element);
  expect(elementVisiblity).to.be.true; */

  // expect(await this.page.getByText("Full Screen")).toBeVisible(); kan vi göra detta istället?
});