import {test, expect} from "playwright/test";

test("navigate Nike, check logo", async ({page}) =>{
    await page.goto("https://www.nike.com/");
    let logo = page.getByLabel('Nike Home Page');
    await expect(logo).toBeVisible();
})

test("check New & Featured", async ({page}) =>{
    await page.goto("https://www.nike.com/");
    let featured = page.getByRole('link', { name: 'New & Featured' });
    await expect(featured).toBeVisible();
})

test("check Men", async ({page}) =>{
    await page.goto("https://www.nike.com/");
    let men = page.getByRole('link', { name: 'Men', exact: true });
    await expect(men).toBeVisible();
})

test("check Woman", async ({page}) =>{
    await page.goto("https://www.nike.com/");
    let woman = page.getByRole('link', { name: 'Women' });
    await expect(woman).toBeVisible();
})

test("check Kids", async ({page}) =>{
    await page.goto("https://www.nike.com/");
    let kids = page.getByRole('link', { name: 'Kids' });
    await expect(kids).toBeVisible();
})

test("check Jordan", async ({page}) =>{
    await page.goto("https://www.nike.com/");
    let jordan = page.getByTestId('desktop-menu-container').getByRole('link', { name: 'Jordan' });
    await expect(jordan).toBeVisible();
})

test("click Jordan, check logo Jordan's", async ({page}) =>{
    await page.goto("https://www.nike.com/");
    let jordan = page.getByTestId('desktop-menu-container').getByRole('link', { name: 'Jordan' });
    await jordan.click();
})